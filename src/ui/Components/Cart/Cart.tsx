import React, { useState } from "react";
import "./Cart.css";
import Cart from "../ItemsInCart/ItemsInCart";

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
  const filteredCart = cart.filter((product) => count[product.id] > 0);
  return (
    <div className="products-cart">
      {filteredCart.map((product) => (
        <Cart
          key={product.id}
          count={count}
          setCount={setCount}
          product={product}
        ></Cart>
      ))}
    </div>
  );
}
