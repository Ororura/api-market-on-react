import React, { useEffect } from "react";
import { useState } from "react";
import plus from "../../photos/plus2.png";
import minus from "../../photos/minus.png";
import { Product } from "../../constants/interfaces";

interface ProductsProps {
  product: Product;
  count: { [key: number]: number };
  setCount: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
}

export default function CartProducts({
  product,
  count,
  setCount,
}: ProductsProps) {

  const plusCount = (productId: number) => {
    setCount((prevCount) => ({
      ...prevCount,
      [productId]: prevCount[productId] + 1,
    }));
  };

  const minusCount = (productId: number) => {
    setCount((prevCount) => ({
      ...prevCount,
      [productId]: prevCount[productId] - 1,
    }));
  };

  useEffect(() => {
    if (count[1] == 0) {
      console.log("test");
    }
  }, [count]);
  

  return (
    <div key={product.id} className="product-in-cart">
      <div className="img-frame">
        <img
          src={product.image}
          alt={product.title}
          className="img-product"
        ></img>
      </div>
      <p
        className="product-title"
        style={{
          width: "140px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {product.title}
      </p>
      <p>{product.price}$</p>
      <div className="product-counter">
        <img
          className="plus"
          onClick={() => plusCount(product.id)}
          src={plus}
          alt=""
        />
        <p className="counter" style={{ fontSize: "18px", marginTop: "3px" }}>
          {count[product.id] || 1}
        </p>
        <img
          className="minus"
          onClick={() => minusCount(product.id)}
          src={minus}
          alt=""
        />
      </div>
    </div>
  );
}
