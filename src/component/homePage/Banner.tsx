import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
    return (
        <div data-aos="fade-up"
     data-aos-duration="2000">
  {/* hero seciton */}
  <div className="relative w-full h-[80vh] inset-0" id="home">
    <div className="absolute inset-0 ">
      <img
        src="https://i.ibb.co/JjWCXS7/66ba76ece46b6640373041.webp"
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
    </div>
    <div  data-aos="zoom-in"
        data-aos-duration="2500" className="absolute inset-9  flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/3 mb-4 md:mb-0">
        <p className="text-[#FC7E01]"> - PREMIUM</p>
        <h1 className="text-white font-medium text-4xl md:text-5xl leading-tight mb-2">
          Drive Your Journey
        </h1>
        <p className="text-white mb-8 mt-4">
          Where Every Trip Begins with the perfect Ride. Start your journey with confidence - choose from our premium car rentals!
        </p>
        <Link to='/cars'>
        <button className="px-6 py-2 min-w-[120px] text-center text-white bg-[#FC7E01] rounded hover:text-[#FC7E01] hover:bg-white">
            Book Now
        </button></Link>
      </div>
    </div>
  </div>
</div>

    );
};

export default Banner;