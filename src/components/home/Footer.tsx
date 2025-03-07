import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="px-3 pt-4 lg:px-9 border-t-2 border-[#d40950] bg-gray-50">
      <div className="container mx-auto">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
          <Link to="/" className="py-2">
          <img src="https://i.ibb.co.com/4RFyhqsC/Bkash-Logo-removebg-preview.png" className="w-20" alt="Logo" />
        </Link>
            <div className="mt-6 lg:max-w-xl">
              <p className="text-sm text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis
                mi, faucibus dignissim lorem id, imperdiet interdum mauris. Vestibulum
                ultrices sed libero non porta. Vivamus malesuada urna eu nibh
                malesuada, non finibus massa laoreet. Nunc nisi velit, feugiat a
                semper quis, pulvinar id libero. Vivamus mi diam, consectetur non orci
                ut, tincidunt pretium justo. In vehicula porta molestie. Suspendisse
                potenti.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Popular Courses
            </p>
            <a href="/">UPSC - Union Public Service Commission</a>
            <a href="/">General Knowledge</a>
            <a href="/">MBA</a>
            <p className="text-base font-bold tracking-wide text-gray-900">
              Popular Topics
            </p>
            <a href="/">Human Resource Management</a>
            <a href="/">Operations Management</a>
            <a href="/">Marketing Management</a>
          </div>
          <div>
          
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a href="/" title="send email">
                admin@company.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-[#d40950] lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2023 Company. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy &amp; Cookies Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
      </footer>
      
  );
};

export default Footer;