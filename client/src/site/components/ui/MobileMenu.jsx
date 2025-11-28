import { NavLink } from "react-router-dom";
import { X, FacebookLogo, WhatsappLogo, InstagramLogo } from "phosphor-react";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav
      className={`${
        isMenuOpen ? "right-0" : "-right-full"
      } bg-black/60 fixed top-0 md:hidden flex justify-end z-50 w-full h-full transition-all ease-linear duration-50`}
    >
      {/* Sidebar Container */}
      <div
        className={`${
          isMenuOpen ? "right-0" : "-right-full"
        } h-full w-[60%] fixed top-0 bg-secondary-500 flex flex-col items-center gap-2 p-4 ml-auto text-sm transition-all ease-linear duration-500`}
      >
        {/* Close Icon */}
        <X
          size={45}
          color="#ffffff"
          weight="bold"
          className="absolute -left-12 top-6 p-2 cursor-pointer"
          onClick={toggleMenu}
        />

        {/* Menu Links */}
        <ul className="w-full flex flex-col items-center gap-2 mt-5">
          {[
            { title: "Home", path: "/" },
            { title: "Services", path: "/services" },
            { title: "Projects", path: "/projects" },
            { title: "About Us", path: "/about-us" },
            { title: "Contact Us", path: "/contact-us" },
          ].map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "w-full group bg-primary-500 p-4 rounded-md text-center font-medium text-surface-500 transition-colors"
                  : "w-full group p-4 rounded-md text-primary-500 text-center hover:bg-primary-500 hover:text-surface-500 font-medium transition-colors"
              }
              onClick={toggleMenu}
            >
              {item.title}
            </NavLink>
          ))}
        </ul>

        {/* Socials */}
        <div className="flex items-center gap-4 text-text-400 mt-auto">
          <a
            href="#"
            className="text-primary-500 hover:text-primary-600 transition-colors"
          >
            <FacebookLogo size={24} weight="fill" />
          </a>
          <a
            href="#"
            title="WhatsApp"
            className="text-primary-500 hover:text-primary-600 transition-colors"
          >
            <WhatsappLogo size={24} weight="fill" />
          </a>
          <a
            href="#"
            title="Instagram"
            className="text-primary-500 hover:text-primary-600 transition-colors"
          >
            <InstagramLogo size={24} weight="fill" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
