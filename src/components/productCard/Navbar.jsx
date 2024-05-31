"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = (
    <>
      <div className="text-md flex flex-col lg:flex-row gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/products">Shop</Link>
        </li>
      </div>
    </>
  );

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto py-6">
      {/* Start */}
      <div className="nav navbar-start flex flex-row items-center gap-24">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
          <a
            href="#"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
          >
            <span className=" text-2xl font-bold uppercase">FlowLaunch</span>
          </a>
        </div>
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navbar}</ul>
      </div>
      {/* Center */}

      {/* End */}
      <div className="navbar-end pr-2 lg:pr-0 flex flex-row gap-8">
        <div>
          <LuShoppingCart className="text-xl" />
        </div>
        {/* login / logout button */}
        <div></div>
        <div className="border-r-[1.5px] h-6 border-r-[#1E1E1E]"></div>
        <div>
          <HiOutlineMenuAlt3 className="text-xl lg:flex hidden" />
        </div>
      </div>

      {/*Dropdown Mobile Menu*/}
      <div className="dropdown">
        <div
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden"
        >
          {isOpen === true ? (
            <FaTimes className="text-lg" />
          ) : (
            <FaAlignJustify className="text-lg"></FaAlignJustify>
          )}
        </div>
        <ul
          tabIndex={0}
          className={`${
            isOpen ? "" : "hidden"
          } menu menu-sm dropdown-content mt-6 -ml-40 w-56 z-[1] p-2 shadow bg-base-100 rounded-box  `}
        >
          {navbar}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
