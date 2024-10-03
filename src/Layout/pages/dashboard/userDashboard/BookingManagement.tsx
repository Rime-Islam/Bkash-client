import { SubmitHandler, useForm } from "react-hook-form";
import { TBookingForm } from "../../../../type/Types";
import { useAppDispatch, useAppSelector } from "../../../../Redux/app/hook";
import { useBookedCar } from "../../../../Redux/features/Book/BookSlice";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";



const BookingManagement = () => {
    const { register, handleSubmit } = useForm<TBookingForm>();
    const useBooked: any = useAppSelector(useBookedCar);
    console.log(useBooked)
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<any> = async () => {
        
    }
    return (
        <div className="mb-12">
        <div className="max-w-5xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
<div className="text-2xl py-2 px-6 text-white bg-[#FC7E01] hover:bg-amber-500 rounded text-center font-bold uppercase">
Book A Car
</div>
<form onSubmit={handleSubmit(onSubmit)} className="py-4 px-6 " action="" method="POST">

<div className="lg:flex gap-5">
<div className="mb-4 flex-1 ">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="nidOrPassport">
   NID / Passport
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="nidOrPassport"
    type="text"
    placeholder="Enter Your NID Or Passport"
    {...register("nidOrPassport", { required: 'NID or Passort is need' })}
    required
  />
</div>

<div className="mb-4 flex-1 ">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="startTime">
  Start Time
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="startTimet"
    type="datetime-local"
    placeholder="Enter Your Start Time"
    {...register("startTime", { required: true })}
    required
  />
</div>
</div>

<div className="lg:flex gap-5">
<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="drivingLicense">
  Driving License
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="drivingLicense"
    type="text"
    placeholder="Enter Your Car Driving License"
    {...register("drivingLicense", { required: true })}
    required
  />
</div>

<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="cardNumber">
  Card Number
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="cardNumber"
    type="text"
    placeholder="Enter Your Card Number"
    {...register("cardNumber", { required: true })}
    required
  />
</div>
</div>

<div className="lg:flex gap-5">
<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="exprirationDate">
    Expriration Date
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="exprirationDate"
    type="month"
    {...register("exprirationDate", { required: true })}
    required
  />
</div>

<div className="mb-4 flex-1">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
    CVV
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="cvv"
    type="text"
    placeholder="Enter CVV"
    {...register("cvv", { required: true })}
    required
  />
</div>
</div>

<div>
<div className="max-w-md mb-12  mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <img
        className="h-48 w-full object-cover md:h-full md:w-48"
        src={useBooked?.image}
      />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
      {useBooked?.name}
      </div>
     <div className="flex gap-6">
     <div className="text-gray-900 text-lg font-semibold mb-3">Feature:
          <span className="text-medium font-normal">{useBooked?.features.map((feature: string, index: number ) => (
            <li key={index} className="text-gray-600 text-sm">{feature}</li>
        ))}</span></div>

<div className="text-gray-900 text-lg font-semibold mb-3">Additional Feature:
          <span className="text-medium font-normal">{useBooked?.additionalFeatures.map((feature: string, index: number ) => (
            <li key={index} className="text-gray-600 text-sm">{feature}</li>
        ))}</span></div>
     </div>
    </div>
  </div>
</div>

</div>

<div className="flex items-center justify-center my-8">
  <button
    className="text-white font-semibold bg-[#FC7E01] hover:bg-amber-500 py-2 px-4 rounded"
    type="submit"
  >
    Booking
  </button>
</div>
</form>
</div>

    </div>
    );
};

export default BookingManagement;