import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../Redux/features/Auth/authApi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useAppDispatch } from "../../../Redux/app/hook";
import { verifyToken } from "../../../utils/verifyToken";
import { TUser, setUser } from "../../../Redux/features/Auth/authSlice";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Login = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [isChecked, setIsChecked] = useState(false);
    const [ loginUser, { isLoading }] = useLoginUserMutation();
    const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        const password = form.password.value;
    
        if (!isChecked) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "You must agree to the Terms of Service."
            });
            return;
          }

    const res: any = await loginUser({ email, password });

          
          if (res?.data?.success) {
            Swal.fire({
                icon: "success",
                title: res?.data?.message,
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                navigate('/dashboard');
              })
          } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                  text: res?.error?.data?.message || "An Error occured"
              });
          }
        
          const user = verifyToken(res?.data?.data?.token) as TUser;
          dispatch(setUser({ user: user, token: res?.data?.data?.token }));
    }
    
    return (
   <div className="bg-cover bg-center bg-fixed"
    style={{ backgroundImage: 'url("/login1.jpg")' }}
    >
    <div data-aos="zoom-in"
                    data-aos-duration="2500" className="h-screen flex justify-center items-center">
        <div className="bg-black bg-opacity-50 mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Login</h1>
        <form onSubmit={handleLogin}>
            <div className="mb-4">
            <label
                className="block font-semibold text-white mb-2"
                htmlFor="email"
            >
                Email Address
            </label>
            <input
                className="border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
            />
            </div>
            <div className="mb-4">
            <label
                className="block font-semibold text-white mb-2"
                htmlFor="password"
            >
                Password
            </label>
            <input
                className="border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
            />
            <Link to="/forget_password"><p className=" text-white hover:underline hover:text-blue-600" >
                Forgot your password?
            </p></Link>
            </div>
            <div className="mb-5">
            <label className=" text-gray-500 font-bold flex">
                <input
                className="mr-2 leading-tight"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                />
                <span><Link to="/terms">
                <p className="text-sm text-center hover:underline hover:text-blue-600">Terms of Service and its Privacy Policy</p>
                </Link></span>
            </label>
            </div>
            <div className="mb-6">
            <button
                className="bg-[#FC7E01] w-full hover:bg-amber-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                {
        isLoading ? <span>Loading...</span> : <span>Signin</span>
       }
            </button>

            </div>
            <Link to="/register"><p className="text-white hover:text-blue-600 hover:underline">Don't have an account yet? Sign up .</p></Link>
        </form>
        </div>
    </div>
    </div>


    );
};

export default Login;