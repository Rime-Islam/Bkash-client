import { useGetAllBookQuery } from "../../../../Redux/features/Book/bookApi";
import { useGetAllUserQuery } from "../../../../Redux/features/User/UserApi";
import { TBook } from "../../../../type/Types";


const AdminOverview = () => {
    const { data } = useGetAllUserQuery(undefined);
    const user = data?.data?.length;

    const { data: bookData } = useGetAllBookQuery(undefined);
    const book = bookData?.data;


const totalRevenue = book?.reduce((total: number, item: TBook) => {
    return total + Number(item?.carId?.pricePerHour || 0);
}, 0);





    return (
<div className="container mx-auto p-6">
  {/* Title */}
  <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Dashboard Overview</h1>
  {/* Grid of Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Users</h2>
      <p className="text-3xl font-bold text-blue-600">{user}</p>
      <p className="text-sm text-gray-500 mt-2">↑ 12% from last month</p>
    </div>
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Revenue</h2>
      <p className="text-3xl font-bold text-green-600">${totalRevenue}</p>
      <p className="text-sm text-gray-500 mt-2">↑ 8% from last month</p>
    </div>
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
       Total Booked Car
      </h2>
      <p className="text-3xl font-bold text-purple-600">{book?.length}</p>
      <p className="text-sm text-gray-500 mt-2">↓ 2 from last month</p>
    </div>
  
  </div>
</div>
      
    );
};

export default AdminOverview;