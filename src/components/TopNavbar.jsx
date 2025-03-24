import logo from '../assets/Logo_111.png'
import { Phone, Mail } from 'lucide-react';

const TopNavbar = () => {
  return (
    <div className="bg-white py-4 h-32 px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="logo mb-4 md:mb-0">
        <img src={logo} alt="Abax Academy Logo" className="h-20 w-20" />
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
        <div className="flex items-center">
          <div className="bg-blue-400 p-2 rounded-full mr-2">
            <Mail className="text-white w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Mail Us</h4>
            <p className="text-xs text-gray-500">abaxacademy03@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-400 p-2 rounded-full mr-2">
            <Phone className="text-white w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Call Us</h4>
            <p className="text-xs text-gray-500">+91 9182573499</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
