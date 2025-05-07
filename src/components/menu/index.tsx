"use client";

import CloseIcon from "@/components/icons/close-icon";
import HamburgerIcon from "@/components/icons/hamburger-icon";
import Image from "next/image";
import React from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bg-purple sticky top-8 left-0 z-50 mx-auto w-full max-w-2xs rounded-[56px] p-4">
        <button
          onClick={handleClick}
          aria-label="Open menu"
          className="mx-auto my-0 block cursor-pointer p-1.5 text-[0px]"
        >
          Open menu
          <HamburgerIcon />
        </button>
      </div>
      {isOpen && (
        <nav className="bg-purple fixed inset-0 z-50 grid grid-cols-1 items-start justify-center overflow-hidden text-white">
          <ul className="mx-auto my-0">
            <li className="my-14">
              <button
                onClick={handleClick}
                aria-label="Close menu"
                className="mx-auto my-0 block cursor-pointer p-1.5 text-[0px]"
              >
                Close menu
                <CloseIcon />
              </button>
            </li>
            <li className="mb-8 text-center text-4xl font-bold">Home</li>
            <li className="mb-8 text-center text-4xl font-bold">About</li>
            <li className="mb-8 text-center text-4xl font-bold">Projects</li>
            <li className="mb-8 text-center text-4xl font-bold">Contact</li>
          </ul>
          <Image src="/menu_mobile.png" width={390} height={179} alt="" />
        </nav>
      )}
    </>
  );
};

export default Menu;
