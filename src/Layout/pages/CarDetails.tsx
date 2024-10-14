import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../Redux/app/hook";
import { useGetSingleCarQuery } from "../../Redux/features/Car/CarApi";
import { TCar } from "../../type/Types";
import { useState } from "react";
import ReactImageMagnify from 'react-image-magnify';
import { bookedCar } from "../../Redux/features/Book/BookSlice";


const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetSingleCarQuery(id);
  const [selectFeature, setSelectFeature] = useState<string[]>([]);

  if(isLoading) {
    return <div className="text-center font-semibold text-xl my-5">Loading...</div>
}

const car: TCar = data?.data;
const additionalFeatures = ["Insurance", "GPS", "Child seat"];

const handleFeatures = ( feature: string ) => {
  let addedFeatures: string[];

  if (selectFeature.includes(feature)) {
    addedFeatures = selectFeature.filter((fil) => fil !== feature);
  } else {
    addedFeatures = [...selectFeature, feature];
  }

  setSelectFeature(addedFeatures);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addedCar: any = { ...car, additionalFeatures: addedFeatures };
  dispatch(bookedCar(addedCar));
};

const handleBook = () => {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addedCar: any = { ...car };
  dispatch(bookedCar(addedCar));
}



    return (
      <div className="flex justify-center mt-12">
        <div className="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
  <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
    <div className=" w-full md:w-96 flex justify-center items-center">
    <div className="rounded-lg w-96 dark:bg-gray-700 mb-4">
      <ReactImageMagnify
         {
          ...{
            smallImage: {
              alt: 'Image description',
              isFluidWidth: true,
              src: car?.image,
            },
            largeImage: {
              src: car?.image,
              width: 1600,
              height: 800,
            },
            enlargedImagePosition: 'over',
            enlargedImageContainerStyle: { zIndex: '150'},
          }
         }
      />
    </div>
    </div>
    <div className="flex-1 p-6">
      <div className="flex flex-wrap">
        <h1 className="flex-auto text-2xl font-semibold dark:text-gray-50">
          {car?.name}
        </h1>
        <div className="text-xl ml-10 font-semibold text-gray-500 dark:text-gray-300">
          {car?.pricePerHour}/-
        </div>
        </div>
        <div className="text-gray-900 dark:text-gray-200 text-lg font-semibold">Color: <span className="text-medium font-normal">{car?.color}</span></div>
        <div className="text-gray-900 dark:text-gray-200 text-lg font-semibold">Type: <span className="text-medium font-normal">{car?.type}</span></div>
        <div className="text-gray-900 dark:text-gray-200 text-lg font-semibold py-4"> <span className="text-medium font-normal">{car?.isElectric === "true" ? <span className="font-semibold text-white rounded px-3 py-1.5 bg-[#D9A1A7]">Electric</span> : <span className="font-semibold text-white rounded px-3 py-1.5 bg-[#8a436a]">Not Electric</span>}</span></div>
        <div className="text-gray-900 dark:text-gray-200 text-lg font-semibold">Status: <span className="text-medium font-normal">{car?.status}</span></div>
        <div className="text-gray-900 dark:text-gray-200 text-lg font-semibold mb-3">Feature:
          <span className="text-medium font-normal">{car?.features.map((feature, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-400 text-sm">{feature}</li>
        ))}</span></div>
        <div>
          <h2 className="text-xl text-gray-900 dark:text-gray-200 font-semibold">Choose Additional Features</h2>
          <div className="mb-4">{additionalFeatures.map((feature) => (
            <label key={feature} className="flex items-center">
              <input type="checkbox" value={feature} onChange={() => handleFeatures(feature)} />
              <span className="ml-2 dark:text-gray-400">{feature}</span>
            </label>
          ))}</div>
        </div>
        <div className="text-gray-900 dark:text-gray-200 text-lg font-semibold">Description: <span className="text-gray-500 dark:text-gray-400 text-sm">{car?.description}</span></div>
      <div className="flex mb-4 text-sm font-medium">
     {
      car.status === "unavailable" ? (
        <div className="py-2 px-4 mt-5 bg-[#70AABD]  text-white w-full text-center text-base font-semibold shadow-md rounded-lg ">Not Available</div>
      ) : (
        <Link to='/dashboard/booking'>
        <button onClick={handleBook} className="py-2 px-4 mt-5 bg-[#70AABD] hover:bg-[#A3CADB]  text-white w-full text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
          Book now
        </button>
        </Link>
      )
     }
      </div>
    
    </div>
  </div>
</div>

      </div>
    
    );
};

export default CarDetails;