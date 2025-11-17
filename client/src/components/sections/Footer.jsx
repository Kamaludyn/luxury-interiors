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
      <section className="relative w-full overflow-hidden bg-primary-500 text-surface-500 pt-10 md:pt-18 pb-10 border-t border-border-500/30">
        <div className="container relative mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[40%_30%_30%] gap-8 md:gap-4 mb-12"
          >
            <div className="space-y-4">
              <h3 className="text-2xl text-surface-500 font-['Cormorant_Garamond'] font-semibold">
                AbdulKarim Ceiling and Decor & Co.
              </h3>
              <p className="leading-relaxed max-w-sm">
                Crafting timeless spaces that merge artistry with function.
                Every detail, meticulously designed for harmony and beauty.
              </p>
            </div>

            <div className="">
              <h4 className="text-surface-500 text-lg font-medium mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="hover:text-primary-500 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-primary-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-primary-500 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="hover:text-primary-500 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-primary-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
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
                  href="#"
                  className="p-2 bg-surface-500/10 rounded-full hover:bg-primary-600 hover:text-white transition-all"
                >
                  <FacebookLogo size={20} weight="fill" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-surface-500/10 rounded-full hover:bg-primary-600 hover:text-white transition-all"
                >
                  <WhatsappLogo size={20} weight="fill" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-surface-500/10 rounded-full hover:bg-primary-600 hover:text-white transition-all"
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
            <p className="mt-2 md:mt-0">
              Designed with <span className="text-primary-600">elegance</span> &
              precision.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default Footer;
