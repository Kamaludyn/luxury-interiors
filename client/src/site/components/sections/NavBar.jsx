import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  List,
  Phone,
  MapPin,
  FacebookLogo,
  WhatsappLogo,
  InstagramLogo,
} from "phosphor-react";
import { motion } from "framer-motion";
import Logo from "../ui/Logo";
import MobileMenu from "../ui/MobileMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Detect scroll direction
      if (currentScroll > lastScrollY) {
        // Scrolling down, hide navbar
        setScrollUp(false);
      } else {
        // Scrolling up, show navbar
        setScrollUp(true);
      }

      setScrolled(currentScroll > 1);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="w-full md:py-16 bg-primary-500 relative z-50">
      <section
        className={`md:fixed top-10 left-[5%] right-[5%] w-full md:w-[90%] m-0 p-0 ${
          scrolled
            ? "md:-translate-y-48 mx-auto transition-all duration-300"
            : ""
        }`}
      >
        <div className="fixed md:static top-0 left-0 w-full bg-surface-500 text-text-500 flex items-center justify-between py-6 px-6 md:px-10 md:mx-auto gap-6 shadow-lg md:rounded-lg border border-border-500/50">
          <Logo />

          {/* Hamburger menu */}
          <div
            className="md:hidden bg-primary-500 p-2 rounded-md cursor-pointer"
            onClick={toggleMenu}
          >
            <List size={32} color="#ffffff" weight="bold" />
          </div>

          <div className="hidden w-[75%] md:flex flex-col justify-end">
            {/* Contact Info */}
            <div className="hidden w-full md:flex items-center justify-end gap-10 pb-4 mb-4 border-b border-primary-500/40">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="border border-primary-600 group-hover:bg-primary-600 rounded-full p-2">
                  <Phone
                    size={20}
                    className="text-primary-600 group-hover:text-surface-500"
                  />
                </div>
                <div className="text-sm">
                  <p className="text-text-400 italic">Phone number:</p>
                  <a
                    href="tel:+2348035843896"
                    className="font-semibold text-primary-500 group-hover:text-primary-600 hover:underline"
                  >
                    +234 803 5843 896
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="border border-primary-600 group-hover:bg-primary-600 rounded-full p-2">
                  <MapPin
                    size={20}
                    className="text-primary-600 group-hover:text-surface-500"
                  />
                </div>
                <div className="text-sm">
                  <p className="text-text-400 italic">Address:</p>
                  <p className="font-semibold text-primary-500 group-hover:text-primary-600">
                    {/* Gudu, Abuja */}
                    Gudu District, Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Large screen menu */}
            <nav
              className={`hidden md:flex justify-end items-center gap-5 ${
                scrolled &&
                scrollUp &&
                "md:fixed top-5 right-0 left-0 w-[90%] mx-auto md:flex justify-between p-4 py-7 bg-surface-500 shadow-xl border border-border-500 rounded-md z-50 transition-all duration-300 md:translate-y-38"
              }`}
            >
              {scrolled && scrollUp && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-6 flex flex-col items-center gap-2 px-1 md:w-[20%]"
                >
                  <div className="absolute top-3 inset-x-5 bg-primary-600/20 h-10 w-[80%] " />
                  <Link
                    to="/"
                    className="flex items-center justify-center leading-4 px-1 border-2 border-primary-500 text-primary-500 font-bold text-lg"
                  >
                    AC<span className="text-sm">&</span>D
                  </Link>
                  <div className="text-center">
                    <p className="text-base md:text-xs font-black md:font-semibold tracking-wide">
                      ABDULKARIM
                    </p>
                    <p className="font-bold md:font-normal  text-primary-500 text-xs">
                      CEILING AND DECOR & CO
                    </p>
                  </div>
                </motion.div>
              )}
              <ul className="flex items-center gap-6 text-sm">
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
                        ? "font-bold hover:text-primary-600 transition-colors text-primary-600"
                        : "font-bold hover:text-primary-600 transition-colors"
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </ul>

              <div className="hidden md:flex items-center gap-4 md:gap-2 text-text-400">
                <a
                  href="https://facebook.com/abdulkarim.adamu.9655806"
                  aria-label="Follow AC&D on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="text-primary-500 hover:text-facebook-500 transition-colors"
                >
                  <FacebookLogo size={24} weight="fill" />
                </a>
                <a
                  href="https://wa.me/2348035843896"
                  aria-label="Contact AC&D on WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="text-primary-500 hover:text-whatsapp-500 transition-colors"
                >
                  <WhatsappLogo size={24} weight="fill" />
                </a>
                <a
                  href="https://instagram.com/youngslandy7/"
                  aria-label="Follow AC&D on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="text-primary-500 hover:text-instagram-500 transition-colors"
                >
                  <InstagramLogo size={24} weight="fill" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};
export default Navbar;
