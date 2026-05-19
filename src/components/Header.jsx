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
          aria-label="Facebook"
          className="p-3 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
        >
          <FaFacebook className="w-6 h-6" />
        </button>
        <button
          aria-label="Twitter"
          className="p-3 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
        >
          <BsTwitter className="w-6 h-6" />
        </button>
        <button
          aria-label="Instagram"
          className="p-3 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
        >
          <BsInstagram className="w-6 h-6" />
        </button>
        <button
          aria-label="LinkedIn"
          className="p-3 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500 focus:outline-none"
        >
          <LiaLinkedinIn className="w-7 h-7 text-white fill-current" />
        </button>
      </div>
    </div>
  );
};

export default Header;