import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";
import { useAuth } from "../../../../utils/AuthContext";
import ApproveModal from "../../../../components/home/ApprovelModal";

interface CashinRequest {
    _id: string;
    amount: number;
    agentId: { _id: string; name: string; email: string };
    email: string;
    status: string;
    createdAt: string;
  }

const CashIn = () => {
    const [showModal, setShowModal] = useState(false);
  const [requestId, setRequestId] = useState(null);
        const { user } = useAuth();
        const Id = user?._id;

    const [requests, setRequests] = useState<CashinRequest[]>([]);
    const api = useAxios();
  
    // Fetch all cash-in requests
    useEffect(() => {
      const fetchRequests = async () => {
        try {
          const res = await api.get(`/money/cashin/${Id}`);
          setRequests(res.data.cashinRequests);
        } catch (error) {
          console.error("Error fetching cash-in requests:", error);
        }
      };
      fetchRequests();
    }, [Id]);
  
    const approveRequest = (id: any) => {
        setRequestId(id);
        setShowModal(true);
      };
    
      const handleApprove = async (id: any, pin: any) => {
        
        try {
          const res = await api.patch(`/money/approve/${id}`, { pin, Id });
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Request Approved",
              text: res.data.message,
            });
            setShowModal(false); 
            setTimeout(() => {
              location.reload();
          }, 1500);
          }
        } catch (error: any) {
                   Swal.fire({
                              icon: "error",
                              title: "Oops...",
                              text: error.response?.data?.message || "An Error occured"
                            });
                 
                }
             
      };
  

  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#d40950]">
          Cash-in Requests
        </h2>
       
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-200 text-left text-gray-600">
                <th className="p-2 border">Index</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">User Email</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Approve</th>
               
              </tr>
            </thead>
            <tbody>
              {requests.map((req, index) => (
                <tr key={req._id} className="text-center border-b">
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{req.amount} Taka</td>
                  <td className="p-2 border">{req.email }</td>
                  <td
                    className={`p-2 border ${
                      req.status === "Approved"
                        ? "text-green-600"
                        : req.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {req.status}
                  </td>
                  <td className="p-2 border">
                    {new Date(req.createdAt).toLocaleString()}
                  </td>
                  <>
      <div className="table">
        {/* Your table code */}
        <td className="p-2 border">
          {req.status === "Pending" && (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              onClick={() => approveRequest(req._id)}
            >
              Approve
            </button>
          )}
          {req.status === "Approved" && (
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded-md cursor-not-allowed"
              disabled
            >
              Approved
            </button>
          )}
        </td>
      </div>

      {/* Show the modal if `showModal` is true */}
      {showModal && (
        <ApproveModal
          requestId={requestId}
          onClose={() => setShowModal(false)}
          onApprove={handleApprove}
        />
      )}
    </>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default CashIn;