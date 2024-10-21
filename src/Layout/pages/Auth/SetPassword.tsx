import Swal from "sweetalert2";
import { useResetPasswordMutation } from "../../../Redux/features/Auth/authApi";
import { useNavigate, useParams } from "react-router-dom";

const SetPassword = () => {
  const navigate = useNavigate();
  const { id, token } = useParams<{ id: string; token: string }>();
  const [ resetPassword, { isLoading } ] = useResetPasswordMutation();

  const handleResetPassword = async(e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords doesn't match with each other!"
      });
      return;
    }
    const password = confirmPassword;

    const res: any = await resetPassword({ id, token, password });
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
        <div className="w-full  max-w-md mx-auto  mt-[18vh] mb-[10vh]">
        <div className=" bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-[#FC7E01]">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Set password
              </h1>
              
            </div>
            <div className="mt-5">
              <form onSubmit={handleResetPassword}>
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
                        name="newpassword"
                        className="py-3 px-4 block w-full border-2 border-[#FC7E01] rounded-md text-sm "
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
                        className="py-3 px-4 block w-full border-2 border-[#FC7E01] rounded-md text-sm "
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-amber-600 text-white hover:bg-[#FC7E01] text-sm"
                  >
                      {
                        isLoading ? <span>Loading...</span> : <span>Reset password</span>
                      }
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