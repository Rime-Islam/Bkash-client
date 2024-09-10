import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";



type TFormInput = {
  name: string;
  type: string;
  color: string;
  features: string;
  description: string;
  price: number;
};


const CreateCar = () => {
    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const { register, handleSubmit } = useForm<TFormInput>();
    const [status, setStatus] = useState('Status');

    const handleSelect = (value: string) => {
        setStatus(value);
    }
  
      const onSubmit: SubmitHandler<TFormInput> = async(data) => {
  
  
   
         
      };
    return (
        <div className="mb-12">
        <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
<div className="text-2xl py-4 px-6 text-white bg-amber-600 hover:bg-amber-500 rounded text-center font-bold uppercase">
Create A Product
</div>
<form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6 " action="" method="POST">

<div className="lg:flex gap-5">
<div className="mb-4 flex-1 ">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
   Name
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="name"
    type="text"
    placeholder="Enter A Car Name"
    {...register("name", { required: true })}
    required
  />
</div>
<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
    Type
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="type"
    type="text"
    placeholder="Enter Car Type"
    {...register("type", { required: true })}
    required
  />
</div>
</div>

<div className="lg:flex gap-5">
<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
    Car Color
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="color"
    type="number"
    min="0"
    placeholder="Enter Car Color"
    {...register("color", { required: true })}
    required
  />
</div>

<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
    Freatures
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="features"
    type="text"
    placeholder="Enter Car Features"
    {...register("features", { required: true })}
    required
  />
</div>
</div>

<div className="lg:flex gap-5">
<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
    Price Per Hour
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="price"
    type="text"
    placeholder="Enter Car Price Per Hour"
    {...register("price", { required: true })}
    required
  />
</div>
 {/* status section  */}
 <div className="flex-1">
   <h4 className="  text-gray-700 font-bold mb-1">Car Status</h4>
    <div className="shadow  appearance-none border rounded h-10 text-gray-700">  
    <div className="group relative cursor-pointer py-2">
        <div className="flex items-center justify-between space-x-5 bg-white px-4">
        <p className="menu-hover block text-gray-700 font-bold ">
            {status}
        </p>
        <span>
        <IoIosArrowDown />
        </span>
        </div>
        <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
        <p onClick={() => handleSelect('available')} className=" block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
        Available
        </p>
        <p onClick={() => handleSelect('unavailable')} className=" block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
        Unavailable
        </p>
        </div>
    </div>
    </div>
   </div>
</div>

<div className="lg:flex gap-5">
  {/* image section  */}
  <div className="flex-1">


  </div>
{/* isElectrict section  */}
<div className="flex-1">
<div className="flex gap-4 mb-3 ">   
<div className="flex-1 ">
  <h4 className="  text-gray-700 font-bold">Is Electrict</h4>
  <div className="flex gap-3">
    <label className=" bg-gray-100 text-gray-700 rounded-md px-3 py-1 my-2 hover:bg-indigo-300 cursor-pointer ">
      <input type="radio" name="isElectrict" />
      <i className="pl-2 text-sm">Yes</i>
    </label>
    <label className=" bg-gray-100 text-gray-700 rounded-md px-3 py-1 my-2  hover:bg-indigo-300 cursor-pointer ">
      <input type="radio" name="isElectrict" />
      <i className="pl-2 text-sm">No</i>
    </label>
 
  </div>
</div>
</div>
</div>
</div>

<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
    Description
  </label>
  <textarea
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="description"
    rows={4}
    placeholder="Enter additional information"
    {...register("description", { required: true })}
    required
  />
</div>

<div className="flex items-center justify-center mb-4">
  <button
    className="text-white font-semibold bg-amber-500 hover:bg-amber-600 py-2 px-4 rounded"
    type="submit"
  >
    {/* {
      isLoading ? <span>Creating...</span> : <span>Create</span>
    } */}
  </button>
</div>
</form>
</div>

    </div>
    );
};

export default CreateCar;