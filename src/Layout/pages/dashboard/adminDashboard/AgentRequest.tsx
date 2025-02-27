import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import { TUser } from "../../../../type/Types";
import Swal from "sweetalert2";


const AgentRequest = () => {
    const [users, setUsers] = useState<any>();
    const api = useAxios(); 

    // Fetch all users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await api.get("/auth/request");

                setUsers(res.data.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    // accept agent request
    const acceptUser = async (userId: any) => {
        try {
          const res = await api.patch(`/auth/accept/${userId}`);
         
            if (res?.status === 200){
                                Swal.fire({
                                  icon: "success",
                                  title: res.data.message,
                                  showConfirmButton: false,
                                  timer: 1500
                                })
                                setTimeout(() => {
                                    location.reload();
                                }, 1500);
                               } 
        } catch (error) {
            console.error("Error blocking user:", error);
        }
    };

    // Reject agent request
    const rejectUser = async (userId: any) => {
        try {
          const res = await api.patch(`/auth/reject/${userId}`);
          
            if (res?.status === 200){
                                Swal.fire({
                                  icon: "success",
                                  title: res.data.message,
                                  showConfirmButton: false,
                                  timer: 1500
                                })
                                setTimeout(() => {
                                    location.reload();
                                }, 1500);
                               } 
        } catch (error) {
            console.error("Error blocking user:", error);
        }
    };

    return (
        <>
            <div className="text-2xl text-center font-semibold mb-4 text-[#d40950] md:mb-8">User Management</div>
            <div className="flex justify-center">
                <div className="flex mt-5 gap-5 md:gap-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accept</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reject</th>
                                </tr>
                            </thead>
                            <tbody>
                                { users?.map((user: TUser, index: number) => (
                                    <tr key={user._id} className="border-b">
                                        <td className="px-6 py-3">{index + 1}</td>
                                        <td className="px-6 py-3">{user.name}</td>
                                        <td className="px-6 py-3">{user.email}</td>
                                        <td className="px-6 py-3">{user.mobile}</td>
                                        <td className="px-6 py-3">{user.accountType}</td>
                                        <td className="px-6 py-3">{user.nid}</td>
                                        <td className="px-6 py-3">
    {/* Accept Button */}
    {user.accountType === "Request" && (
        <button 
            className={`px-4 py-2 rounded-md text-white ${
                user.accountType === "Request" ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
            }`} 
            onClick={() => acceptUser(user._id)}
            disabled={user.accountType !== "Request"}
        >
            Accept
        </button>
    )}
    {user.accountType === "Agent" && (
        <button 
            className="px-4 py-2 rounded-md text-white bg-green-500 cursor-not-allowed"
            disabled
        >
            Accepted
        </button>
    )}
</td>

<td className="px-6 py-3">
    {/* Reject Button */}
    {user.accountType === "Request" && (
        <button 
            className={`px-4 py-2 rounded-md text-white ${
                user.accountType === "Request" ? "bg-red-500 hover:bg-red-600" : "bg-gray-400 cursor-not-allowed"
            }`} 
            onClick={() => rejectUser(user._id)}
            disabled={user.accountType !== "Request"}
        >
            Reject
        </button>
    )}
    {user.accountType === "Rejected" && (
        <button 
            className="px-4 py-2 rounded-md text-white bg-gray-400 cursor-not-allowed"
            disabled
        >
            Rejected
        </button>
    )}
</td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AgentRequest;