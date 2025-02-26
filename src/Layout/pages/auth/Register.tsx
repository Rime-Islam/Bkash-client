import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import { TUser } from "../../../type/Types";
import Swal from "sweetalert2";

const Register = () => {
    const { register, handleSubmit, reset } = useForm<TUser>();
    const api = useAxios(); 
    const navigate = useNavigate();
    
    const onSubmit = async (data: TUser) => {
      try {
        const res = await api.post("/auth/register", data); 
        if (res?.status === 201){
            Swal.fire({
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              navigate('/login');
            })
           } 
        reset(); 
      } catch (error: any) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response?.data?.message || "An Error occured"
          });
       
      }
    };

    return (
        <div>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-700 text-gray-900 flex justify-center">
          <div className="max-w-screen-xl lg:mt-5  bg-white dark:bg-gray-700 shadow rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div>
            
              </div>
              <div className="mt-5 flex bg-white dark:bg-gray-700 flex-col items-center">
                <h1 className="text-2xl text-black dark:text-white lg:text-3xl font-bold">Register</h1>
                <div className="w-full flex-1 mt-5">
                  
                <form onSubmit={handleSubmit(onSubmit)} className="px-5 max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md" >
      
      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter Your Full Name"
          {...register("name", { required: true })}
          required
        />
      </div>

      {/* PIN (5-digit) */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="pin">
          PIN (5-digit)
        </label>
        <input
          className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="pin"
          type="text"
          placeholder="Enter Your PIN"
          {...register("pin", { required: true, minLength: 5, maxLength: 5 })}
          required
        />
      </div>

      {/* Mobile Number */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="mobile">
          Mobile Number
        </label>
        <input
          className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="mobile"
          type="text"
          placeholder="Enter Your Mobile Number"
          {...register("mobile", { required: true })}
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter Email Address"
          {...register("email", { required: true })}
          required
        />
      </div>

      {/* Account Type Selector */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="accountType">
          Account Type
        </label>
        <select
          className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="accountType"
          {...register("accountType", { required: true })}
          required
        >
          <option value="">Select Account Type</option>
          <option value="User">User</option>
          <option value="Agent">Agent</option>
        </select>
      </div>

      {/* NID */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="nid">
          National ID (NID)
        </label>
        <input
          className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="nid"
          type="text"
          placeholder="Enter Your NID Number"
          {...register("nid", { required: true })}
          required
        />
      </div>

      {/* Register Button */}
      <div className="mb-2">
        <button
          className="text-white w-full font-semibold bg-[#d40950] hover:bg-[#c40d4d] py-2 px-4 rounded"
          type="submit"
        >
          Register
        </button>
      </div>

      {/* Login Redirect */}
      <Link to="/login">
        <p className="text-sm text-black dark:text-white text-center hover:underline hover:text-blue-600">
          Already have an account? Login!
        </p>
      </Link>

    </form>
                </div>
              </div>
            </div>
          
          </div>
        </div>
              </div>
    );
};

export default Register;