import React, { useState } from "react";
import "./ProductsInCart.css";
import CartProducts from "./CartProducts";

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

export default function ProductsInCart({
  cart,
  count,
  setCount,
}: ProductsProps) {
  return (
    <div className="products-cart">
      {cart.map((product) => (
        <CartProducts
          key={product.id}
          count={count}
          setCount={setCount}
          product={product}
        ></CartProducts>
      ))}
    </div>
  );
}
