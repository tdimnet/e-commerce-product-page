import Basket from "../../icons/Basket";
import Burger from "../../icons/Burger";
import Logo from "../../icons/Logo";
import UserImage from '../UserImage'

function Component() {
  return (
    <nav className="max-w-6xl md:mx-auto md:border-b md:border-slate-300 pb-11">
      <ul className="flex items-baseline justify-evenly md:items-center">
        <li className="md:hidden mr-4">
          <Burger />
        </li>
        <li className="grow md:grow-0 md:mr-14">
          <Logo />
        </li>
        <li className="hidden md:block md:mr-8">Collections</li>
        <li className="hidden md:block md:mr-8">Men</li>
        <li className="hidden md:block md:mr-8">Women</li>
        <li className="hidden md:block md:mr-8">About</li>
        <li className="hidden md:block md:mr-8">Contact</li>
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
