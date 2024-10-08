import Swal from "sweetalert2";
import { useGetAllUserQuery, useUpdateUserMutation } from "../../../../Redux/features/User/UserApi";


const UserManagement = () => {
    const { data, isLoading  } = useGetAllUserQuery(undefined);
    const user = data?.data;
    const [updateUserRole] = useUpdateUserMutation();

const handleActive = async (userId: string) => {
  const data = {
    status: "Active"
  };

  const res = await updateUserRole({ userId, data }).unwrap();
  
  if (res?.success){
    Swal.fire({
      icon: "success",
      title: res?.message,
      showConfirmButton: false,
      timer: 1500
    })
   } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: res?.error?.message || "An Error occured"
    });
   }
};

const handleBlock = async (userId: string) => {
    const data = {
        status: "Block"
      };
    
      const res = await updateUserRole({ userId, data }).unwrap();
     
      if (res?.success){
        Swal.fire({
          icon: "success",
          title: res?.message,
          showConfirmButton: false,
          timer: 1500
        })
       } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res?.error?.message || "An Error occured"
        });
}
};

const handleUser = async (userId: string) => {
    const data = {
        role: "user"
      };
    
      const res = await updateUserRole({ userId, data }).unwrap();
      console.log(res)
      if (res?.success){
        Swal.fire({
          icon: "success",
          title: res?.message,
          showConfirmButton: false,
          timer: 1500
        })
       } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res?.error?.message || "An Error occured"
        });
}
};
const handleAdmin = async (userId: string) => {
    const data = {
        role: "admin"
      };
    
      const res = await updateUserRole({ userId, data }).unwrap();
      console.log(res)
      if (res?.success){
        Swal.fire({
          icon: "success",
          title: res?.message,
          showConfirmButton: false,
          timer: 1500
        })
       } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res?.error?.message || "An Error occured"
        });
}
};




    if( isLoading) return <div className="text-center text-lg">Loading...</div>

    return (
        <>
                 <div className="text-2xl text-center font-semibold mb-4 text-[#70AABD] md:mb-8">User Managemen</div>
                 <div className="flex justify-center">
        <div className="flex mt-5 gap-5 md:gap-8 ">
            {/* all added products  */}
            <div>
            <table className="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Index
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
     Email
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Phone Number
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Role
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Status
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
      Actions
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
      {
    user ? ( user?.length && user?.map((product: any, index: number) => (
      <tr key={product._id}>
              <td className="px-6 py-4 ">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product?.name} </td>
            <td className="px-6 py-4 whitespace-nowrap">{product?.email} </td>
            <td className="px-6 py-4 whitespace-nowrap">{product?.phone} </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {
                product?.role === "admin" ? ( <span className="font-semibold text-gray-800">Admin</span>) : ( <span className="font-semibold text-amber-600">User</span> )
                }
                </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {
                product?.status === "Block" ? (
                    <button onClick={() => handleActive(product._id)} className="py-1.5 px-3 bg-blue-600 rounded text-white">Activate</button>
                ) : (
                    <button onClick={() => handleBlock(product._id)} className="py-1.5 px-3 bg-[#70AABD] rounded text-white">Block</button>
                )
                }
                </td>
            <td className="px-6 py-4 whitespace-nowrap">
            {
                product?.role === "admin" ? (
                    <button onClick={() => handleUser(product._id)} className="py-1.5 px-3 bg-amber-500 rounded text-white">Make User</button>
                ) : (
                    <button onClick={() => handleAdmin(product._id)} className="py-1.5 px-3 bg-purple-500 rounded text-white">Make Admin</button>
                )
                }
            </td>
      </tr>
           ))) : ( <tr><td> No User Found</td></tr>)
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

export default UserManagement;