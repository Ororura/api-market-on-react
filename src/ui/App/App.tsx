import React from "react";
import "./App.css";
import Main from "../Pages/Main";
import { ProductProvider } from "../../core/Context";
import { useContext } from "react";

function App() {
  return (
    <ProductProvider>
      <Main></Main>
    </ProductProvider>
  );
}

export default App;
