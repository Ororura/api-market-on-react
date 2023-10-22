import React from "react";
import "../styles/App.css";
import Sidebar from "./Sidebar";
import Products from "./Products";
import { useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  count: number;
  rating: Rating;
}

interface Rating {
  rate: number;
  count: number;
}

function App() {
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

export default App;
