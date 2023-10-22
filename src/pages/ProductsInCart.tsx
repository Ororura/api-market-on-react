import React from "react";

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
  console.log(cart);
  return <div className="products-cart"></div>;
}
