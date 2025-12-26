import { createBrowserRouter, Outlet } from "react-router-dom";
import ScrollToTop from "./assets/components/common/ScrollToTop";
import MainHeader from "./assets/components/common/MainHeader";
import Banner from "./assets/components/Home/Banner";
// import Test from "./assets/pages/Test";
import AccountPage from "./assets/components/Home/Login";
import NewsDetailPage from "./assets/pages/Exhibition/NewsDetailPage";
import ProductListPage from "./assets/pages/Product/ProductListPage";
import HomePage from "./assets/pages/Home/HomePage";
import AboutUsPage from "./assets/pages/About/AboutUsPage";
import ProductDetailPage from "./assets/pages/Product/ProductDetailPage";
import Footer from "./assets/components/common/Footer";
import ContactPage from "./assets/pages/Contact/ContactPage";
import LatestNewsPage from "./assets/pages/Exhibition/Latest";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <MainHeader />
      <div className="MainContentSpacer">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/", // 當網址為 / 時
        element: <HomePage />,
      },
      {
        path:"account",
        element:<AccountPage/>,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "latest",
        element: <LatestNewsPage />,
      },
      {
        path: "latest-news/:id",
        element: <NewsDetailPage />,
      },
      {
        path: "ProductList",
        element: <ProductListPage />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "Banner",
        element: (
          <Banner FirstText="Wear Your Freedom" SecondText="穿出你的本質" />
        ),
      },
    ],
  },
  // 如果您需要處理 404 錯誤，可以在這裡新增一個 errorElement
]);
