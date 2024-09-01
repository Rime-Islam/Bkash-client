import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../Redux/app/hook";
import { logout, useCurrentUser } from "../../../Redux/features/Auth/authSlice";
import { IoIosCreate } from "react-icons/io";


interface SidebarProps {
    isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser);
        
    const handleLogOut = async() => {
        console.log('log out')
        dispatch(logout());
      }
    return (
        <div className={`${
            isOpen ? 'block' : 'hidden'} lg:flex w-64 bg-gray-800`}>
          <div className="flex-grow ">
          <div className="w-64 flex  justify-center items-center h-16 bg-gray-900">
              <span className="text-white font-bold uppercase"><span className="text-amber-500">{user?.role}</span> Dashboard</span>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-800">
                <div className="flex flex-col min-h-[87vh]">
              <div className="flex-grow">
              <ul className=" ">
                      {/* admin dashboard  */}
            {
              user?.role === "admin" && <>
                    <li>
                      <NavLink
                                      to="/dashboard/create_car"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                          <IoIosCreate className="mt-1 mr-2.5"/>  Manage Car
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                      to="/dashboard/manage_booking"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                          <IoIosCreate className="mt-1 mr-2.5"/>  Manage Bookings
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                      to="/dashboard/manage_return_car"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                          <IoIosCreate className="mt-1 mr-2.5"/>  Manage Return Cars
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                    to="/dashboard/user_management"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                          <IoIosCreate className="mt-1 mr-2.5"/>  User Management
                          </NavLink>
                   </li>
    
              </>
            }
            {
              user?.role === "user" && <>
                    <li>
                      <NavLink
                                      to="/dashboard/create_car"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                          <IoIosCreate className="mt-1 mr-2.5"/>  Booking History
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                      to="/dashboard/manage_booking"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                          <IoIosCreate className="mt-1 mr-2.5"/> Bookings Management
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                      to="/dashboard/manage_return_car"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                          <IoIosCreate className="mt-1 mr-2.5"/>  Payment 
                          </NavLink>
                   </li>
              </>
            }
        
                  </ul>
              </div>
                  <div className="flex-shrink-0">
                      <ul>
                      <ul>
              <li>
                      <NavLink
                                      to="/dashboard/profile"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-amber-600 flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                          <IoIosCreate className="mt-1 mr-2.5"/>  Profile
                          </NavLink>
                   </li>
              <li>
                      <button onClick={handleLogOut} className="flex w-full px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" >
                          <IoIosCreate className="mt-1 mr-2.5"/>  LogOut
                          </button>
                   </li>
              </ul>
                      </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          </div>
    );
};

export default Sidebar;