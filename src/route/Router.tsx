import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import NotFound from "../Layout/NotFound";
import Home from "../Layout/pages/Home";
import About from "../Layout/pages/About";
import Cars from "../Layout/pages/Cars";
import Contact from "../Layout/pages/Contact";
import Terms from "../Layout/pages/Terms";
import Booking from "../Layout/pages/Booking";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement: <NotFound></NotFound>,
      children:[
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cars",
          element: <Cars />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/terms",
          element: <Terms />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
      ]
    },
  ]);

export default router;