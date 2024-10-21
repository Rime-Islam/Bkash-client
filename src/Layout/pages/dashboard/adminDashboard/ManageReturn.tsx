import Swal from "sweetalert2";
import { useGetAllBookQuery } from "../../../../Redux/features/Book/bookApi";
import { useReturnCarMutation } from "../../../../Redux/features/Car/carApi";
import { TBook } from "../../../../type/Types";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ManageReturn = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    const [ returnCar ] = useReturnCarMutation();
    const { data, isLoading } = useGetAllBookQuery(undefined);
    const user = data?.data;


    const handleReturn = async ( id: string ) => {
      
        const data = {
            bookingId: id,
            endTime: new Date(),
    };
    const res = await returnCar({ data }).unwrap();

    if (res?.success){
        Swal.fire({
          icon: "success",
          title: res?.message,
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.location.reload();
      });
       } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "End time must be after start time"
        });
       }
    }

    if (isLoading) {
        return <div className="text-center font-semibold text-xl my-5">Loading...</div>
      }

    return (
        <>
        <div data-aos="fade-up"
     data-aos-duration="2000" className="text-2xl text-center font-semibold mb-4 text-[#70AABD] md:mb-8">Car Return Management</div>
        <div className="flex justify-center">
<div className="flex mt-5 gap-5 md:gap-8 ">
   {/* all added products  */}
   <div>
   <table className="min-w-full divide-y divide-gray-200">
<thead data-aos="fade-right"
     data-aos-duration="2000">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">
Index
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
Action
</th>
</tr>
</thead>
<tbody data-aos="fade-left"
     data-aos-duration="2000" className="bg-white dark:bg-gray-700 text-black dark:text-white divide-y divide-gray-200">
{
user ? ( user?.length && user?.map((product: TBook, index: number) => (
<tr key={product._id}>
     <td className="px-6 py-4 ">
       {index + 1}
     </td>
     <td className="px-6 py-4 whitespace-nowrap">{product?.carId?.name} </td>
   <td className="px-6 py-4 whitespace-nowrap">{product?.payment?.startTime} </td>
   <td className="px-6 py-4 whitespace-nowrap">{product?.payment?.exprirationDate}</td>
   <td className="px-6 py-4 whitespace-nowrap">{product?.carId?.status}/-</td>
   <td className="px-6 py-4 whitespace-nowrap">
       {
      
        product?.endTime !== null ? (<span className="font-semibold text-amber-600">Available</span>) :
        (<button onClick={() => handleReturn(product?._id)} className="font-semibold text-gray-800 px-3 py-1.5 bg-amber-600 dark:text-white rounded hover:bg-amber-500">Return Car</button>)
        }
       </td>

</tr>
  ))) : ( <tr><td> No Car Found</td></tr>)
}
</tbody>
</table>
   </div>
</div>
<div>
</div>
</div>
</>
    );
};

export default ManageReturn;