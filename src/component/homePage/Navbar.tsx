import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import {  Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/app/hook";
import { logout, useCurrentUser } from "../../Redux/features/Auth/authSlice";
import { IoIosMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser);
    

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        }

        const handleLogOut = async() => {
          console.log('log out')
          dispatch(logout());
        }
        
        const [theme, setTheme] = useState<'light' | 'dark'>(
          (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
        );

        const toggleTheme = () => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          setTheme(newTheme);
          localStorage.setItem('theme', newTheme);
        };
      
        useEffect(() => {
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }, [theme]);

    return (
        <div className="fixed container mx-auto z-10 bg-opacity-30">
          <div className=" flex dark:bg-gray-800 bg-[#A3CADB] items-center justify-between p-3 ">
      <div className="flex">
      <img
          src="/logo.png"
          className="h-8 w-124"
          alt=""
        /> <span className="text-xl font-semibold text-white">AutoRide</span>
       <button onClick={toggleTheme} className="mt-1 ml-5">
      {theme === 'light' ? (
          <>
            <IoIosMoon className="w-6 h-6  dark:text-white" />
           
          </>
        ) : (
          <>
            <MdSunny className="w-6 h-6  dark:text-white" />
          </>
        )}
      </button>
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
      <ul className="flex flex-col text-end md:text-start gap-2 text-white mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
      <div className="flex  items-center md:w-full lg:w-auto ">
          <button type="button" onClick={toggleMenu} className=" ">
              {
                  isOpen ? <RxCross2 className="ml-28 md:ml-0"/>:  <AiOutlineMenu className="hidden "/>
              }
          </button>

        </div>
      <li className="font-semibold">
      <NavLink
                      to="/"
                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#FC7E01]" : "" }
                      aria-current="page"
                    >
            Home
          </NavLink>
      </li>
      <li className="font-semibold">
      <NavLink
                      to="/about"
                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#FC7E01]" : "" }
                      aria-current="page"
                    >
            About
          </NavLink>
      </li>
      <li className="font-semibold">
      <NavLink
                      to="/cars"
                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#FC7E01]" : "" }
                      aria-current="page"
                    >
            Cars
          </NavLink>
      </li>
      <li className="font-semibold">
      <NavLink
                      to="/contact"
                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#FC7E01]" : "" }
                      aria-current="page"
                    >

              Contact
          </NavLink>
      </li>
      <li className="font-semibold">
     {
      user &&  <NavLink
      to="/dashboard"
      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#FC7E01]" : "" }
      aria-current="page"
    >

Dashboard
</NavLink> 
     }
      </li>
      </ul>
        </div>
      
      <div className="flex gap-2 font-semibold">
     {
      !user &&  <Link to="/login">
      <button
         className=" hidden md:flex w-full md:w-auto px-3 py-1 text-right bg-white font-semibold hover:bg-[#FC7E01] text-[#FC7E01] hover:text-white md:rounded"
       >
         Signin
       </button>
       </Link>
     }
  
     {
      user &&   <button onClick={handleLogOut}
      className=" hidden md:flex w-full md:w-auto px-3 py-1 text-right hover:bg-white font-semibold bg-[#FC7E01] hover:text-[#FC7E01] text-white md:rounded"
    >
      Logout
    </button>
     }
     
      </div>
      </div>
        </div>

    );
};

export default Navbar;