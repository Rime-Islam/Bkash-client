import { FaCaretRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Extra = () => {
    return (
        <div className="py-10 md:py-20 max-w-6xl mx-auto">
  <div className=" px-8 lg:flex lg:justify-center ">
    <div className="text-center flex-1 lg:text-left lg:mt-16">
    <h1 className="text-2xl lg:text-4xl font-bold leading-7">
      We Are More Than <br /> <span className="text-[#FC7E01]">A Car Rental Company</span>
      </h1>
      <p className=" mt-6 font-light w-8/9 leading-8">
      Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton tellus eu euismod nisl massa nutodio in the miss volume place urna lacinia eros nunta urna mauris vehicula rutrum in the miss on volume interdum.
      </p>
      <p className="mt-6 font-light flex gap-2"><FaCaretRight className="mt-1.5 text-[#FC7E01]"/> Sports and Luxury Cars</p>
      <p className="mt-4 font-light flex gap-2"><FaCaretRight className="text-[#FC7E01] mt-1.5" /> Economy Cars</p>
        <Link to="/cars">
        <button
          className=" my-8
                py-3 px-7 rounded-full
                bg-[#FC7E01]
                hover:bg-amber-500
                text-white"
        >
          Get Started
        </button>
        </Link>
    </div>
    <div className="flex-1">
      <div className="flex justify-center">
      <img className="h-[60vh]" src="https://i.ibb.co/kHDBrD2/istockphoto-504344649-612x612.jpg" alt="" />
      </div>
    </div>
  </div>
</div>

    );
};

export default Extra;