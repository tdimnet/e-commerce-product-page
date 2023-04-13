import Basket from "../../icons/Basket";
import Burger from "../../icons/Burger";
import Logo from "../../icons/Logo";
import UserImage from '../UserImage'

function Component() {
  return (
    <nav>
      <ul>
        <li>
          <Burger />
        </li>
        <li>
          <Logo />
        </li>
        <li>
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
