import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import { useAuth } from "../../../../utils/AuthContext";
import { TUser } from "../../../../type/Types";
import Swal from "sweetalert2";

const BlanceInquiry = () => {
    const api = useAxios();
    const { user } = useAuth();
    const Id = user?._id;
    const [users, setUsers] = useState<TUser>();
    const [showBalance, setShowBalance] = useState(false);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await api.get(`/auth/singleuser/${Id}`);
          setUsers(response.data);
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
              User Balance:{" "}
              <span
                className={`text-[#d40950] px-3 py-1 cursor-pointer transition ${
                  showBalance ? "blur-none" : "blur-md"
                }`}
                onClick={() => setShowBalance(!showBalance)}
              >
                {users.balance} Taka
              </span>
            </h3>
          </div>
        ) : (
          <div>No user data available</div>
        )}
      </div>
    );
  };

export default BlanceInquiry;