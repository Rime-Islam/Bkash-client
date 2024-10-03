import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { uploadImage } from "../../../../hook/UploadImage";
import Swal from "sweetalert2";
import { TCar } from "../../../../type/Types";
import { useGetSingleCarQuery, useUpdateACarMutation } from "../../../../Redux/features/Car/carApi";
import { useNavigate, useParams } from 'react-router-dom';



const UpdateCar = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data} = useGetSingleCarQuery(id);
 const car = data?.data;

    const { register, handleSubmit } = useForm<TCar>();
    const [status, setStatus] = useState('available');
    const [type, setType] = useState('SUV');
    const [ updateACar, { isLoading }] = useUpdateACarMutation();
    const handleSelect = (value: string) => {
        setStatus(value);
    };
    const handleSelectType = (value: string) => {
      setType(value);
    };
  
    const onSubmit: SubmitHandler<TCar> = async (data) => {
        const imageFile = data.image[0];
        const uploadedImageURL = await uploadImage(imageFile); 
        console.log(data)
      const featuresArray = data.features.split(',').map((feature: string) => feature.trim());
      
      const isElectric = data.isElectric  === true || car?.isElectric === true;
      const pricePerHour = Number(data.pricePerHour) || car?.pricePerHour
      ;

         const name = data.name || car?.name;
          const features = featuresArray || car?.features;
          const color = data.color || car?.color;
          const image = uploadedImageURL;
          const description = data.description || car?.description;
const Data= {
  name, features, type, color, image, isElectric, pricePerHour, description, status
}
console.log(Data)
        const res = await updateACar({ id, Data}).unwrap();
        console.log(res)
        if (res?.success){
          Swal.fire({
            icon: "success",
            title: res.message,
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            navigate('/dashboard/manage_booking');
          })
         } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res?.error?.message || "An Error occured"
          });
         }
         
      };
    return (
        <div className="mb-12">
        <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
<div className="text-2xl py-4 px-6 text-white bg-[#FC7E01] hover:bg-amber-500 rounded text-center font-bold uppercase">
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
    {...register("name")}
    defaultValue={car?.name}
  />
</div>
<div className="mb-4 flex-1">
  <h3 className="block text-gray-700 font-bold mb-2">
    Type
  </h3>
  <div className="shadow  appearance-none border rounded h-10 text-gray-700">  
    <div className="group relative cursor-pointer py-2">
        <div className="flex items-center justify-between space-x-5 bg-white px-4">
        <p className="menu-hover block text-gray-700 font-bold ">
            {type}
        </p>
        <span>
        <IoIosArrowDown />
        </span>
        </div>
        <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
        <p onClick={() => handleSelectType('SUV')} className=" block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
        SUV
        </p>
        <p onClick={() => handleSelectType('Sedan')} className=" block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
        Sedan
        </p>
        <p onClick={() => handleSelectType('hybrid')} className=" block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
        Hybrid
        </p>
        </div>
    </div>
    </div>
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
    type="text"
    placeholder="Enter Car Color"
    {...register("color")}
    defaultValue={car?.color}
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
    {...register("features")}
     defaultValue={car?.features}
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
    id="pricePerHour"
    type="number"
    placeholder="Enter Car Price Per Hour"
    min={1}
    {...register("pricePerHour", { required: true })}
    required
    defaultValue={car?.pricePerHour}
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
  <div className="">
  <label
    htmlFor="example1"
    className="mb-1 block font-bold text-gray-700"
  >
    Upload Car Image
  </label>
  <input
    id="image"
    type="file"
    className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-[#70AABD] file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
    {...register("image", { required: true })}
   required
  />
</div>


  </div>
{/* isElectric section  */}
<div className="flex-1">
<div className="flex gap-4 mb-3 ">   
<div className="flex-1 ">
  <h4 className="  text-gray-700 font-bold">Is Electrict</h4>
  <div className="flex gap-3">
    <label className=" bg-gray-100 text-gray-700 rounded-md px-3 py-1 my-2 hover:bg-indigo-300 cursor-pointer ">
      <input type="radio" {...register("isElectric", { required: true })} value="true" />
      <i className="pl-2 text-sm">Yes</i>
    </label>
    <label className=" bg-gray-100 text-gray-700 rounded-md px-3 py-1 my-2  hover:bg-indigo-300 cursor-pointer ">
      <input type="radio" {...register("isElectric", { required: true })} value="false"/>
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
    {...register("description")}
    defaultValue={car?.description}
  />
</div>

<div className="flex items-center justify-center mb-4">
  <button
    className="text-white font-semibold bg-[#FC7E01] hover:bg-amber-500 py-2 px-4 rounded"
    type="submit"
  >
    {
      isLoading ? <span>Updating...</span> : <span>Update</span>
    }
  </button>
</div>
</form>
</div>

    </div>
    );
};

export default UpdateCar;