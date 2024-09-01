import { ReactNode } from "react";
import { useAppSelector } from "../Redux/app/hook";
import { useCurrentToken } from "../Redux/features/Auth/authSlice";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }: { children: ReactNode }) => {
   const token = useAppSelector(useCurrentToken);

   if (!token) {
    return <Navigate to="/login" replace={true} ></Navigate>
   }
    return children;
};

export default ProtectedRoute;