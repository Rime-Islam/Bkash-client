import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TLoginData } from "../../../type/Types";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { useAuth } from "../../../utils/AuthContext";


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<TLoginData>();
    const navigate = useNavigate();
    const api = useAxios(); 
    const { login } = useAuth();
    
    const onSubmit = async (data: TLoginData) => {
        try {
          const res = await api.post("/auth/login", data);
        
          localStorage.setItem("token", res.data.token);
          
         if (res?.status === 200){
            login(res.data.token, res.data.user);

                    Swal.fire({
                      icon: "success",
                      title: res.data.message,
                      showConfirmButton: false,
                      timer: 1500
                    }).then(() => {
                      navigate('/');
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
              <div className="mt-5 flex bg-white dark:bg-gray-700 flex-col items-center">
                <h1 className="text-2xl text-black dark:text-white lg:text-3xl font-bold">Login</h1>
                <div className="w-full flex-1 mt-5">
                <form
      className="px-5 max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Identifier (Email or Mobile) */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="identifier">
          Email or Mobile Number
        </label>
        <input
          className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
          id="identifier"
          type="text"
          placeholder="Enter Email or Mobile Number"
          {...register("identifier", { required: true })}
          required
        />
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
    required
  />
  {errors.pin && <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>}
      </div>

      {/* Login Button */}
      <div className="mb-2">
        <button
          className="text-white w-full font-semibold bg-[#d40950] hover:bg-[#c40d4d] py-2 px-4 rounded"
          type="submit"
        >
          Login
        </button>
      </div>

      {/* Register Redirect */}
      <Link to="/register">
        <p className="text-sm text-black dark:text-white text-center hover:underline hover:text-blue-600">
          Don't have an account? Register now!
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

export default Login;