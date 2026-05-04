import { createBrowserRouter, Outlet } from "react-router-dom";
import ScrollToTop from "../components/common/ScrollToTop";
import MainHeader from "../components/common/MainHeader";
import Banner from "../components/Home/Banner";
// import Test from "./pages/Test";
import AccountPage from "../components/Home/Login";
import NewsDetailPage from "../pages/Exhibition/NewsDetailPage";
import ProductListPage from "../pages/Product/ProductListPage";
import HomePage from "../pages/Home/HomePage";
import AboutUsPage from "../pages/About/AboutUsPage";
import ProductDetailPage from "../pages/Product/ProductDetailPage";
import Footer from "../components/common/Footer";
import ContactPage from "../pages/Contact/ContactPage";
import LatestNewsPage from "../pages/Exhibition/Latest";

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
        path: "account",
        element: <AccountPage />,
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
  // 如果需要處理 404 錯誤，可以在這裡新增一個 errorElement
]);
