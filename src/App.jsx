import React from "react";
import ReactDOM from "react-dom/client";

import { CartProvider } from "./contexts/CartContext";

import ProductPage from "./screens/Product";

function App() {
  return (
    <CartProvider>
      <ProductPage />
    </CartProvider>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
