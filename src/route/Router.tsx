import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import NotFound from "../Layout/NotFound";
import Home from "../Layout/pages/Home";
import Register from "../Layout/pages/auth/Register";
import Login from "../Layout/pages/auth/Login";
import Dashboard from "../Layout/pages/dashboard/Dashboard";
import MonitorTransaction from "../Layout/pages/dashboard/adminDashboard/MonitorTransaction";
import UserManagement from "../Layout/pages/dashboard/adminDashboard/UserManagement";
import AgentRequest from "../Layout/pages/dashboard/adminDashboard/AgentRequest";
import Balance from "../Layout/pages/dashboard/adminDashboard/Balance";
import CashOut from "../Layout/pages/dashboard/agentDashboard/CashOut";
import CashIn from "../Layout/pages/dashboard/agentDashboard/CashIn";
import BlanceInquiry from "../Layout/pages/dashboard/agentDashboard/BlanceInquiry";
import SendMoney from "../Layout/pages/dashboard/userDashboard/SendMoney";
import UserCashOut from "../Layout/pages/dashboard/userDashboard/UserCashOut";
import UserCashIn from "../Layout/pages/dashboard/userDashboard/UserCashIn";
import UserBalance from "../Layout/pages/dashboard/userDashboard/UserBalance";
import { AdminRoute, AgentRoute, ProtectedRoute, UserRoute } from "./ProtectedRoute";



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
      ]
    },{
      path: "/dashboard",
      element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      children:[
        {
          path: "monitor_transaction",
          element:<AdminRoute> <MonitorTransaction /></AdminRoute>,
        },
        {
          path: "user_management",
          element:<AdminRoute><UserManagement /></AdminRoute>,
        },
        {
          path: "management_agent",
          element: <AdminRoute><AgentRequest /></AdminRoute>,
        },
        {
          path: "balance",
          element: <AdminRoute><Balance /></AdminRoute>,
        },
        {
          path: "cash_out",
          element: <AgentRoute> <CashOut /></AgentRoute>,
        },
        {
          path: "cash_in",
          element: <AgentRoute><CashIn /></AgentRoute>,
        },
        {
          path: "balance_inquiry",
          element: <AgentRoute><BlanceInquiry /></AgentRoute>,
        },
        {
          path: "send_money",
          element: <UserRoute><SendMoney /></UserRoute>,
        },
        {
          path: "cash_out",
          element: <UserRoute><UserCashOut /></UserRoute>,
        },
        {
          path: "cash_in",
          element: <UserRoute><UserCashIn /></UserRoute>,
        },
        {
          path: "balance_inquiry",
          element: <UserRoute><UserBalance /></UserRoute>,
        },
       
      ]
    }
   
  ]);

export default router;