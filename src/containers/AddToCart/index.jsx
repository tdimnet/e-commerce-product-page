import { useState } from "react";

import { useCart } from "../../contexts/Cart";

import Counter from "../../components/Counter";
import Button from "../../components/Button";

import BasketIcon from "../../icons/Basket";

function Container() {
  const { addToCart } = useCart();
  const [counter, setCounter] = useState(0);

  function handleCounter(operation) {
    if (operation === "minus" && counter > 0) {
      setCounter(counter - 1);
    } else if (operation === "plus") {
      setCounter(counter + 1);
    }
  }

  function addProductToCart() {
    addToCart(counter);
  }

  return (
    <div className="md:grid md:grid-cols-[157px_272px] md:gap-3 md:items-center">
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
