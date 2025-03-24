import { useState } from "react";
import { Menu, X } from "lucide-react";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400 text-white">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="flex justify-between items-center py-4">
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>

          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:w-auto w-full flex-col md:flex-row absolute md:relative left-0 bg-blue-400 md:bg-transparent z-20 p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-6`}
          >
            <a href="#" className="block md:inline-block hover:text-blue-200">
              Home
            </a>
            <a href="#" className="block md:inline-block hover:text-blue-200">
              About
            </a>
            <a href="#" className="block md:inline-block hover:text-blue-200">
              Registration
            </a>
            <a href="#" className="block md:inline-block hover:text-blue-200">
              Courses
            </a>
            <a href="#" className="block md:inline-block hover:text-blue-200">
              Branches
            </a>
            <a href="#" className="block md:inline-block hover:text-blue-200">
              Products
            </a>
            <a href="#" className="block md:inline-block hover:text-blue-200">
              Blog
            </a>
            <a href="#" className="block md:inline-block hover:text-blue-200">
              Gallery
            </a>
            <a href="#" className="block md:inline-block hover:text-blue-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
