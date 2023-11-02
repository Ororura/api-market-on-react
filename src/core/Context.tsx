import React, { useState, ReactNode } from "react";
import { Product, Rating } from "../constants/interfaces";
import ProductsApi from "../services/ProductsApi";

export const ProductContext = React.createContext({} as IProdValues);

interface IProductProviderProps {
  children: ReactNode;
}

interface IProdValues {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  count: { [key: number]: number };
  setCount: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
  shopData: Product[];
  setShopData: React.Dispatch<React.SetStateAction<Product[]>>;
  getProducts: () => Promise<Product[]>;
}

export const ProductProvider: React.FC<IProductProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [count, setCount] = useState<{ [key: number]: number }>({});
  const [shopData, setShopData] = useState<Product[]>([]);

  const getProducts = (): Promise<Product[]> => {
    return ProductsApi().then((response) => {
      if (response) {
        setShopData(response.data);
        return response.data;
      }
      return [];
    });
  };

  const values = { cart, setCart, count, setCount, shopData, setShopData, getProducts };
  return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
};
