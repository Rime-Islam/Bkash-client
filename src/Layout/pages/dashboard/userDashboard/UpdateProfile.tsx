import { SubmitHandler, useForm } from "react-hook-form";
import { TUser } from "../../../../type/Types";
import { useAppDispatch, useAppSelector } from "../../../../Redux/app/hook";
import { useCurrentUser } from "../../../../Redux/features/Auth/authSlice";
import { useUpdateUserMutation } from "../../../../Redux/features/User/UserApi";

const UpdateProfile = () => {
    const { register, handleSubmit } = useForm<TUser>();
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser);
    const { name, email, phone, address, _id: userId } = user || null;

    const [ updateUser ] = useUpdateUserMutation();
    const onSubmit: SubmitHandler<TUser> = async (data) => {
        const res = await updateUser({ userId, data }).unwrap();
        console.log(res)
   
    }

    return (
        <div className="mb-12">
        <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
<div className="text-2xl py-2 px-6 text-white bg-[#FC7E01] hover:bg-amber-500 rounded text-center font-bold uppercase">
Create A Product
</div>
<form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6 " action="" method="POST">
<div className="mb-4 flex-1 ">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
   Full Name
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="name"
    type="text"
    defaultValue={name}
    placeholder="Enter A Car Name"
    {...register("name", { required: true })}
    required
   
  />
</div>

<div className="lg:flex gap-5">
<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
    Email Address
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="email"
    type="email"
    placeholder="Enter your email"
    {...register("email", { required: true })}
    required
    defaultValue={email}
  />
</div>

<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
    Phone Number
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="phone"
    type="text"
    placeholder="Enter your phone number"
    {...register("phone", { required: true })}
    defaultValue={phone}
    required
  />
</div>
</div>

<div className="lg:flex gap-5">
<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
    Your Address
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="address"
    type="text"
    defaultValue={address}
    placeholder="Enter your Address"
    {...register("address", { required: true })}
    required
  />
</div>

<div className="flex items-center justify-center mb-4">
  <button
    className="text-white font-semibold bg-[#FC7E01] hover:bg-amber-500 py-2 px-4 rounded"
    type="submit"
  >
  Update Profile
  </button>
</div>
</div>
</form>
</div>

    </div>
 
    );
};

export default UpdateProfile;