import React from "react";
import logo from "../../photos/logo.png";
import "./Sidebar.css";
import ProductsInCart from "./ProductsInCart";

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

interface ProductsProps {
  cart: Product[];
  count: { [key: number]: number };
  setCount: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
}

function Sidebar({ cart, count, setCount }: ProductsProps) {
  return (
    <div className="sidebar">
      <div className="icons-sidebar">
        <img id="logo" src={logo} width="60" height="64" alt=" " />
      </div>
      <ProductsInCart
        cart={cart}
        count={count}
        setCount={setCount}
      ></ProductsInCart>
    </div>
  );
}

export default Sidebar;
