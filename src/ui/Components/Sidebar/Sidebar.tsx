import React from "react";
import logo from "../../../photos/logo.png";
import "./Sidebar.css";
import Cart from "../Cart/Cart";

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
      <Cart cart={cart} count={count} setCount={setCount}></Cart>
    </div>
  );
}

export default Sidebar;
