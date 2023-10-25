import React from "react";
import Sidebar from "../Components/Sidebar";
import Products from "../Components/Products";
import { useState } from "react";
import { Product } from "../../constants/interfaces";

export default function Main() {
  const [count, setCount] = useState<{ [key: number]: number }>({});
  const [cart, setCart] = useState<Product[]>([]);
  const addToCart = (product: Product) => {
    const existingProduct = cart.find((el) => el.id === product.id);
    if (!existingProduct) {
      setCart([...cart, product]);
    }
  };
  return (
    <div className="wrapper">
      <Sidebar cart={cart} count={count} setCount={setCount}></Sidebar>
      <Products addToCart={addToCart} count={count} setCount={setCount} />
    </div>
  );
}
