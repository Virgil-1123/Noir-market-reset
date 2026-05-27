import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import type { ReactNode } from "react";

// --- A. 型別定義 ---

// 購物車商品結構：新增 quantity 屬性
export interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  brand: string;
  imageUrl: string;
  quantity: number; // 追蹤該商品的數量
}

// 暴露給元件使用的 Context 介面
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  updateQuantity: (itemId: number, newQuantity: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  cartCount: number; // 所有商品數量的總和
}

// 初始化 Context
const CartContext = createContext<CartContextType | undefined>(undefined);
//泛型的應用
//當在其他組件使用useCart()時，自動提示有CartContextType裡的屬性可選
//若在addToCart中傳入錯誤資料會立即報錯
const LOCAL_STORAGE_KEY = "ecomm_cart";
//提高程式碼維護性減少人為打錯字的風險

// --- B. Provider 元件 (數據廣播站) ---

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // 1. 狀態初始化：嘗試從 LocalStorage 讀取購物車數據
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    //在useState裡使用函式形式的初始值，確保只在組件首次渲染時執行一次讀取 LocalStorage 的邏輯，避免每次渲染都執行。
    try {
      const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
      //LocalStorage 只能存儲字串，所以將 cartItems陣列轉換成 JSON 字串存儲，讀取時再解析回陣列。
    } catch (error) {
      console.error("Failed to load cart from LocalStorage", error);
    }
    return [];
    //使用try catch來捕獲可能的錯誤，例如 LocalStorage 不可用或存儲的數據格式錯誤，確保應用不會因為這些問題崩潰。
  });

  // 2. 持久化副作用：當 cartItems 狀態改變時，寫入 LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to LocalStorage", error);
    }
  }, [cartItems]);

  //利用useEffect來監聽 cartItems 的變化，確保每次購物車內容更新後都能同步到 LocalStorage，實現數據持久化。

  // 1. 加入購物車
  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    //使用Omit是因為原始資料裡並沒有quantity這個屬性，所以先將它拿掉，等到加入購物車時再補上quantity: 1的初始值。
    setCartItems((prevItems) => {
      // 檢查該商品是否已存在於購物車
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      //用.some判斷商品是否存在
      if (isExisted) {
        // 如果商品已存在：二手商品為孤品，不重複增加數量，直接回傳原清單
        return prevItems;
      } else {
        // 如果是新商品：加入並設定數量為 1
        const itemWithQuantity: CartItem = { ...newItem, quantity: 1 };
        return [...prevItems, itemWithQuantity];
        //使用展開運算符創建一個新的陣列，將原有的商品列表與新商品合併，確保狀態更新是不可變的。
      }
    });
  };

  // 2. 更新特定商品的數量
  const updateQuantity = (itemId: number, newQuantity: number) => {
    // 如果數量歸零，則直接移除商品
    if (newQuantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.min(newQuantity, 1) } 
          // 二手邏輯：確保數量上限鎖死在 1
          //使用pop() slice()會直接修改prevItems陣列
          // 這樣會違反React狀態不可變的原則，可能導致購物刪除，但畫面上數字沒有跳動。
          : item,
      );
    });
  };

  // 3. 移除商品
  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  //用現有購物車資料去比對id是否相符，不相符就刪除

  // 4. 清空購物車
  const clearCart = () => {
    setCartItems([]);
  };

  // 5. 計算總件數 (所有商品數量的總和)
  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);
  //其實可以只用cartItems.length來計算購物車裡有幾種商品
  //但使用reduce()來累加item.quantity可以確保即使未來改成允許多件商品
  //cartCount仍然能正確反映總數量。

  // 組合 Context 提供的值 (使用 useMemo 優化性能)
  const contextValue: CartContextType = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      cartCount,
    }),
    [cartItems, cartCount],
  ); // 只有當 cartItems 或 cartCount 改變時才重新計算 value
  //節省效能，避免不必要的下游組件重新渲染。

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

// --- C. 自定義 Hook (Consumer) ---

/**
 * @function useCart
 * 專門用於獲取 CartContext 數據的 Hook。
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

//封裝成useCart這個自訂義hook，讓其他組件可以直接調用useCart()來獲取購物車相關的數據和函式
// 簡化了使用流程，並且確保只有在CartProvider內部使用時才不會報錯。