import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  "Home",
  "About",
  "Registration",
  "Courses",
  "Branches",
  "Products",
  "Blog",
  "Gallery",
  "Contact",
];

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-400 text-white ">
      <div className="container mx-auto gap-7 px-4 py-4 w-full flex items-center justify-center">

        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-blue-500 md:bg-transparent shadow-lg md:shadow-none py-4 md:py-0 px-4 md:px-0 z-20 md:items-center space-y-3 md:space-y-0 md:space-x-6`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="block hover:text-blue-200 transition duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;