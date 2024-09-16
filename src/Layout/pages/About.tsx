import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="">
            {/* section 1  */}
            <div>
                <img className="w-full h-[70vh]" src="/about.jpg" alt="about us image" />
                <div className="text-3xl text-white font-bold absolute top-[56vh] left-[45vw]">About Us!</div>
            </div>
                    {/* section 2 */}
        <section className="">
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                
                    <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    We know tech, we know finance. We are fintech experts.
                    </p>
                    <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    We know how to handle taxation for all the countried we operate in. We
                    care for our customers and help them manage rentals.
                    </p>
                </div>
                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                            <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                        </div>
                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                            Our Legacy
                        </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                        Since our founding in 1998, we have been at the forefront of the car rental industry. </dd>
                    </div>
                    <div className="relative">
                        <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                            <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                        </div>
                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Global Reach
                        </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                        From our humble beginnings, we've expanded our operations to over 50 countries worldwide. 
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                            <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                        </div>
                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Innovation and Technology
                        </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                        We embrace technology to enhance our services and provide our customers with the best possible experience. 
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                            <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />
                        </div>
                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Sustainability Commitment
                        </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                        We understand the impact our industry has on the environment, and we are committed to reducing our carbon footprint. 
                        </dd>
                    </div>
                    </dl>
                </div>
                </div>
            </div>
            </section>

            {/* parallux section  */}
            <div className="mt-5">
        <div className="h-[70vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("/parallax1.webp")' }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                   <div>
                   <h1 className="text-white text-3xl font-bold">YOUR NEXT TRAVEL WITH US?</h1>
                    <p className="text-white text-center">Use our online tool to calculate
                    the total cost of your ride</p>
                   <div className="flex justify-center mt-5">
                  <Link to="/cars">
                  <button className="px-6 py-2 min-w-[120px] text-center text-white bg-amber-600 rounded active:text-amber-600 hover:bg-amber-500 ">
                        Book Now
                    </button></Link>
                   </div>
                   </div>
                </div>
            </div>
            <div className="relative">
                <div className="relative -mt-screen bg-white  px-4">

                </div>
            </div>
        </div>

            {/* section 3 */}
        <section className="text-center py-10 md:py-20 px-4">
        <h2 className="text-2xl md:text-4xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Our mission is to provide exceptional healthcare services with a focus on
        availability, reliability, and support.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
        <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">85+</h3>
            <p className="text-gray-700">Specialists</p>
        </div>
        <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">25+</h3>
            <p className="text-gray-700">Years of Experience</p>
        </div>
        </div>
        </section>

    {/* section 4 */}
        <div className="bg-gray-100">
    <div className="py-10 max-w-screen-xl mx-auto">
    <div className="text-center mb-16">
    
    <h3 className="text-2xl md:text-4xl font-bold ">
        Our Team
    </h3>
    </div>
    <div className="grid grid-cols-3 col-gap-10">
    <div className="text-center bg-white">
        <img
        className="w-100"
        src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <div className="p-4">
        <div className="text-md">
            <a
            href="#"
            className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
            >
            Mehdi Mohammadi
            </a>
            <p className="text-gray-500 uppercase text-sm">Technician</p>
        </div>
        <div className="my-4 flex justify-center items-center">
    {/* social media  */}
        </div>
        </div>
    </div>
    <div className="text-center bg-white">
        <img
        className="w-100"
        src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <div className="p-4">
        <div className="text-md">
            <a
            href="#"
            className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
            >
            Yahya R. Makarim
            </a>
            <p className="text-gray-500 uppercase text-sm">
            president &amp; CEO
            </p>
        </div>
        <div className="my-4 flex justify-center items-center">
    {/* social media  */}
        </div>
        </div>
    </div>
    <div className="text-center bg-white">
        <img
        className="w-100"
        src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <div className="p-4">
        <div className="text-md">
            <a
            href="#"
            className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
            >
            Ahmad Sultani
            </a>
            <p className="text-gray-500 uppercase text-sm">Manager</p>
        </div>
        <div className="my-4 flex justify-center items-center">
        
    {/* social media links  */}
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>

        {/* section 5 */}
        <div className="text-center p-8">
  <h2 className="font-bold text-2xl  md:text-4xl ">
    Variety Of Cars
  </h2>
  <div className="flex flex-wrap items-center mt-20 justify-center">
    <div className="">
      <img
        src="/about1.jpeg"
        alt="gem"
        className="inline-block max-w-sm rounded shadow-lg border border-merino-400"
      />
    </div>
    <div className="w-full md:w-2/5 px-4 text-center md:text-left lg:pl-12">
      <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
      Economy and Class Cars
      </h3>
      <p className="sm:text-lg mt-6">
      Choose from our wide range of economy and class cars that fit your budget and style. Whether you're looking for a cost-effective option or a more refined ride, our fleet offers something for everyone. Simply select your preferred car type, and follow our straightforward rental process to get on the road in no time. 
      </p>
    </div>
  </div>

  <div className="flex flex-wrap items-center mt-20 justify-center">
    <div className="">
      <img
        src="/about2.jpg"
        alt="project members"
        className="inline-block max-w-sm rounded shadow-lg border border-merino-400"
      />
    </div>
    <div className="w-full md:w-2/5 px-4 md:order-first text-center md:text-left lg:pr-12">
      <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
        

      </h3>
      <p className="sm:text-lg mt-6">
      Indulge in the ultimate driving experience with our selection of luxury cars. Perfect for special occasions or when you simply want to travel in style, our luxury vehicles offer unparalleled comfort, cutting-edge technology, and top-notch performance. From sleek sedans to high-end convertibles, our fleet is designed to cater to those who appreciate the finer things in life.
      </p>
    </div>
  </div>

  <div className="flex flex-wrap items-center mt-20 justify-center">
    <div className="">
      <img
        src="/about3.webp"
        alt="editor"
        className="inline-block max-w-sm rounded shadow-lg border border-merino-400"
      />
    </div>
    <div className="w-full md:w-2/5 px-4 text-center md:text-left lg:pl-12">
      <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
      SUVs
      </h3>
      <p className="sm:text-lg mt-6">
      For those seeking space, versatility, and power, our SUVs are the perfect choice. Whether you're planning a family road trip, need extra room for cargo, or desire a vehicle that can handle various terrains, our range of SUVs has you covered. With options from compact crossovers to full-size sport utility vehicles, you can find the ideal SUV to suit your needs.
      </p>
    </div>
  </div>
 
</div>



    </div>
    );
};

export default About;