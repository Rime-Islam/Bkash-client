
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../../utils/AuthContext";

interface SidebarProps {
    isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const { user, logout } = useAuth();
          const navigate = useNavigate();
   
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
              navigate('/login');
            }
          });
        }
  
    return (
        <div className={`${
            isOpen ? 'block' : 'hidden'} lg:flex w-64 bg-gray-800`}>
          <div className="flex-grow ">
          <div className="w-64 flex  justify-center items-center h-16 bg-gray-900">
              <span className="text-white font-bold uppercase"><span className="text-[#d40950]">{user?.accountType}</span> Dashboard</span>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
              <nav className="flex-1 px-2 py-4 bg-gray-800">
                <div className="flex flex-col min-h-[87vh]">
              <div className="flex-grow">
              <ul className=" ">
                      {/* admin dashboard  */}
            {
              user?.accountType === "Admin" && <>
                    <li>
                      <NavLink
                                      to="/dashboard/monitor_transaction"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                            Monitor Transactions
                          </NavLink>
                   </li>
                  
                  <li>
                      <NavLink
                                    to="/dashboard/user_management"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                            User Management
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                    to="/dashboard/management_agent"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                             Management Agent
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                    to="/dashboard/balance"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                             Balance Inquiry
                          </NavLink>
                   </li>
    
              </>
            }
            {
              user?.accountType === "Agent" && <>
                    
                  <li>
                      <NavLink
                                      to="/dashboard/cash_out"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                           Cash-Out
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                      to="/dashboard/cash_in"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                            Cash-In 
                          </NavLink>
                   </li>
                   <li>
                      <NavLink
                                      to="/dashboard/balance_inquiry"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                            Balance Inquiry
                          </NavLink>
                   </li>
              </>
            }
            {
              user?.accountType === "User" && <>
                    <li>
                      <NavLink
                                      to="/dashboard/send_money"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                          Send Money
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                      to="/dashboard/cash_out"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                           Cash-Out
                          </NavLink>
                   </li>
                  <li>
                      <NavLink
                                      to="/dashboard/cash_in"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                            Cash-In 
                          </NavLink>
                   </li>
                   <li>
                      <NavLink
                                      to="/dashboard/balance_inquiry"
                                      className={({ isActive, isPending }) => isPending ? "pending " : isActive ? "text-[#70AABD] flex  px-4 py-2 mt-2" : "flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" }
                                      aria-current="page"
                                      >
                            Balance Inquiry
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
                                      to="/"
                                      className="flex px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" 
                                      aria-current="page"
                                      >
                            Home Page
                          </NavLink>
                   </li>

              <li>
                      <button onClick={handleLogout} className="flex w-full px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700" >
                            LogOut
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