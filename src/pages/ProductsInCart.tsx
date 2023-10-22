import React, { useState } from "react";
import "../styles/ProductsInCart.css";
import plus from "../photos/plus2.png";
import minus from "../photos/minus.png";

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

  const plusCount = (productId: number) => {
    setCount((prevCount) => ({
      ...prevCount,
      [productId]: (prevCount[productId] || 1) + 1,
    }));
    console.log(count);
  };

  const minusCount = (productId: number) => {
    const updatedCount = Math.max((count[productId] || 0) - 1, 0);
    if (updatedCount === 0) {
      setCount((prevCount) => {
        const newCount = { ...prevCount };
        delete newCount[productId];
        return newCount;
      });
    } else {
      setCount((prevCount) => ({
        ...prevCount,
        [productId]: updatedCount,
      }));
    }
    console.log(count);
  };

  return (
    <div className="products-cart">
      {cart.map((product) => (
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
            <p
              className="counter"
              style={{ fontSize: "18px", marginTop: "3px" }}
            >
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
      ))}
    </div>
  );
}
