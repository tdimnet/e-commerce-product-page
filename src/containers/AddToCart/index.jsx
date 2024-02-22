import { useState } from "react";

import { useCart } from "../../contexts/Cart";
import BasketIcon from "../../icons/Basket";
import Button from "../../components/Button";
import Counter from "../../components/Counter";

function Container({ productName, productPrice, productImage }) {
  const { addToCart, cart } = useCart();
  const [counter, setCounter] = useState(0);

  function handleCounter(operation) {
    if (operation === "minus" && counter > 0) {
      setCounter(counter - 1);
    } else if (operation === "plus") {
      setCounter(counter + 1);
    }
  }

  function addProductToCart() {
    const product = {
      productImage,
      productName,
      productPrice,
    };

    const products = new Array(counter).fill(product);
    addToCart(products);
  }

  return (
    <div className="grid gap-3 md:grid-cols-[157px_272px] md:items-center">
      <Counter onClick={handleCounter} counter={counter} />
      <Button
        onClick={addProductToCart}
        content="Add to Cart"
        icon={BasketIcon}
      />
    </div>
  );
}

export default Container;
