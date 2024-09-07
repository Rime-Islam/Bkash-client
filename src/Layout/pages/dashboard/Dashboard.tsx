import { FaUserCircle } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/app/hook";
import {  useCurrentUser } from "../../../Redux/features/Auth/authSlice";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Sidebar from "./Sidebar";



const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const dispatch = useAppDispatch();
    // const user = useAppSelector(useCurrentUser);
    
   

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        }
    return (
        <div className="flex h-screen bg-gray-100">
        {/* sidebar */}
        <Sidebar isOpen={isOpen}/>
        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
            <button type="button" onClick={toggleMenu} className="flex lg:hidden">
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