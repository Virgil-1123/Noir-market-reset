二手時裝電商平台 (Fashion Heritage)
這是一個基於 React 與 TypeScript 開發的二手時裝電商前端專案。專案專注於處理孤品（Unique Items）的商業邏輯，並提供流暢的視覺交互體驗。

技術棧 (Tech Stack)
框架: React 18 (Functional Components & Hooks)

語言: TypeScript (嚴格型別定義)

狀態管理: React Context API (全域購物車系統)

樣式: CSS Modules

效能優化: useMemo, useCallback, Lazy Initialization

核心功能與技術實現
1. 獨家孤品購物車系統 (Unique Item Cart Logic)
針對二手市場「一件一品」的特性，我實作了嚴謹的購物車邏輯：

規格限制: 利用 TypeScript Omit 工具型別進行介面轉換，並透過 Math.min 與 some() 確保每件孤品在購物車中的數量上限永遠為 1。

不可變更新: 堅持使用展開運算子 (...) 與 .filter()、.map() 回傳新陣列，確保符合 React 的不可變性原則 (Immutability)，避免不必要的渲染錯誤。

持久化儲存: 透過 useEffect 與 localStorage 實現斷電補償，並在 useState 中使用 Lazy Initialization 優化讀取效能。

2. 高交互圖片放大鏡 (Interactive Image Zoomer)
為了提升使用者對二手商品細節的信任感，我開發了自定義的放大鏡組件：

幾何計算: 透過滑鼠座標與容器比例的動態換算，實現背景圖片位移與放大區域同步。

效能優化: 使用 useCallback 封裝事件處理函式，並透過 pointer-events: none 解決 DOM 元素重疊導致的閃爍問題。

邊界處理: 嚴格限制放大範圍與背景位移，確保 UI 在邊緣觸發時依然穩定。

3. 全域狀態與效能優化
Context API: 封裝自定義 Hook useCart，內建安全檢查機制 (Safety Check)，防止在 Provider 外誤用狀態。

渲染控制: 利用 useMemo 包裝 Context Value，防止因為物件引用地址改變而導致下游組件 (Downstream Components) 發生非必要的重新渲染。

專案亮點 (Project Highlights)
型別安全: 全站使用 TypeScript 定義數據模型，減少運行時錯誤。

架構清晰: 遵循關注點分離 (Separation of Concerns)，將邏輯與 UI 徹底解耦。

使用者體驗: 針對二手電商常見的「重複點擊」與「細節觀看」痛點進行了專門的技術處理。

開發體會 (Engineering Reflections)
在開發這個專案的過程中，我深刻體會到 「技術服務於業務」 的重要性。例如在處理購物車數量時，雖然通用的 quantity++ 很簡單，但為了符合二手商品的業務需求，我選擇在 Context 層面實作更嚴謹的覆寫邏輯。這不僅提升了系統的穩定性，也讓代碼更具語義化。