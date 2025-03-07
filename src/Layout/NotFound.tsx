import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="">
      
       
        <div className="max-w-md absolute ml-[35vw] mt-[18vh] text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <div className="text-9xl font-bold text-[#d40950] mb-4">404</div>
          <p className="text-4xl font-bold text-gray-800 mb-6">
            Oops! Page Not Found
          </p>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for seems to have gone on a little adventure.
            Don't worry, we'll help you find your way back home.
          </p>
          <Link to="/"
            className="inline-block bg-[#d40950] text-white font-semibold px-6 py-3 rounded-md hover:bg-amber-700 transition-colors duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      
    );
};

export default NotFound;