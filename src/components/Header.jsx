import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

const Header = () => {
  return (
    <div className="bg-gray-900 text-white px-4 py-2 flex flex-col md:flex-row justify-between items-center text-lg md:text-xl h-auto md:h-20">

      <span className="mb-2 md:mb-0 text-center md:text-left">
        Welcome To ABAX ACADEMY
      </span>


      <div className="flex space-x-3">
        <button
          aria-label="Visit our Facebook page"
          className="p-3 rounded-full hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition duration-300 flex items-center justify-center cursor-pointer"
        >
          <FaFacebook className="w-6 h-6" />
        </button>
        <button
          aria-label="Visit our Twitter page"
          className="p-3 rounded-full hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition duration-300 flex items-center justify-center cursor-pointer"
        >
          <BsTwitter className="w-6 h-6" />
        </button>
        <button
          aria-label="Visit our Instagram page"
          className="p-3 rounded-full hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition duration-300 flex items-center justify-center cursor-pointer"
        >
          <BsInstagram className="w-6 h-6" />
        </button>
        <button
          aria-label="Visit our LinkedIn page"
          className="p-3 rounded-full hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-white focus:outline-none transition duration-300 flex items-center justify-center cursor-pointer"
        >
          <LiaLinkedinIn className="w-7 h-7 text-white fill-current" />
        </button>
      </div>
    </div>
  );
};

export default Header;