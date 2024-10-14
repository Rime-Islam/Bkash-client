import { Outlet,  useLocation  } from "react-router-dom";
import Navbar from "../component/homePage/Navbar";
import Footer from "../component/homePage/Footer";


const MainLayOut = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || 
    location.pathname.includes('register');

    return (
        <div className="lg:container mx-auto bg-white dark:bg-gray-700">
            <div className=" flex flex-col min-h-[100vh]">
         <div className="flex-grow">
         { noHeaderFooter || <Navbar></Navbar>}
           <div className="container mx-auto">
             <Outlet></Outlet>
             </div>
         </div>
            <div className="flex-shrink-0">
            { noHeaderFooter || <Footer></Footer>}
            </div>
        </div>
        </div>
    );
};

export default MainLayOut;