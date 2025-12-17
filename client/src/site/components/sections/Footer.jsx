import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  InstagramLogo,
  FacebookLogo,
  Envelope,
  Phone,
  MapPin,
  WhatsappLogo,
} from "phosphor-react";
import StartProjectCTA from "./StartProjectCTA";

const Footer = () => {
  return (
    <>
      <StartProjectCTA />
      <footer className="relative w-full overflow-hidden bg-primary-500 text-surface-500 pt-10 md:pt-14 pb-10 border-t border-border-500/30">
        <div className="container relative mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[36%_32%_32%] gap-8 md:gap-4 mb-12"
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl text-surface-500 font-['Cormorant_Garamond'] font-semibold">
                AbdulKarim Ceiling and Decor & Co.
              </h3>
              <p className="leading-relaxed max-w-sm">
                Crafting timeless spaces that merge artistry with function.
                Every detail, meticulously designed for harmony and beauty.
              </p>
            </div>

            <div>
              <h4 className="text-surface-500 text-lg font-medium mb-2 ">
              <span className="cormorantFont pb-1 border-b border-surface-500/50">
                Quick Links
                </span>
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-primary-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-surface-500 text-lg font-medium mb-4">
                Get In Touch
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Envelope size={18} />
                  <span className="break-all">
                    abdulkarimceilinganddecor@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} /> +234 8035843896
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={18} /> Gudu, Abuja, Nigeria
                </li>
              </ul>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-surface-500/10 rounded-full hover:bg-facebook-500 hover:text-surface-500 text-facebook-500 transition-all"
                >
                  <FacebookLogo size={20} weight="fill" />
                </a>

                <a
                  href="https://wa.me/234XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-surface-500/10 rounded-full hover:bg-whatsapp-500 hover:text-surface-500 text-whatsapp-500 transition-all"
                >
                  <WhatsappLogo size={20} weight="fill" />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-surface-500/10 rounded-full hover:bg-instagram-500/80 hover:text-surface-500 text-instagram-500 transition-all"
                >
                  <InstagramLogo size={20} weight="fill" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Divider Line */}
          <div className="border-t border-border-500/60  my-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm"
          >
            <p className="text-center">
              © {new Date().getFullYear()} ABDULKARIM CEILING AND DECOR. All
              Rights Reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
