import { Link } from "react-router-dom";


const Feature = () => {
    return (
        <div className='mb-16 md:mb-20 lg:mb-28'>
             <h1 className="flex mb-5 justify-center text-4xl font-regular">Latest Feature</h1>
      <section className=" overflow-hidden">
  <div className=" px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center">
    <div className="grid grid-col-1 md:grid-cols-2 gap-12 lg:gap-0 lg:grid-cols-4 mx-auto">
      {/*- Starts component */}
      <a href="#_">
        <div className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-100 transform origin-bottom">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-80">
    <img
      src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
      alt="Mountain"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Beautiful Mountain View
      </h2>
      <p className="text-gray-700 leading-tight mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
        sapien porttitor.
      </p>
      <div className="">
        Price: $50
      </div>
    </div>
  </div>
        </div>
      </a>
      <a href="#_">
    <div className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-100 transform origin-bottom">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-80">
    <img
      src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
      alt="Mountain"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Beautiful Mountain View
      </h2>
      <p className="text-gray-700 leading-tight mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
        sapien porttitor.
      </p>
      <div className="flex justify-between items-center">
      <div className="">
        Price: $50
      </div>
      </div>
    </div>
  </div>
    </div>
      </a>
      <a href="#_">
        <div className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-100 transform origin-bottom">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-80">
    <img
      src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
      alt="Mountain"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Beautiful Mountain View
      </h2>
      <p className="text-gray-700 leading-tight mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
        sapien porttitor.
      </p>
      <div className="flex justify-between items-center">
      <div className="">
        Price: $50
      </div>
      </div>
    </div>
  </div>
        </div>
      </a>
      <a href="#_">
        <div className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-100 transform origin-bottom">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-80">
    <img
      src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606"
      alt="Mountain"
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        Beautiful Mountain View
      </h2>
      <p className="text-gray-700 leading-tight mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
        sapien porttitor.
      </p>
      <div className="flex justify-between items-center">
      <div className="">
        Price: $50
      </div>
      </div>
    </div>
  </div>
        </div>
      </a>
    </div>

   
  </div>
</section>
<div className="flex justify-center mt-5">
                 <Link to="/cars">
                 <button className="px-6 py-2 min-w-[120px] text-center text-white bg-[#FC7E01] rounded active:text-amber-600 hover:bg-amber-500 ">
                       View All
                    </button>
                 </Link>
                   </div>

        </div>
    );
};

export default Feature;