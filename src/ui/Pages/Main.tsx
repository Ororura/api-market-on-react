import React from "react";
import Sidebar from "../Components/Sidebar";
import Products from "../Components/Products";
import { useState } from "react";
import { Product } from "../../constants/interfaces";

export default function Main() {
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product) => {
    const existingProduct = cart.find((el) => el.id === product.id);
    if (!existingProduct) {
      setCart([...cart, product]);
    }
  };
  return (
    <div className="wrapper">
      <Sidebar cart={cart}></Sidebar>
      <Products addToCart={addToCart} />
    </div>
  );
}
