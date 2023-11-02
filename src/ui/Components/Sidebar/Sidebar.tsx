import React from "react";
import logo from "../Assets/Photos/logo.png";
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

interface ProductsProps {}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="icons-sidebar">
        <img id="logo" src={logo} width="60" height="64" alt=" " />
      </div>
      <Cart></Cart>
    </div>
  );
}

export default Sidebar;
