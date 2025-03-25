import logo from '../assets/Logo_111.png';
import { Phone, Mail } from 'lucide-react';

const TopNavbar = () => {
  return (
    <div className="bg-white py-4 px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 h-auto md:h-32">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Abax Academy Logo" className="h-16 w-16 md:h-20 md:w-20" />
      </div>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-start">
        {/* Mail Us Section */}
        <div className="flex items-center">
          <div className="bg-blue-400 p-2 rounded-full mr-2">
            <Mail className="text-white w-5 h-5" />
          </div>
          <div className='flex items-start flex-col'>
            <h4 className="text-sm font-semibold text-center md:text-left">Mail Us</h4>
            <p className="text-xs text-gray-500 text-center md:text-left">abaxacademy03@gmail.com</p>
          </div>
        </div>

        {/* Call Us Section */}
        <div className="flex items-start">
          <div className="bg-blue-400 p-2 rounded-full mr-2">
            <Phone className="text-white w-5 h-5" />
          </div>
          <div className='flex items-start flex-col'>
            <h4 className="text-sm font-semibold text-center md:text-left">Call Us</h4>
            <p className="text-xs text-gray-500 text-center md:text-left">+91 9182573499</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;