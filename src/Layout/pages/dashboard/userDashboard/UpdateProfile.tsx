import { SubmitHandler, useForm } from "react-hook-form";
import { TUser } from "../../../../type/Types";
import { useAppDispatch, useAppSelector } from "../../../../Redux/app/hook";
import { setUser, useCurrentToken, useCurrentUser } from "../../../../Redux/features/Auth/authSlice";
import { useUpdateUserMutation } from "../../../../Redux/features/User/UserApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const UpdateProfile = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    const { register, handleSubmit } = useForm<TUser>();
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser);
    const { name, email, phone, address, _id: userId } = user || null;
    const navigate = useNavigate();

    const token = useAppSelector(useCurrentToken);
    const [ updateUser ] = useUpdateUserMutation();


    const onSubmit: SubmitHandler<TUser> = async (data) => {
        const res = await updateUser({ userId, data }).unwrap();
       
        if (res?.success){
          const user = res.data;
          dispatch(setUser({ user, token }))
          Swal.fire({
            icon: "success",
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate('/dashboard/profile');
          })
         } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res?.error?.message || "An Error occured"
          });
         }
    }

    return (
        <div className="mb-12">
        <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
<div data-aos="fade-down"
                    data-aos-duration="1500" className="text-2xl py-2 px-6 text-white bg-[#FC7E01] hover:bg-amber-500 rounded text-center font-bold uppercase">
Check Your Profile
</div>
<form onSubmit={handleSubmit(onSubmit)} className="py-4 bg-white dark:bg-gray-600 px-6 text-white" action="" method="POST">
<div data-aos="fade-left"
                    data-aos-duration="1500" className="mb-4 flex-1 ">
  <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="name">
   Full Name
  </label>
  <input
    className="shadow appearance-none bg-white dark:bg-gray-700 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
    id="name"
    type="text"
    defaultValue={name}
    placeholder="Enter A Car Name"
    {...register("name", { required: true })}
    required
   
  />
</div>

<div data-aos="fade-left"
                    data-aos-duration="2000" className="mb-4 flex-1">
  <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="phone">
    Email Address
  </label>
  <input
    className="shadow appearance-none bg-white dark:bg-gray-700 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
    id="email"
    type="email"
    placeholder="Enter your email"
    {...register("email", { required: true })}
    required
    defaultValue={email}
  />
</div>

<div data-aos="fade-left"
                    data-aos-duration="2500" className="mb-4 flex-1">
  <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="date">
    Phone Number
  </label>
  <input
    className="shadow appearance-none bg-white dark:bg-gray-700 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
    id="phone"
    type="text"
    placeholder="Enter your phone number"
    {...register("phone", { required: true })}
    defaultValue={phone}
    required
  />
</div>
<div data-aos="fade-left"
                    data-aos-duration="3000" className="mb-4 flex-1">
  <label className="block text-gray-700 dark:text-gray-200 font-bold mb-2" htmlFor="date">
    Your Address
  </label>
  <input
    className="shadow appearance-none bg-white dark:bg-gray-700 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
    id="address"
    type="text"
    defaultValue={address}
    placeholder="Enter your Address"
    {...register("address", { required: true })}
    required
  />
</div>

<div data-aos="fade-up"
                    data-aos-duration="2500" className="flex items-center justify-center mb-4">
  <button
    className="text-white font-semibold bg-[#FC7E01] hover:bg-amber-500 py-2 px-4 rounded"
    type="submit"
  >
  Update Profile
  </button>
</div>
</form>
</div>

    </div>
 
    );
};

export default UpdateProfile;