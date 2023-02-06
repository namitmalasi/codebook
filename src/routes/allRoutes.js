import { Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  ProductDetail,
  Login,
  Register,
  Cart,
  Order,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
