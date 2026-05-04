import { CartProvider } from "./pages/Cart/CartContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
