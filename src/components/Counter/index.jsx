import { useState } from 'react'

import MinusIcon from "../../icons/Minus";
import PlusIcon from "../../icons/Plus";

function Component() {
  return (
    <div className="bg-gray-100 flex py-2 px-4 items-center justify-between rounded">
      <MinusIcon />
      <p className="font-bold">0</p>
      <PlusIcon />
    </div>
  );
}

export default Component;
