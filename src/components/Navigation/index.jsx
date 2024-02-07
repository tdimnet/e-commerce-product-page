import { useState } from "react";

import UserImage from "../UserImage";
import NavItem from "../NavItem";

import BasketIcon from "../../icons/Basket";
import BurgerIcon from "../../icons/Burger";
import LogoIcon from "../../icons/Logo";
import CloseIcon from "../../icons/Cross";

function Component() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(true);

  if (isMobileNavOpen) {
    return (
      <nav className="relative">
        <ul className="d-flex absolute -left-6 -top-6 z-10 min-h-screen w-60 bg-white p-6">
          <CloseIcon css="mb-14" onClick={() => console.log("====")} />
          <NavItem content="collections" css="mb-5" />
          <NavItem content="men" css="mb-5" />
          <NavItem content="women" css="mb-5" />
          <NavItem content="about" css="mb-5" />
          <NavItem content="contact" />
        </ul>
      </nav>
    );
  }

  return (
    <nav className="max-w-6xl md:mx-auto md:border-b md:border-slate-300">
      <ul className="flex items-baseline justify-evenly md:items-center">
        <li className="mr-4 md:hidden">
          <BurgerIcon />
        </li>
        <li className="grow md:mr-14 md:grow-0">
          <LogoIcon />
        </li>
        <NavItem content="collections" />
        <NavItem content="men" />
        <NavItem content="women" />
        <NavItem content="about" />
        <NavItem content="contact" />
        <li className="mr-6 md:ml-auto">
          <BasketIcon />
        </li>
        <li>
          <UserImage />
        </li>
      </ul>
    </nav>
  );
}

export default Component;
