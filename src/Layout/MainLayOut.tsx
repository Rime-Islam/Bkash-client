import { Outlet } from "react-router-dom";
import Navbar from "../component/homePage/Navbar";


const MainLayOut = () => {
    return (
        <div className="container mx-auto">
            <div className=" flex flex-col min-h-[100vh]">
         <div className="flex-grow">
         <Navbar></Navbar>
           <div className="container mx-auto"> <Outlet></Outlet></div>
         </div>
            <div className="flex-shrink-0">
            {/* <Footer></Footer> */}
            </div>
        </div>
        </div>
    );
};

export default MainLayOut;