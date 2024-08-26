

const About = () => {
    return (
        <div className="">
            {/* section 1  */}
            <div>
                <img className="w-full h-[70vh]" src="/about.jpg" alt="about us image" />
                <div className="text-3xl text-white font-bold absolute top-[66vh] left-[45vw]">About Us!</div>
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
  
      {/* section 6  */}
      <div className="bg-gray-100 py-12">
  <div className="max-w-4xl mx-auto px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">
        Location
      </h2>
      <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our Store
      </p>
     
    </div>
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              {/* Heroicon name: globe-alt */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Address
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              123 Main St, Suite 100
              <br />
              Anytown, USA 12345
            </dd>
          </div>
        </div>
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              {/* Heroicon name: phone */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
          </div>
          <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
              Phone number
            </dt>
            <dd className="mt-2 text-base text-gray-500">(555) 555-5555</dd>
          </div>
        </div>
            <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                {/* Heroicon name: mail */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                </svg>
                </div>
            </div>
            <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                Email
                </dt>
                <dd className="mt-2 text-base text-gray-500">info@ourstore.com</dd>
            </div>
            </div>
            <div className="flex">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                {/* Heroicon name: clock */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                </div>
            </div>
            <div className="ml-4">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                Store Hours
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                Monday - Friday: 9am to 8pm
                <br />
                Saturday: 10am to 6pm
                <br />
                Sunday: 12pm to 4pm
                </dd>
            </div>
            </div>
        </dl>
        </div>
    </div>
    </div>


    </div>
    );
};

export default About;