import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../Redux/app/hook";
import { useAddBookMutation, } from "../../../../Redux/features/Book/bookApi";
import { useBookedCar, useConfirmBooking } from "../../../../Redux/features/Book/BookSlice";
import { useCurrentUser } from "../../../../Redux/features/Auth/authSlice";
import { TUser } from "../../../../type/Types";
import Swal from "sweetalert2";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BookingConfirm = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    const navigate = useNavigate();
    const [ addBooked ] = useAddBookMutation();
    const useBooked: any = useAppSelector(useBookedCar);
    const bookingDetail = useAppSelector(useConfirmBooking);
    const useUser = useAppSelector(useCurrentUser) as unknown as TUser; 
    const carId = useBooked?._id;


    const handleConfirm = async () => {
        const bookedInfo = {
            payment: { ...bookingDetail, status: "pending" },
            carId: carId,
        };

        const res = await addBooked(bookedInfo).unwrap();
        if (res?.success){
            Swal.fire({
              icon: "success",
              title: res.message,
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              navigate('/dashboard/booking_management');
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
       <>
       <h1 data-aos="fade-right"
                    data-aos-duration="2500" className="text-3xl font-bold text-center mb-8">Review Your Booking</h1>
        <div className="flex space-x-4">
        <div data-aos="fade-up"
                    data-aos-duration="2500" className="bg-white flex-1 overflow-hidden shadow rounded-lg border mx-4 box">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                User Information
              </h3>
            
            </div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              The User information is provided below.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {useUser?.name}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {useUser?.email}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone number</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {useUser?.phone}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Job Title</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {useUser?.role}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div data-aos="fade-down"
                    data-aos-duration="2500" className="bg-white flex-1 overflow-hidden shadow rounded-lg border box">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Booking Information
              </h3>
            </div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              You can find the booking information to this contact below.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                 Car Name
                </dd>
                <p className="text-sm font-medium text-gray-500"> {useBooked?.name}</p>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Car Image
                </dd>
                <img src={useBooked?.image} className="w-20"/>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Features
                </dd>
                <p className="text-sm font-medium text-gray-500">{useBooked?.features?.join(", ")}</p>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Car Additional Features
                </dd>
                <p className="text-sm font-medium text-gray-500">{useBooked?.additionalFeatures}</p>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Price Per Hour
                </dd>
                <p className="text-sm font-medium text-gray-500"> {useBooked?.pricePerHour}/-</p>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div data-aos="fade-left"
                    data-aos-duration="2500" className="my-12 flex justify-center">
        <button onClick={handleConfirm} className="text-white font-semibold bg-[#FC7E01] hover:bg-amber-500 py-2 px-4 rounded">Confirm Booking</button>
      </div>
       </>
      
    );
};

export default BookingConfirm;