import React from "react";
import ProductDetailView from "../components/Product/ProductDetailView";
import { AllProducts } from "../constants/Product"; 
import ExhibitionCards from "../components/Home/ExhibitionCard";
import LatestNewsPage from "../components/Exhibition/Category";
import DetailContentRenderer from "../components/Exhibition/DetailContentRenderer";

const Test: React.FC = () => {
    return (
        // <ProductDetailView product={AllProducts[0]}/>
        // <ExhibitionCards/>
        <LatestNewsPage/>
    );
}

export default Test;