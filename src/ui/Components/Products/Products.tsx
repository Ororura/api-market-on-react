import React, { useState, useEffect, useContext } from "react";
import "./Products.css";
import vector from "../Assets/Photos/vector.png";
import filledVector from "../Assets/Photos/filled_vector.png";
import star from "../Assets/Photos/star.png";
import ProductsApi from "../../../services/ProductsApi";
import { Product } from "../../../constants/interfaces";
import { ProductContext } from "../../../core/Context";

interface ProductsProps {
  count: { [key: number]: number };
  setCount: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  addToCart: (product: Product) => void;
}

export default function Products() {
  const { cart, setCart } = useContext(ProductContext);
  const { count, setCount } = useContext(ProductContext);
  const { shopData, setShopData } = useContext(ProductContext);
  const { getProducts } = useContext(ProductContext);

  const handleClick = (product: Product) => {
    const existingProduct = cart.find((el) => el.id === product.id);
    if (!existingProduct) {
      setCart([...cart, product]);
    }
    setCount((prevCount) => ({
      ...prevCount,
      [product.id]: prevCount[product.id] ? prevCount[product.id] + 1 : 1,
    }));
  };

  useEffect(() => {
    console.log(cart);
    getProducts();
  }, []);

  return (
    <div className="products">
      {shopData.map((product) => (
        <div className="product" key={product.id}>
          <div className="img-frame">
            <img className="img-product" src={product.image} alt={product.title} />
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
