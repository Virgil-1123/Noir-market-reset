import React, { createContext, useState, useContext, useEffect, useMemo } from "react";
import type { ReactNode } from 'react';

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
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    updateQuantity: (itemId: number, newQuantity: number) => void;
    removeFromCart: (itemId: number) => void;
    clearCart: () => void;
    cartCount: number; // 所有商品數量的總和
}

// 初始化 Context
const CartContext = createContext<CartContextType | undefined>(undefined);
const LOCAL_STORAGE_KEY = 'ecomm_cart';

// --- B. Provider 元件 (數據廣播站) ---

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    // 1. 狀態初始化：嘗試從 LocalStorage 讀取購物車數據
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        try {
            const storedCart = localStorage.getItem(LOCAL_STORAGE_KEY);
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error("Failed to load cart from LocalStorage", error);
        }
        return [];
    });

    // 2. 持久化副作用：當 cartItems 狀態改變時，寫入 LocalStorage
    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
        } catch (error) {
            console.error("Failed to save cart to LocalStorage", error);
        }
    }, [cartItems]);

    // --- 核心操作函式 ---

    // 1. 加入購物車 (處理數量遞增)
    const addToCart = (newItem: Omit<CartItem, 'quantity'>) => {

        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id);
            let newCartItems: CartItem[];

            if (existingItemIndex > -1) {
                // 如果商品已存在：增加數量
                newCartItems = [...prevItems];
                newCartItems[existingItemIndex] = {
                    ...newCartItems[existingItemIndex],
                    quantity: newCartItems[existingItemIndex].quantity + 1,
                };
            } else {
                // 如果是新商品：加入並設定數量為 1
                const itemWithQuantity: CartItem = { ...newItem, quantity: 1 };
                newCartItems = [...prevItems, itemWithQuantity];
            }
            
            const newCount = newCartItems.reduce((total, item) => total + item.quantity, 0);

            return newCartItems;
        });
    };
    
    // 2. 更新特定商品的數量
    const updateQuantity = (itemId: number, newQuantity: number) => {
        // ... (其他函式不變，為保持程式碼簡潔，省略了 DEBUG)
        if (newQuantity <= 0) {
            removeFromCart(itemId);
            return;
        }

        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.id === itemId);

            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: newQuantity,
                };
                return updatedItems;
            }
            return prevItems;
        });
    };

    // 3. 移除商品
    const removeFromCart = (itemId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    // 4. 清空購物車
    const clearCart = () => {
        setCartItems([]);
    };

    // 5. 計算總件數 (所有商品數量的總和)
    const cartCount = useMemo(() => {
        // 🚨 DEBUG 3 (橙色): 確認 cartItems 變化時，cartCount 是否重新計算
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);


    // 組合 Context 提供的值 (使用 useMemo 優化性能)
    const contextValue: CartContextType = useMemo(() => ({
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartCount,
    }), [cartItems, cartCount]); // 只有當 cartItems 或 cartCount 改變時才重新計算 value

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
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
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};