import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { useRegisterUserMutation } from "../../../Redux/features/Auth/authApi";
import { TUser } from "../../../type/Types";




const Register = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [ registerUser, { isLoading } ] = useRegisterUserMutation();
  const { register, handleSubmit } = useForm<TUser>();

    const onSubmit: SubmitHandler<TUser> = async(data) => {
      
        if (data.createPassword !== data.confirmPassword) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Passwords doesn't match with each other!"
          });
          return;
        }
       
        if (!isChecked) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You must agree to the Terms of Service."
          });
          return;
        }
       const name = data.name;
       const email = data.email;
       const role = "user";
       const password = data.createPassword;
       const phone = data.phone;
       const address = data.address;

       const res = await registerUser({ name, email, role, password, phone, address });
      
       if (res?.data?.success){
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          navigate('/login');
        })
       } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res?.error?.data?.message || "An Error occured"
        });
       }
       
    };

    return (
        <div>
  <div className="min-h-screen bg-gray-100 dark:bg-gray-700 text-gray-900 flex justify-center">
    <div className="max-w-screen-xl lg:mt-5  bg-white dark:bg-gray-700 shadow rounded-lg flex justify-center flex-1">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div>
        <div className="flex justify-center">
            <img
                src="/logo.png"
                className="h-8 w-124"
                alt=""
            /> <span className="text-xl font-semibold text-amber-600">AutoRide</span>
            </div>
        </div>
        <div className="mt-5 flex bg-white dark:bg-gray-700 flex-col items-center">
          <h1 className="text-2xl text-black dark:text-white lg:text-3xl font-bold">Sign up</h1>
          <div className="w-full flex-1 mt-5">
            
          <form onSubmit={handleSubmit(onSubmit)}  className=" px-5 " action="" method="POST">
    
    <div className="mb-4 ">
      <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="name">
       Full Name
      </label>
      <input
        className="shadowappearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Enter Your Full Name"
        {...register("name", { required: true })}
        required
      />
    </div>

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

    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="phone">
        Password
      </label>
      <input
        className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
        id="createPassword"
        type="password"
        placeholder="Enter A Password"
        {...register("createPassword", { required: true })}
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="date">
        Confirm Password
      </label>
      <input
        className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
        id="confirmpPassword"
        type="password"
        placeholder="Enter Confirm Password"
        {...register("confirmPassword", { required: true })}
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="time">
        Phone Number
      </label>
      <input
        className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
        id="phone"
        type="number"
        placeholder="Enter Your Phone Number"
        {...register("phone", { required: true })}
        required
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="time">
        Address
      </label>
      <input
        className="shadow appearance-none bg-white dark:bg-gray-800 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
        id="address"
        type="text"
        placeholder="Enter Your Phone Number"
        {...register("address", { required: true })}
        required
      />
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
    <p className="text-sm text-black dark:text-white text-center hover:underline hover:text-blue-600">Terms of Service and its Privacy Policy</p>
    </Link></span>
  </label>
</div>
    

    <div className=" mb-2">
      <button
        className="text-white w-full font-semibold bg-[#FC7E01] hover:bg-amber-500 py-2 px-4 rounded"
        type="submit"
      >
       {
        isLoading ? <span>Loading...</span> : <span>Signup</span>
       }
      </button>
    </div>
    <Link to="/login">
    <p className="text-sm text-black dark:text-white text-center hover:underline hover:text-blue-600">Already have an account? Login!</p>
    </Link>
  </form>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
        <div
          className="m-12 xl:m-16 w-full  bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              'url("/register.jpg")'
          }}
        ></div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Register;