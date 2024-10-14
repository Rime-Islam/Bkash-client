import { MdDelete } from "react-icons/md";
import { useDeleteBookMutation, useGetMyBookQuery } from "../../../../Redux/features/Book/bookApi";
import { TBook } from "../../../../type/Types";
import Swal from "sweetalert2";
import { useReturnCarMutation } from "../../../../Redux/features/Car/CarApi";

const BookingManagement = () => {
  const [ returnCar ] = useReturnCarMutation();
  const { data } = useGetMyBookQuery(undefined);
  const booked = data?.data;
  const [deleteBook] = useDeleteBookMutation();
console.log(booked)

  const handleDelete = async (bookedId: string | undefined) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then( async (result) => {
      if (result.isConfirmed) {
        const data = {
          bookingId: bookedId,
          endTime: new Date(),
  };
       await returnCar({ data }).unwrap();
       
       const res = await deleteBook({ bookedId}).unwrap();
    
       if (res?.data?.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
         } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:  "An Error occured"
          });
         }
       
      }
    });
   
  };


  return (
    <div>
            <table className="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
        Index
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
        Car Image
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
      Car Name
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
      Start Time
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
      End Time
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
      Total Cost
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
        Delete
      </th>
    </tr>
  </thead>
  <tbody className="bg-white dark:bg-gray-700 text-black dark:text-gray-100 divide-y divide-gray-200">
      {
     booked?.length ? (booked?.map((product: TBook, index: number) => (
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
              product?.isBooked === "canceled" ? (<p className="p-2 text-red-600 rounded font-semibold">Canceled</p>) :
              (
                product?.isBooked === "confirmed" ? (
                  <p className="p-2 text-green-600 rounded  font-semibold">Approved</p>
                ) : (
                  <button onClick={() => handleDelete(product?._id)} className="ml-2 px-2 py-2  text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  <MdDelete className="w-6 h-6"/>
                 </button>
                )
              
              )
            }
           
              </td>
      </tr>
           ))) : (
            <tr className="bg-white dark:bg-gray-700 text-black dark:text-white">
              No Booking Avaiable
            </tr>
           )
      }
  </tbody>
</table>
            </div>
  );
};

export default BookingManagement;