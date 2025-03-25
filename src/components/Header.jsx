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
        <div className="p-3 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300 flex items-center justify-center">
          <button>
            <FaFacebook className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
        <div className="p-3 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300 flex items-center justify-center">
          <button>
            <BsTwitter className="cursor-pointer w-6 h-6" />
          </button>
        </div>
        <div className="p-3 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300 flex items-center justify-center">
          <button>
            <BsInstagram className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
        <div className="p-3 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300 flex items-center justify-center">
          <button>
            <LiaLinkedinIn className="w-7 h-7 text-white fill-current cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;