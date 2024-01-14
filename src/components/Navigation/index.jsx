import Basket from "../../icons/Basket";
import Burger from "../../icons/Burger";
import Logo from "../../icons/Logo";
import UserImage from "../UserImage";

function Component() {
  return (
    <nav className="max-w-6xl md:mx-auto md:border-b md:border-slate-300">
      <ul className="flex items-baseline justify-evenly md:items-center">
        <li className="mr-4 md:hidden">
          <Burger />
        </li>
        <li className="grow md:mr-14 md:grow-0">
          <Logo />
        </li>
        <li className="hidden md:mr-8 md:block">Collections</li>
        <li className="hidden md:mr-8 md:block">Men</li>
        <li className="hidden md:mr-8 md:block">Women</li>
        <li className="hidden md:mr-8 md:block">About</li>
        <li className="hidden md:mr-8 md:block">Contact</li>
        <li className="mr-6 md:ml-auto">
          <Basket />
        </li>
        <li>
          <UserImage />
        </li>
      </ul>
    </nav>
  );
}

export default Component;
