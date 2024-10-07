import { useNavigate } from "react-router-dom";
import { useGetMyBookQuery } from "../../../../Redux/features/Book/bookApi";
import { useAppDispatch } from "../../../../Redux/app/hook";
import { carPayment } from "../../../../Redux/features/Book/BookSlice";


const Payment = () => {
    const  { data } = useGetMyBookQuery(undefined);
    const booked = data?.data;

    const navigate = useNavigate();
    const dispatch = useAppDispatch();


const handlePayment = async (product: any) => {
    dispatch(carPayment(product));
    navigate("/dashboard/payment_confirmation");
}

    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Index
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Car Image
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Car Name
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Start Time
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      End Time
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Total Cost
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
       Payment
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
      {
    booked ? (
        booked?.length && booked?.map((product: any, index: number) => (
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
                      product?.paymentStatus === "pending" ? (
                          <button onClick={() => handlePayment(product)} className="text-white font-semibold bg-[#FC7E01] hover:bg-amber-500 py-2 px-4 rounded">Proceed To Pay</button>
                      ) : (
                          <p className="font-semibold text-green-600">Paid</p>
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