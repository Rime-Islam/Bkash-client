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
import { ProtectedRoute } from "./ProtectedRoute";
import BalanceRequest from "../Layout/pages/dashboard/agentDashboard/BalanceRequest";
import CashInAgent from "../Layout/pages/dashboard/adminDashboard/CashInAgent";



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
          element: <MonitorTransaction />,
        },
        {
          path: "user_management",
          element:<UserManagement />,
        },
        {
          path: "cashin_agent",
          element:<CashInAgent/>,
        },
        {
          path: "management_agent",
          element: <AgentRequest />,
        },
        {
          path: "balance",
          element: <Balance />,
        },
        {
          path: "cash_out_agent",
          element:  <CashOut />,
        },
        {
          path: "cash_in_agent",
          element: <CashIn />,
        },
        {
          path: "agent_balance_request",
          element: <BalanceRequest />,
        },
        {
          path: "inquiry",
          element: <BlanceInquiry />,
        },
        {
          path: "send_money",
          element: <SendMoney />,
        },
        {
          path: "cash_out",
          element:<UserCashOut />,
        },
        {
          path: "cash_in",
          element: <UserCashIn />,
        },
        {
          path: "balance_inquiry",
          element: <UserBalance />,
        },
       
      ]
    }
   
  ]);

export default router;