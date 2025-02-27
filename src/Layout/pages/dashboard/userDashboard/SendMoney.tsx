
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";
import { TUser } from "../../../../type/Types";
import { useAuth } from "../../../../utils/AuthContext";


interface CashInRequestData {
    amount: number;
    userId: string;
    email: string;
    pin: string;
  }
const SendMoney = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CashInRequestData>();
  const api = useAxios();
  const { user } = useAuth();
const Id = user?._id
  const [users, setUsers] = useState<any>(); 

  
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await api.get(`/auth/users/${Id}`); 
        setUsers(response.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to load Users list",
        });
      }
    };
    fetchAgents();
  }, [Id]);

  const onSubmit = async (data: CashInRequestData) => {
    try {
        console.log(data)
        const Data = {
            balance: data.amount,
            receiverId: data.userId,
            pin: data.pin,
            senderId: Id,
        }
      const res = await api.post("/money/send", Data); // API to submit the cash-in request
      console.log(res)
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Request submitted successfully",
          showConfirmButton: false,
          timer: 1500,
        })
      }
      reset();
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || "An error occurred",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-700 text-gray-900 flex justify-center">
    <div className="max-w-screen-xl lg:mt-5 bg-white dark:bg-gray-700 shadow rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="mt-5 flex bg-white dark:bg-gray-700 flex-col items-center">
          <h1 className="text-2xl text-black dark:text-white lg:text-3xl font-bold">Send Money</h1>
          <div className="w-full flex-1 mt-5">
            <form
              className="px-5 max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Amount */}
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="amount">
                  Amount (in Taka)
                </label>
                <input
                  className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  id="amount"
                  type="number"
                  placeholder="Enter Amount"
                  {...register("amount", { required: "Amount is required", min: 1 })}
                />
                {errors.amount && <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>}
              </div>

              {/* Agent Selection */}
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="userId">
                  Select User
                </label>
                <select
                  className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  id="userId"
                  {...register("userId", { required: "Agent selection is required" })}
                >
                  <option value="">Select Agent</option>
                  {users?.length && users?.map((agent: TUser) => (
                    <option key={agent._id} value={agent._id}>
                      {agent.name} 
                    </option>
                  ))}
                </select>
                {errors.userId && <p className="text-red-500 text-sm mt-1">{errors.userId.message}</p>}
              </div>

              {/* PIN */}
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="pin">
                  PIN (5-digit)
                </label>
                <input
                  className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  id="pin"
                  type="password"
                  placeholder="Enter Your PIN"
                  {...register("pin", {
                    required: "PIN is required",
                    minLength: { value: 5, message: "PIN must be exactly 5 digits" },
                    maxLength: { value: 5, message: "PIN must be exactly 5 digits" },
                  })}
                />
                {errors.pin && <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="mb-2">
                <button
                  className="text-white w-full font-semibold bg-[#d40950] hover:bg-[#c40d4d] py-2 px-4 rounded"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};


export default SendMoney;