import { useState } from "react";
import { useForgetPasswordMutation } from "../../../Redux/features/Auth/authApi";
import { Link } from "react-router-dom";


const ForgetPassword = () => {
  const [data, setData] = useState();
  const [ forgetPassword ] = useForgetPasswordMutation();

  const handleForget = async(e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.email as HTMLInputElement;
    const email = form.email.value;

    const res = await forgetPassword({email});
    if (res?.data?.success) {
      setData(res?.data?.message);

      //clear the input field
      emailInput.value = '';
    }
    
    
  }

    return (
        <div className=" max-w-md mx-auto mt-[18vh] mb-[10vh]">
        <div className=" bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-[]">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <Link to="/login"
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                >
                  Login here
                </Link>
              </p>
              <p className="text-red-600 text-sm mt-3">{data}</p>
            </div>
            <div className="mt-5">
              <form onSubmit={handleForget}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 block w-full border-2 border-[#FC7E01] rounded-md text-sm "
                        required
                        aria-describedby="email-error"
                      />
                    </div>
                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                      Please include a valid email address so we can get back to you
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-[#FC7E01] text-white hover:bg-amber-500 text-sm"
                  >
                    Forget password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
       
      </div>
      
    );
};

export default ForgetPassword;