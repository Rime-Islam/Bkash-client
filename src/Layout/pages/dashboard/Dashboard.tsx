import { FiAlignJustify } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/app/hook";
import { useCurrentUser } from "../../../Redux/features/Auth/authSlice";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { IoIosCreate } from "react-icons/io";



const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser);
    

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        }
    return (
        <div className="flex h-screen bg-gray-100">
        {/* sidebar */}
        <div className={`${
          isOpen ? 'block' : 'hidden'} lg:flex w-64 bg-gray-800`}>
        <div>
        <div className="w-64 flex justify-center items-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase"><span className="text-amber-500">{user?.role}</span> Dashboard</span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
                <ul>
                <li>
                    <NavLink
                                    to="/dashboard/create_car"
                                    className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex justify-center px-4 py-2 mt-2" : "flex justify-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                    aria-current="page"
                                    >
                        <IoIosCreate className="mt-1 mr-2.5"/>  Manage Car
                        </NavLink>
                 </li>
                <li>
                    <NavLink
                                    to="/dashboard/manage_booking"
                                    className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex justify-center px-4 py-2 mt-2" : "flex justify-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                    aria-current="page"
                                    >
                        <IoIosCreate className="mt-1 mr-2.5"/>  Manage Bookings
                        </NavLink>
                 </li>
                <li>
                    <NavLink
                                    to="/dashboard/manage_return_car"
                                    className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex justify-center px-4 py-2 mt-2" : "flex justify-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                    aria-current="page"
                                    >
                        <IoIosCreate className="mt-1 mr-2.5"/>  Manage Return Cars
                        </NavLink>
                 </li>
                <li>
                    <NavLink
                                    to="/dashboard/user_management"
                                    className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex justify-center px-4 py-2 mt-2" : "flex justify-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                    aria-current="page"
                                    >
                        <IoIosCreate className="mt-1 mr-2.5"/>  User Management
                        </NavLink>
                 </li>
  
      
                </ul>
            </nav>
          </div>
        </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
            <button type="button" onClick={toggleMenu} >
              {
                  isOpen ? <RxCross2 />:  <AiOutlineMenu />
              }
          </button>
              <input
                className="mx-4 w-full border rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center pr-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
              <FaUserCircle />
              </button>
            </div>
          </div>
          <div className="p-4">
           
          <Outlet ></Outlet>

          </div>
        </div>
      </div>
      
      
    );
};

export default Dashboard;