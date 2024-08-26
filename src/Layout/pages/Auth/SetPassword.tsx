

const SetPassword = () => {
    return (
        <div className="w-full  max-w-md mx-auto p-12">
        <div className=" bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-amber-500">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Set password
              </h1>
              
            </div>
            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="Password"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="newPassword"
                        name="password"
                        className="py-3 px-4 block w-full border-2 border-amber-500 rounded-md text-sm "
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="Password"
                      className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="py-3 px-4 block w-full border-2 border-amber-500 rounded-md text-sm "
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-amber-600 text-white hover:bg-amber-500 text-sm"
                  >
                    Reset password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
       
      </div>
    );
};

export default SetPassword;