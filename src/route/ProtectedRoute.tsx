import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { ReactNode } from "react";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { token} = useAuth();
 
    if (!token) {
     return <Navigate to="/login" replace={true} ></Navigate>
    }
     return children;
 };
 
 

 export const UserRoute = ({ children }: { children: ReactNode }) => {
    const { user} = useAuth();
 
    if (user?.accountType !== "User") {
     return <Navigate to="/login" replace={true} ></Navigate>
    }
     return children;
 };

 export const AdminRoute = ({ children }: { children: ReactNode }) => {
    const { user} = useAuth();
 
    if (user?.accountType !== "Admin") {
     return <Navigate to="/login" replace={true} ></Navigate>
    }
     return children;
 };

 export const AgentRoute = ({ children }: { children: ReactNode }) => {
    const { user} = useAuth();
 
    if (user?.accountType !== "Agent") {
     return <Navigate to="/login" replace={true} ></Navigate>
    }
     return children;
 };
 
