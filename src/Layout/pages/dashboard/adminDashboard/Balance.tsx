import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";
import { TUser } from "../../../../type/Types";
import { useAuth } from "../../../../utils/AuthContext";

const Balance = () => {
    const api = useAxios();
    const [users, setUsers] = useState();
    const [showBalance, setShowBalance] = useState(false);
    const { user } = useAuth();
    const Id = user?._id;
    const [admin, setAdmin] = useState<TUser>();
    const [adminBalance, setAdminBalance] = useState(false);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await api.get('/auth/balance');
        
           setUsers(response.data.totalBalance);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to load User data",
          });
        }
      };
      fetchUser();
    }, []);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await api.get(`/auth/singleuser/${Id}`);
          setAdmin(response.data);
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to load User data",
          });
        }
      };
      fetchUser();
    }, [Id]);
  
    return (
      <div className="text-center">
        {users ? (
          <div>
            <h3 className="font-semibold text-2xl">
              Bkash total Balance:{" "}
              <span
                className={`text-[#d40950] px-3 py-1 cursor-pointer transition ${
                  showBalance ? "blur-none" : "blur-md"
                }`}
                onClick={() => setShowBalance(!showBalance)}
              >
                {users} Taka
              </span>
            </h3>
          </div>
        ) : (
          <div>No user data available</div>
        )}
        {admin ? (
          <div className="mt-8">
            <h3 className="font-semibold text-2xl">
              Admin's Balance:{" "}
              <span
                className={`text-[#d40950] px-3 py-1 cursor-pointer transition ${
                  adminBalance ? "blur-none" : "blur-md"
                }`}
                onClick={() => setAdminBalance(!adminBalance)}
              >
                {admin.balance} Taka
              </span>
            </h3>
          </div>
        ) : (
          <div>No user data available</div>
        )}
      </div>
    );
  };

export default Balance;