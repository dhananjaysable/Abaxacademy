import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

const SOCIAL_LINKS = [
  { id: 'facebook', Icon: FaFacebook, ariaLabel: 'Facebook', iconClassName: 'w-6 h-6' },
  { id: 'twitter', Icon: BsTwitter, ariaLabel: 'Twitter', iconClassName: 'w-6 h-6' },
  { id: 'instagram', Icon: BsInstagram, ariaLabel: 'Instagram', iconClassName: 'w-6 h-6' },
  { id: 'linkedin', Icon: LiaLinkedinIn, ariaLabel: 'LinkedIn', iconClassName: 'w-7 h-7 text-white fill-current' },
];

const Header = () => {
  return (
    <div className="bg-gray-900 text-white px-4 py-2 flex flex-col md:flex-row justify-between items-center text-lg md:text-xl h-auto md:h-20">

      <span className="mb-2 md:mb-0 text-center md:text-left">
        Welcome To ABAX ACADEMY
      </span>


      <div className="flex space-x-3">
        {SOCIAL_LINKS.map(({ id, Icon, ariaLabel, iconClassName }) => (
          <button
            key={id}
            aria-label={ariaLabel}
            className="p-3 cursor-pointer rounded-full hover:bg-gray-700 transition duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
          >
            <Icon className={iconClassName} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;