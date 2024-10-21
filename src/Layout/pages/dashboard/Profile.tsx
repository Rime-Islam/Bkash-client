import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAppSelector } from "../../../Redux/app/hook";
import { useCurrentUser } from "../../../Redux/features/Auth/authSlice";
import { useGetMyBookQuery } from "../../../Redux/features/Book/bookApi";
import { TBook, TUser } from "../../../type/Types";



const Profile = () => {
  useEffect(() => {
    AOS.init();
  }, []);

    const user = useAppSelector(useCurrentUser);
    const { name, email, phone, address } = user as unknown as TUser;

    const { data } = useGetMyBookQuery(undefined);
   
const bookData = data?.data;

    return (
        <div>
            <div data-aos="fade-right"
                    data-aos-duration="2500" className="bg-white dark:bg-gray-700 overflow-hidden shadow rounded-lg border">
  <div className="px-4 py-5 sm:px-6">
    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
      User Profile
    </h3>
    <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
      This is some information about the user.
    </p>
  </div>
  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
    <dl className="sm:divide-y sm:divide-gray-200">
      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Full name</dt>
        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
          {name}
        </dd>
      </div>
      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Email address</dt>
        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
          {email}
        </dd>
      </div>
      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Phone number</dt>
        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
          {phone}
        </dd>
      </div>
      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Address</dt>
        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
         {address || 'No address mentioned'}
        </dd>
      </div>
    </dl>
  </div>
</div>

<div data-aos="fade-up"
                    data-aos-duration="2500" className="py-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {
    bookData ? (
      bookData.map((item: TBook) => (
        <div key={item._id} className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-md">
  <div className="relative">
    <img
      className="w-full h-44 object-cover"
      src={item?.carId?.image}
      alt="Image"
    />
    <div className="absolute top-0 right-0">
      <div className="w-32 h-8 absolute top-4 -right-8">
        <div className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
        {item?.carId?.pricePerHour}/-
        </div>
      </div>
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-xl font-semibold mb-2">{item?.carId?.name}</h3>
    <p className="text-gray-700 text-sm ">
   <span className="font-semibold text-black">Start Time: </span> {item?.payment?.startTime}
    </p>
    <p className="text-gray-700 text-sm ">
    <span className="font-semibold text-black">End Time:</span> {item?.payment?.exprirationDate}
    </p>
  </div>
</div>
      ))
    ) : (
      <div>No Booked Car Found</div>
    )
  }
</div>

            
        </div>
    );
};

export default Profile;