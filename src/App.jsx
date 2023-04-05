import React from "react";
import ReactDOM from "react-dom/client";

import ProductPage from "./screens/Product";

function App() {
  return (
    <div>
      <ProductPage />
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));
