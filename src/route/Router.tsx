import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import NotFound from "../Layout/NotFound";
import Home from "../Layout/pages/Home";
import About from "../Layout/pages/About";
import Cars from "../Layout/pages/Cars";
import Contact from "../Layout/pages/Contact";
import Terms from "../Layout/pages/Terms";
import Booking from "../Layout/pages/Booking";
import CarDetails from "../Layout/pages/CarDetails";
import Register from "../Layout/pages/Auth/Register";
import Login from "../Layout/pages/Auth/Login";
import ForgetPassword from "../Layout/pages/Auth/ForgetPassword";
import SetPassword from "../Layout/pages/Auth/SetPassword";
import Dashboard from "../Layout/pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CreateCar from "../Layout/pages/dashboard/adminDashboard/CreateCar";
import AdminOverview from "../Layout/pages/dashboard/adminDashboard/AdminOverview";
import UpdateCar from "../Layout/pages/dashboard/adminDashboard/UpdateCar";
import ManageBookings from "../Layout/pages/dashboard/adminDashboard/ManageBookings";
import ManageReturn from "../Layout/pages/dashboard/adminDashboard/ManageReturn";
import UserManagement from "../Layout/pages/dashboard/adminDashboard/UserManagement";
import BookingManagement from "../Layout/pages/dashboard/userDashboard/BookingManagement";
import BookingHistory from "../Layout/pages/dashboard/userDashboard/BookingHistory";
import Payment from "../Layout/pages/dashboard/userDashboard/Payment";



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
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/forget_password",
          element: <ForgetPassword />,
        },
        {
          path: "/reset_password/:id/:token",
          element: <SetPassword />,
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
          path: "/cars/:id",
          element: <CarDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/terms",
          element: <Terms />,
        }
      ]
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      children: [
        {
          index: true,
          element: <AdminOverview />,
        },
        {
          path: "create_car",
          element: <CreateCar />,
        },
        {
          path: "manage_booking/update_car/:id",
          element: <UpdateCar />,
        },
        {
          path: "manage_booking",
          element: <ManageBookings />,
        },
        {
          path: "manage_return_car",
          element: <ManageReturn />,
        },
        {
          path: "user_management",
          element: <UserManagement />,
        },
        {
          path: "booking",
          element: <BookingManagement />,
        },
        {
          path: "booking_history",
          element: <BookingHistory />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
      ]
    }
  ]);

export default router;