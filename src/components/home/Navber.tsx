import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiMenuFill } from "react-icons/ri";
import { useAuth } from "../../utils/AuthContext";
import Swal from "sweetalert2";


const Navber = () => {
    const { user, logout } = useAuth();
    const [isOpened, setIsOpened] = useState(false);
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpened(!isOpened);
    };
  
    const toggleAccordion = () => {
      setIsAccordionOpen(!isAccordionOpen);
    };
  
    const handleLogout = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You will be logged out!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d40950",
          cancelButtonColor: "#6c757d",
          confirmButtonText: "Yes, logout!",
        }).then((result) => {
          if (result.isConfirmed) {
            logout(); 
          }
        });
      }
      return (
        <nav className="bg-white shadow-md   relative z-10 ">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link to="/" className="py-2">
            <img src="https://i.ibb.co.com/4RFyhqsC/Bkash-Logo-removebg-preview.png" className="w-20" alt="Logo" />
          </Link>
  
          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6">
            <div className="relative group">
      <Link to="/" className="block mb-2 text-[#d40950]">Home</Link>
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#d40950] transition-all duration-300 group-hover:w-full"></span>
    </div>
  {
    user &&
    <div className="relative group">
      <Link to="/dashboard" className="block mb-2 text-[#d40950]">Dashboard</Link>
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#d40950] transition-all duration-300 group-hover:w-full"></span>
    </div>
  }
   
          </div>
  
          <div className="hidden lg:flex items-center space-x-4">
            {/* Contact Us Button */}
           {
            user ? (
                <div onClick={() => handleLogout()}
                className="bg-[#d40950] hover:bg-[#d40950e1] font-bold flex gap-2 hover:gap-4 text-white px-3 py-3 rounded-sm shadow-md shadow-gray-500/50 hover:shadow-gray-800/80 opacity-85 transition-all"
              >
                <span>Logout</span> 
              </div>
            ) : (
                <Link to="/login"
                className="bg-[#d40950] hover:bg-[#d40950e1] font-bold flex gap-2 hover:gap-4 text-white px-3 py-3 rounded-sm shadow-md shadow-gray-500/50 hover:shadow-gray-800/80 opacity-85 transition-all"
              >
                <span>Login</span> <IoIosArrowForward className="w-5 h-3 mt-1.5 font-bold"/>
              </Link>
            )
           }
          </div>
  
          <button
            className="block md:hidden focus:outline-none text-black"
            onClick={toggleMenu}
          >
            {isOpened ? <RxCross2 className="w-6 h-6"/> : <RiMenuFill className="w-6 h-6"/>}
          </button>
        
  
        {isOpened && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-[10vh] left-0 w-full h-auto pb-10 bg-[#d40950] text-white z-50"
          >
            <div className="flex flex-col items-start p-8 space-y-4">
            <div>
                <button
                  className="text-lg font-bold flex items-center justify-between w-[90vw] focus:outline-none"
                  onClick={toggleAccordion}
                >
               
                </button>
               
              </div>
             <Link to="/"> <h3 className=" text-lg">Home</h3></Link>
             {
    user &&
    <div className="relative group">
      <Link to="/dashboard" className="block mb-2 text-white">Dashboard</Link>
     
    </div>
  }
            </div>
            
          <div className="flex justify-center">
          <div className=" px-4">
        
        
      </div></div> 
        
      {
            user ? (
                <div onClick={() => handleLogout()}
                className="bg-white justify-center text-[#d40950e1] font-bold flex gap-2 hover:gap-4 text-white px-3 py-3 rounded-sm shadow-md shadow-gray-500/50 hover:shadow-gray-800/80 opacity-85 transition-all"
              >
                Logout
              </div>
            ) : (
                <Link to="/login"
                className="bg-[#d40950] hover:bg-[#d40950e1] font-bold flex gap-2 hover:gap-4 text-white px-3 py-3 rounded-sm shadow-md shadow-gray-500/50 hover:shadow-gray-800/80 opacity-85 transition-all"
              >
                <span>Login</span> <IoIosArrowForward className="w-5 h-3 mt-1.5 font-bold"/>
              </Link>
            )
           }
          </motion.div>
        )}
        </div>
      </nav>         
      );
  };

export default Navber;