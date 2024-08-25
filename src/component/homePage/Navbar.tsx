import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        }

    return (
        <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-200/20">
<div className="flex">
<img
    src="/logo.png"
    className="h-8 w-124"
    alt=""
  /> <span className="text-xl font-semibold">AutoRide</span>
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
    <a
      href="#"
      className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
    >
      Home
    </a>
    <a
      href="#"
      className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
    >
      Products
    </a>
    <a
      href="#"
      className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
    >
      Pricing
    </a>
    <a
      href="#"
      className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 border-b-2 border-teal-900 md:border-none"
    >
      Contact
    </a>
  </div>
  <button
    className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-teal-900 hover:bg-teal-500 text-white md:rounded"
  >
    Create Account
  </button>
</nav>

    );
};

export default Navbar;