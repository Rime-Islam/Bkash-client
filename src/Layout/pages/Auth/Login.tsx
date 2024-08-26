import { Link } from "react-router-dom";



const Login = () => {
    return (
   <div className="bg-cover bg-center bg-fixed"
    style={{ backgroundImage: 'url("/login1.jpg")' }}
    >
    <div className="h-screen flex justify-center items-center">
        <div className="bg-black bg-opacity-50 mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Login</h1>
        <form>
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
            <div className="mb-6">
            <button
                className="bg-amber-600 w-full hover:bg-amber-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
            >
                Login
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