import React, { useState } from "react";
import "./ProductsInCart.css";
import ProductInCart from "./CartProducts";

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

export default function ProductsInCart({ cart }: ProductsProps) {
  const [count, setCount] = useState<{ [key: number]: number }>({});
  return (
    <div className="products-cart">
      {cart.map((product) => (
        <ProductInCart
          key={product.id}
          count={count}
          setCount={setCount}
          product={product}
        ></ProductInCart>
      ))}
    </div>
  );
}
