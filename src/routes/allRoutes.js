import { Routes, Route } from "react-router-dom";
import { Home, Products, ProductDetail, Login, Register } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};
