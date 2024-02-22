import { useState } from "react";

import MinusIcon from "../../icons/Minus";
import PlusIcon from "../../icons/Plus";

function Component({ onClick, counter }) {
  return (
    <div className="flex h-14 items-center justify-between rounded bg-gray-100 px-4">
      <MinusIcon onClick={() => onClick("minus")} />
      <p className="font-bold">{counter}</p>
      <PlusIcon onClick={() => onClick("plus")} />
    </div>
  );
}

export default Component;
