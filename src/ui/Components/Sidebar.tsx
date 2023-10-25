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
}

function Sidebar({ cart }: ProductsProps) {
  return (
    <div className="sidebar">
      <div className="icons-sidebar">
        <img id="logo" src={logo} width="60" height="64" alt=" " />
      </div>
      <ProductsInCart cart={cart}></ProductsInCart>
    </div>
  );
}

export default Sidebar;
