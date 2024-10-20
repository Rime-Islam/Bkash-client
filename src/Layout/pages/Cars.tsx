import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/app/hook";
import {  filterCars, filteredCars, setAllCar, setFilters,  } from "../../Redux/features/Car/CarSlice";
import { useForm } from "react-hook-form";

import { TCar } from "../../type/Types";
import { useGetAllCarQuery } from "../../Redux/features/Car/CarApi";
import { useEffect } from "react";



const Cars = () => {
    const { data, isLoading } = useGetAllCarQuery(undefined);
    const filterCarFromState = useAppSelector(filteredCars);
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();

    useEffect(() => {
      if (data) {
          dispatch(setAllCar(data.data.cars));
      }
  }, [data, dispatch]);
  
    if(isLoading) {
        return <div className="text-center font-semibold text-xl my-5">Loading...</div>
    }

  const cars = data?.data.cars;
   console.log(filterCarFromState)

 const carTypes = ["SUV", "Sedan", "hybrid"];
 const colors = ["Red", "Black", "White", "Blue", "Wine", "Yellow", "Gray"];



 const onSubmit = (filterCriteria: any) => {
  console.log(filterCriteria)
  dispatch(setFilters(filterCriteria));
  dispatch(filterCars());
 };

 const displayedCar = filterCarFromState.length > 0 ? filterCarFromState : cars;

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8">
    {/* heading  */}
    <h1 className="text-center py-8 md:py-12 lg:py-16 text-2xl md:text-4xl font-semibold ">Luxury <span className="text-amber-600">Car Fleet</span></h1>

<div className="md:flex gap-2 lg:gap-4 lg:px-0">
   {/* filter section  */}
<div>
<form onSubmit={handleSubmit(onSubmit)}>

<div className="mb-4">
            <label
              htmlFor="carType"
              className="block text-gray-700 font-semibold mb-2"
            >
              Car Type
            </label>
          <select
              id="carType"
              {...register("carType")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              
              {carTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

<div className="mb-4">
            <label
              htmlFor="color"
              className="block text-gray-700 font-semibold mb-2"
            >
              Car Color
            </label>
            <select
              id="color"
              {...register("color")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

        
        <button  className="bg-[#FC7E01] w-full hover:bg-amber-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">Filter</button>
        </form>
</div>

        {/* card section  */}
        <div className="pt-4 md:pt-8  mx-auto ">
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">

            {/* CARD */}
           
                  {
                    displayedCar?.length && displayedCar?.map((car: TCar) =>   
                    <div key={car._id} className="rounded md:w-72  bg-white overflow-hidden shadow-lg flex flex-col">
                    <a href="#" />
                    <div className="relative">
                        
                        <img
                            className="w-full h-60"
                            src={car?.image}
                            alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                       
                        <Link to={`/cars/${car?._id}`}>
                        <button className="text-xs absolute top-0 right-0 bg-[#003856] px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                           Details
                        </button>
                        </Link>
                    </div>
                    <div className="px-6 py-4 mb-auto">
                        <p
                        className="font-medium text-lg hover:text-[#003856] transition duration-500 ease-in-out inline-block mb-2"
                        >
                      {car?.name}
                        </p>
                      <div className="flex justify-between">
                      <p className="text-gray-500 text-sm">
                          {car?.type}
                        </p>
                      <p className="text-blue-600 font-semibold uppercase text-sm">
                          {car?.color}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span
                        
                        className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                        {car?.pricePerHour}
                        <span className="ml-1"> BDT Per Hour</span>
                        </span>
                      
                   
                    </div>
                    </div>)
                  }
        </div>
        </div>

</div>
</div>
  );
};


export default Cars;