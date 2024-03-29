import { useState } from "react";

import BasketWithNotification from "../../containers/BasketWithNotification";
import BurgerIcon from "../../icons/Burger";
import CloseIcon from "../../icons/Cross";
import Dropdown from "../Dropdown";
import LogoIcon from "../../icons/Logo";
import NavItem from "../NavItem";
import UserImage from "../UserImage";

function Component() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="max-w-6xl md:mx-auto md:border-b md:border-slate-300 md:pb-2">
        <ul className="flex items-center justify-evenly md:items-center">
          <li className="mr-4 md:hidden">
            <BurgerIcon onClick={() => setIsMobileNavOpen(true)} />
          </li>
          <li className="grow md:mr-14 md:grow-0">
            <LogoIcon />
          </li>
          <ul className="hidden md:flex">
            <NavItem content="collections" css="md:mr-8" />
            <NavItem content="men" css="md:mr-8" />
            <NavItem content="women" css="md:mr-8" />
            <NavItem content="about" css="md:mr-8" />
            <NavItem content="contact" />
          </ul>
          <li className="mr-6 md:ml-auto">
            <BasketWithNotification
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
          </li>
          <li>
            <UserImage />
          </li>
        </ul>
      </div>
      {isMobileNavOpen && (
        <div>
          <ul className="d-flex absolute -left-6 -top-6 z-20 min-h-screen w-60 bg-white p-6">
            <CloseIcon css="mb-14" onClick={() => setIsMobileNavOpen(false)} />
            <NavItem content="collections" css="mb-5" />
            <NavItem content="men" css="mb-5" />
            <NavItem content="women" css="mb-5" />
            <NavItem content="about" css="mb-5" />
            <NavItem content="contact" />
          </ul>
          <div className="absolute -bottom-6 -left-6 -right-6 -top-6 z-10 min-h-screen min-w-full bg-black/70" />
        </div>
      )}
      {isDropdownOpen && <Dropdown css="absolute left-0 top-0 z-10 top-20" />}
    </nav>
  );
}

export default Component;
