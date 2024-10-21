import { useNavigate } from "react-router-dom";
import { useGetMyBookQuery } from "../../../../Redux/features/Book/bookApi";
import { useAppDispatch } from "../../../../Redux/app/hook";
import { carPayment } from "../../../../Redux/features/Book/BookSlice";
import { TBook } from "../../../../type/Types";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Payment = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    const  { data } = useGetMyBookQuery(undefined);
    const booked = data?.data;
   console.log(booked)

    const navigate = useNavigate();
    const dispatch = useAppDispatch();


const handlePayment = async (product: TBook) => {
    dispatch(carPayment(product));
    navigate("/dashboard/payment_confirmation");
}

    return (
        <div>
            <table className="min-w-full  divide-y divide-gray-200">
  <thead data-aos="fade-left"
                    data-aos-duration="2500">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
        Index
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
        Car Image
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
      Car Name
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
      Start Time
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
      End Time
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
      Total Cost
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider">
       Payment
      </th>
    </tr>
  </thead>
  <tbody data-aos="fade-right"
                    data-aos-duration="2500" className="bg-white dark:bg-gray-700 text-black dark:text-white divide-y divide-gray-200">
      {
    booked ? (
        booked?.length && booked?.map((product: TBook, index: number) => (
            <tr key={product._id}>
                    <td className="px-6 py-4 ">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={product?.carId?.image} alt="image"  className="w-8 h-8 md:w-12 md:h-12 bg-gray-800 rounded-full"/>
                    </td>
                  <td className="px-6 py-4 whitespace-nowrap">{product?.carId?.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product?.payment?.startTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product?.payment?.exprirationDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product?.carId?.pricePerHour}</td>
                  <td className="px-3 py-4 whitespace-nowrap">
               
                  {
                 
                     product?.isBooked === 'canceled' ? (
                      <p className="p-2 text-red-600 rounded font-semibold">Canceled</p>
                     ) : (
                      product?.isBooked === 'unconfirmed' ? (
                        <p className="p-2 text-amber-600 rounded font-semibold">Not Confirmed</p>
                      ) : (
                        product?.paymentStatus === "Pending" ? (
                        product?.endTime ? (<button onClick={() => handlePayment(product)} className="text-white font-semibold bg-[#FC7E01] hover:bg-amber-500 py-2 px-4 rounded">Proceed To Pay</button>) : (
                          <p className="dark:text-black text-purple-600">Return Uncomfirmed</p>
                        )
                        ) : (
                          <p className="p-2 text-green-600 rounded font-semibold">Paid</p>
                        )
                      )
                     )
                    
                    
                  }
                    </td>
            </tr>
                 ))
    ) : ( <div>No Bookings Available</div>)
      }
  </tbody>
</table>
            </div>
    );
};

export default Payment;