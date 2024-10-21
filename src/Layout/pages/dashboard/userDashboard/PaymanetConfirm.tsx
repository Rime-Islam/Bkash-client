import { useAppSelector } from "../../../../Redux/app/hook";
import { useCarPaymentMutation } from "../../../../Redux/features/Book/bookApi";
import { useCarPayment } from "../../../../Redux/features/Book/BookSlice";
import Swal from "sweetalert2";


const PaymanetConfirm = () => {
    const [carPayment] = useCarPaymentMutation();
    const item:  any = useAppSelector(useCarPayment);


    const payDue = async () => {
        const res = await carPayment({ item }).unwrap();
       
        if (res?.success) {
          Swal.fire({
            icon: "success",
            title: "Your Payment is Loading...",
            showConfirmButton: false,
            timer: 1500
          })

          window.location.href = res?.data?.payment_url;
        }
    };


    return (
        <div>
            <h1 className="text-3xl font-semibold">Payment Comformation</h1>

            <div className="mt-12">
       {
        item ? (     <div className="flex flex-col items-center justify-center w-full max-w-lg ">
          <img
            className="w-full h-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            src={item?.carId?.image}
          />
          <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              {item?.carId?.name}
            </h3>
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span className="font-bold text-gray-800 dark:text-gray-200">${item?.totalCost}
        
        </span>
              <button onClick={payDue} className="px-4 py-3 text-sm font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Pay Due
              </button>
            </div>
          </div>
        </div>) : ( <p>No booking found</p> )
       }
            </div>
        </div>
    );
};

export default PaymanetConfirm;