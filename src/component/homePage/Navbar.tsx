import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import {  Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        }

    return (
        <div className="fixed w-full mx-auto z-10 bg-opacity-30">
          <div className=" flex bg-[#2C2C2C] items-center justify-between p-3 ">
      <div className="flex">
      <img
          src="/logo.png"
          className="h-8 w-124"
          alt=""
        /> <span className="text-xl font-semibold text-white">AutoRide</span>
      </div>
        <div className="flex lg:hidden items-center md:justify-center md:w-full lg:w-auto ">
          <button type="button" onClick={toggleMenu} className="">
              {
                  isOpen ? <RxCross2 className=" hidden"/>:  <AiOutlineMenu className="text-white bg-red"/>
              }
          </button>

        </div>
        <div className={`${
          isOpen ? 'block' : 'hidden'} items-center justify-center w-full  lg:flex lg:w-auto `}>
      <ul className="flex flex-col text-end md:text-start gap-2 text-white mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      <div className="flex  items-center md:w-full lg:w-auto ">
          <button type="button" onClick={toggleMenu} className=" ">
              {
                  isOpen ? <RxCross2 className="ml-28 md:ml-0"/>:  <AiOutlineMenu className="hidden "/>
              }
          </button>

        </div>
      <li>
      <NavLink
                      to="/"
                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600" : "" }
                      aria-current="page"
                    >
            Home
          </NavLink>
      </li>
      <li>
      <NavLink
                      to="/about"
                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600" : "" }
                      aria-current="page"
                    >
            About
          </NavLink>
      </li>
      <li>
      <NavLink
                      to="/cars"
                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600" : "" }
                      aria-current="page"
                    >
            Cars
          </NavLink>
      </li>
      <li>
      <NavLink
                      to="/contact"
                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600" : "" }
                      aria-current="page"
                    >

              Contact
          </NavLink>
      </li>
      </ul>
        </div>
       <Link to="/login">
       <button
          className=" hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-white font-semibold hover:bg-amber-600 text-amber-600 hover:text-white md:rounded"
        >
          Login
        </button>
        </Link>
      </div>
        </div>

    );
};

export default Navbar;