import { useState } from "react";

import Counter from "../../components/Counter";
import Button from "../../components/Button";

import BasketIcon from "../../icons/Basket";

function Container() {
  const [counter, setCounter] = useState(0);

  function handleCounter(operation) {
    if (operation === "minus" && counter > 0) {
      setCounter(counter - 1);
    } else if (operation === "plus") {
      setCounter(counter + 1);
    }
  }

  function addProductToCart() {
    console.log(counter)
  }

  return (
    <>
      <Counter onClick={handleCounter} counter={counter} />
      <Button onClick={addProductToCart} content="Add to Cart" icon={BasketIcon} />
    </>
  );
}

export default Container;
