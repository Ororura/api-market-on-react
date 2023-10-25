import React, { useState, useEffect } from "react";
import "./Products.css";
import vector from "../../../photos/vector.png";
import filledVector from "../../../photos/filled_vector.png";
import star from "../../../photos/star.png";
import ProductsApi from "../../../services/ProductsApi";
import { Product } from "../../../constants/interfaces";

interface ProductsProps {
  count: { [key: number]: number };
  setCount: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  addToCart: (product: Product) => void;
}

export default function Products({
  addToCart,
  count,
  setCount,
}: ProductsProps) {
  const [shopData, setShopData] = useState<Product[]>([]);

  const handleClick = (product: Product) => {
    addToCart(product);
    setCount((prevCount) => ({
      ...prevCount,
      [product.id]: prevCount[product.id] ? prevCount[product.id] + 1 : 1,
    }));
  };

  useEffect(() => {
    ProductsApi().then((response) => {
      if (response) {
        setShopData(response.data);
      }
    });
  }, []);

  return (
    <div className="products">
      {shopData.map((product) => (
        <div className="product" key={product.id}>
          <div className="img-frame">
            <img
              className="img-product"
              src={product.image}
              alt={product.title}
            />
          </div>
          <p>Id: {product.id}</p>
          <p
            style={{
              width: "187px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            Title: {product.title}
          </p>
          <p
            style={{
              width: "187px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            Desc: {product.description}
          </p>
          <p>Category: {product.category}</p>
          <p>Count: {product.rating.count}</p>
          <div className="price-rating">
            <div className="rate">
              <img src={star} alt="" width="20" height="20" />
              <p>{product.rating.rate}</p>
            </div>
            <div className="price">
              <img
                className="add-prod"
                src={count[product.id] > 0 ? filledVector : vector}
                alt=""
                width="18"
                height="20"
                onClick={() => handleClick(product)}
              />
              <p>{product.price}$</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
