import { useState } from "react";

import MinusIcon from "../../icons/Minus";
import PlusIcon from "../../icons/Plus";

function Component() {
    const [ counter, setCounter ] = useState(0)

  function handleCounter(operation) {
    if (operation === "minus" && counter > 0) {
        setCounter(counter - 1)
    } else if (operation === "plus") {
        setCounter(counter + 1)
    }
  }

  return (
    <div className="flex items-center justify-between rounded bg-gray-100 px-4 py-2">
      <MinusIcon onClick={() => handleCounter("minus")} />
      <p className="font-bold">{counter}</p>
      <PlusIcon onClick={() => handleCounter("plus")} />
    </div>
  );
}

export default Component;
