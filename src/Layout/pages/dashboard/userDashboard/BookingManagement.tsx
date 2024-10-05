import { MdDelete } from "react-icons/md";
import { useDeleteBookMutation, useGetMyBookQuery } from "../../../../Redux/features/Book/bookApi";
import { TBook } from "../../../../type/Types";
import Swal from "sweetalert2";

const BookingManagement = () => {
  const { data } = useGetMyBookQuery(undefined);
  const booked = data?.data;
  const [deleteBook] = useDeleteBookMutation();


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
        const res = await deleteBook({ bookedId});
         if (res?.data?.data?.deletedCount > 0) {
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
        Delete
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
      {
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
          product.isBooked === "confirmed" ? (
            <p className="p-2 bg-green-600 rounded text-white">Approved</p>
          ) : (
            <button onClick={() => handleDelete(product?._id)} className="ml-2 px-2 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
           <MdDelete className="w-6 h-6"/>
          </button>
          )
        }
          </td>
  </tr>
       ))
      }
  </tbody>
</table>
            </div>
  );
};

export default BookingManagement;