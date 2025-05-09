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
      <div className="bg-purple sticky top-8 left-0 z-50 mx-auto h-[67px] w-full max-w-2xs rounded-[56px] p-4 md:max-w-[600px]">
        <button
          onClick={handleClick}
          aria-label="Open menu"
          className="mx-auto my-0 block cursor-pointer p-1.5 text-[0px] md:hidden"
        >
          Open menu
          <HamburgerIcon />
        </button>
        <div className="hidden md:block">
          <ul className="flex items-center justify-between px-12">
            <li className="text-2xl font-bold text-white">Home</li>
            <li className="text-2xl font-bold text-white">About</li>
            <li className="text-2xl font-bold text-white">Projects</li>
            <li className="text-2xl font-bold text-white">Contact</li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <nav className="bg-purple fixed inset-0 z-50 grid grid-cols-1 items-start justify-center overflow-hidden text-white md:hidden">
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
          <Image
            src="/menu_mobile.png"
            width={390}
            height={179}
            alt=""
            className="mx-auto my-0"
          />
        </nav>
      )}
    </>
  );
};

export default Menu;
