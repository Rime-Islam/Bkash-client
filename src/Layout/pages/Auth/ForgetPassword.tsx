

const ForgetPassword = () => {
    return (
        <div className="w-full  max-w-md mx-auto p-12">
        <div className=" bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-amber-500">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  Login here
                </a>
              </p>
            </div>
            <div className="mt-5">
              <form>
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
                        className="py-3 px-4 block w-full border-2 border-amber-500 rounded-md text-sm "
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
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-amber-600 text-white hover:bg-amber-500 text-sm"
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