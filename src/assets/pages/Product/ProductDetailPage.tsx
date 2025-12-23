import React from 'react';
import { useParams } from 'react-router-dom';
// 💡 導入您的核心商品資料
import { AllProducts } from '../../constants/Product'; 
// 💡 導入您的核心視圖組件
import ProductDetailView from '../../components/Product/ProductDetailView'; 

function ProductDetailPage() {
    // 1. 取得 ID：從路由參數中獲取 :id
    const { id } = useParams();

    // 參數檢查
    if (!id) {
        return (
            <div style={{ padding: '50px', textAlign: 'center' }}>
                <h1>400 - 缺少商品 ID 參數</h1>
                <p>請檢查您的路由連結是否正確。</p>
            </div>
        );
    }

    const productId = parseInt(id);
    
    // 2. 查找資料：根據 ID 查找 AllProducts 陣列
    // 這裡我們將使用 find 方法
    const product = AllProducts.find((p) => p.id === productId);

    // 3. 處理 404
    if (!product) {
        return (
            <div style={{ padding: '50px', textAlign: 'center', color: '#dc3545' }}>
                <h1>404 - 找不到商品</h1>
                <p>商品 ID: {productId} 不存在於商品資料庫中。</p>
            </div>
        );
    }

    // 4. 渲染核心視圖
    return (
        <div className="ProductDetailPageWrapper">
            {/* 💡 將查找到的完整商品物件傳遞給 ProductDetailView */}
            <ProductDetailView product={product} />
        </div>
    );
}

export default ProductDetailPage;