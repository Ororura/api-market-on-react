import React, { useState, useEffect } from "react";
import "../styles/Products.css";
import vector from "../photos/vector.png";
import filledVector from "../photos/filled_vector.png";
import star from "../photos/star.png";
import axios from "axios";

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
  addToCart: (product: Product) => void;
}

function Products({ addToCart }: ProductsProps) {
  const [shopData, setShopData] = useState<Product[]>([]);
  const [click, setClick] = useState<{ [key: number]: boolean }>({});

  const handleClick = (product: Product) => {
    addToCart(product);

    setClick((prevStatus) => ({
      ...prevStatus,
      [product.id]: true,
    }));
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setShopData(response.data);
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
                src={click[product.id] ? filledVector : vector}
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

export default Products;
