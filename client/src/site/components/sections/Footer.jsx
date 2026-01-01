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
            className="grid md:grid-cols-[33%_15%_20%_32%] gap-8 md:gap-4 mb-12"
          >
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl text-surface-500 font-['Cormorant_Garamond'] font-semibold">
                AbdulKarim Ceiling and Decor & Co.
              </h3>
              <p className="leading-relaxed max-w-sm">
                The leading interior finishing experts in Abuja. We specialize
                in premium POP ceilings, gypsum installations, and modern TV
                wall designs across Nigeria.
              </p>
            </div>

            <div>
              <h4 className="text-surface-500 text-lg font-medium mb-3">
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
                    to="/services"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="hover:text-primary-600 transition-colors"
                  >
                    View Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="hover:text-primary-600 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="cormorantFont text-surface-500 text-lg font-medium mb-2 border-b border-surface-500/30 inline-block">
                Service Areas
              </h4>
              <ul className="grid md:grid-cols-2">
                <li>Gwarinpa</li>
                <li>Wuse II</li>
                <li>Maitama</li>
                <li>Asokoro</li>
                <li>Gudu</li>
                <li>Utako</li>
                <li>Jabi</li>
                <li>Lugbe</li>
                <li>Lokogoma</li>
                <li>Katampe</li>
              </ul>
            </div>

            <div>
              <h4 className="text-surface-500 text-lg font-medium mb-3 ">
                <span className="cormorantFont pb-1 border-b border-surface-500/50">
                  Get In Touch
                </span>
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <Envelope size={18} />
                  <a
                    href="mailto:abdulkarimceilinganddecor@gmail.com"
                    className="hover:underline break-all"
                  >
                    abdulkarimceilinganddecor@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:+2348035843896" className="hover:underline">
                    +234 803 584 3896
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Gudu District, Abuja</span>
                </li>
              </ul>

              <div className="flex gap-4 mt-6">
                <a
                  href="https://facebook.com/abdulkarim.adamu.9655806"
                  aria-label="Follow AC&D on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="p-2 bg-surface-500/10 rounded-full hover:bg-facebook-500 hover:text-surface-500 text-facebook-500 transition-all"
                >
                  <FacebookLogo size={20} weight="fill" />
                </a>

                <a
                  href="https://wa.me/2348035843896"
                  aria-label="Contact AC&D on WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="WhatsApp"
                  className="p-2 bg-surface-500/10 rounded-full hover:bg-whatsapp-500 hover:text-surface-500 text-whatsapp-500 transition-all"
                >
                  <WhatsappLogo size={20} weight="fill" />
                </a>
                <a
                  href="https://instagram.com/youngslandy7/"
                  aria-label="Follow AC&D on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
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
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm uppercase tracking-widest opacity-70"
          >
            <p className="text-center">
              © {new Date().getFullYear()} ABDULKARIM CEILING AND DECOR & CO.
              All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
