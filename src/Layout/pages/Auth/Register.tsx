import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    return (
        <div>
  <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div className="max-w-screen-xl lg:mt-5  bg-white shadow rounded-lg flex justify-center flex-1">
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
        <div className="mt-5 flex flex-col items-center">
          <h1 className="text-2xl lg:text-3xl font-bold">Sign up</h1>
          <div className="w-full flex-1 mt-5">
            
          <form  className=" px-5 " action="" method="POST">
    
    <div className="mb-4 ">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
       Full Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Enter Your Full Name"
        {...register("name", { required: true })}
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Enter Email Address"
        {...register("email", { required: true })}
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        placeholder="Enter A Password"
        {...register("password", { required: true })}
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
        Confirm Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="confirmpPassword"
        type="password"
        placeholder="Enter Confirm Password"
        {...register("confirmPassword", { required: true })}
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
        Phone Number
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="number"
        type="number"
        placeholder="Enter Your Phone Number"
        {...register("number", { required: true })}
        required
      />
    </div>
    
    <div className="mb-5">
  <label className=" text-gray-500 font-bold flex">
    <input className="mr-2 leading-tight" type="checkbox" />
    <span><Link to="/terms">
    <p className="text-sm text-center hover:underline hover:text-blue-600">Terms of Service and its Privacy Policy</p>
    </Link></span>
  </label>
</div>
    

    <div className=" mb-2">
      <button
        className="text-white w-full font-semibold bg-amber-500 hover:bg-amber-600 py-2 px-4 rounded"
        type="submit"
      >
        Sign up
      </button>
    </div>
    <Link to="/login">
    <p className="text-sm text-center hover:underline hover:text-blue-600">Already have an account? Login!</p>
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