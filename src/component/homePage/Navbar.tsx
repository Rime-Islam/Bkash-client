import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        }

    return (
        <nav className="flex flex-wrap bg-[#2C2C2C] items-center justify-between p-3 bg-transparent">
<div className="flex">
<img
    src="/logo.png"
    className="h-8 w-124"
    alt=""
  /> <span className="text-xl font-semibold text-white">AutoRide</span>
</div>
  <div className="flex md:hidden">
    <button type="button" onClick={toggleMenu}>
        {
            isOpen ? <RxCross2 />:  <AiOutlineMenu />
        }
    </button>

  </div>
  <div className={`${
    isOpen ? 'block' : 'hidden'} items-center justify-center w-full  lg:flex lg:w-auto `}>
<ul className="flex flex-col text-white mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
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
  <button
    className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-white font-semibold hover:bg-amber-600 text-amber-600 hover:text-white md:rounded"
  >
    Login
  </button>
</nav>

    );
};

export default Navbar;