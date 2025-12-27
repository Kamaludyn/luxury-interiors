import HelmetSEO from "../components/seo/HelmetSEO.jsx";
import { EnvelopeSimple, Phone, MapPin } from "phosphor-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Header from "../components/ui/Header";

// Custom marker icon (Leaflet breaks without this)
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const position = [9.0091514, 7.4767806]; // Gudu Abuja coordinates

const Contact = () => {
  return (
    <>
      <HelmetSEO
        title="Get a Free Quote"
        description="Contact Abdulkarim Ceiling and Decor for High-end interior finishing services in Abuja. Request your free quotes for gypsum ceilings, POP wall screeding, TV wall designs, and more."
        path="/contact-us"
      />
      <main className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
        <Header title={"Contact"} />
        <div className="container mx-auto p-6 md:p-12 lg:px-20 relative z-10 space-y-4 md:space-y-6">
          <div className="flex flex-col md:flex-row justify-between gap-4 mx-auto">
            <a
              href="mailto:abdulkarimceilinganddecor@gmail.com"
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 p-2 group cursor-pointer"
            >
              <div className="bg-primary-500 rounded-md text-surface-500 p-4 my-3 md:my-0 group-hover:bg-primary-600 group-hover:shadow-lg">
                <EnvelopeSimple size={36} weight="fill" />
              </div>
              <div>
                <p className="text-primary-500 text-2xl font-bold text-center md:text-left group-hover:text-primary-600">
                  Email
                </p>
                <span
                  href="mailto:abdulkarimceilinganddecor@gmail.com"
                  className="text-primary-500/60 word-break: break-all"
                >
                  abdulkarimceilinganddecor@gmail.com
                </span>
              </div>
            </a>
            <a
              href="tel:+2348035843896"
              className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 p-2 group cursor-pointer"
            >
              <div className="bg-primary-500 rounded-md text-surface-500 p-4 my-3 md:my-0 group-hover:bg-primary-600 group-hover:shadow-lg">
                <Phone size={36} weight="fill" />
              </div>
              <div>
                <p className="text-primary-500 text-2xl font-bold text-center md:text-left group-hover:text-primary-600">
                  Phone
                </p>
                <span className="text-primary-500/60">+234 8035843896</span>
              </div>
            </a>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 p-2 group cursor-pointer">
              <div className="bg-primary-500 rounded-md text-surface-500 p-4 my-3 md:my-0 group-hover:bg-primary-600 group-hover:shadow-lg">
                <MapPin size={36} weight="fill" />
              </div>
              <div>
                <p className="text-primary-500 text-2xl font-bold text-center md:text-left group-hover:text-primary-600">
                  Address
                </p>
                <span className="text-primary-500/60">
                  Gudu District, Abuja, Nigeria
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-full">
            <div className="md:w-[50%] bg-black/50 p-6 rounded-md md:pr-12">
              <h3 className="font-bold text-5xl md:text-7xl text-surface-500 leading-14 pb-4 md:py-6 md:leading-20">
                Get in touch <br></br>
                <span className="font-black text-primary-500 underline">
                  with us
                </span>
              </h3>
              <form className="w-full py-2 flex flex-col">
                <div className="md:flex gap-2">
                  <div className="md:w-1/2">
                    <label className="text-surface-500/80 py-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="bg-surface-500 w-full p-2 mb-4 border-2 border-transparent focus:border-primary-600 outline-0 text-primary-500 rounded-md"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="text-surface-500/80 py-1">Email *</label>
                    <input
                      type="email"
                      className="bg-surface-500 w-full p-2 mb-4 border-2 border-transparent focus:border-primary-600 outline-0 text-primary-500 rounded-md"
                    />
                  </div>
                </div>
                <div className="md:flex gap-2">
                  <div className="md:w-1/2">
                    <label className="text-surface-500/80 py-1">
                      Service of Interest
                    </label>
                    <input
                      type="text"
                      className="bg-surface-500 w-full p-2 mb-4 border-2 border-transparent focus:border-primary-600 outline-0 text-primary-500 rounded-md"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <label className="text-surface-500/80 py-1">
                      Phone Number *
                    </label>
                    <input
                      type="phone"
                      className="bg-surface-500 w-full p-2 mb-4 border-2 border-transparent focus:border-primary-600 outline-0 text-primary-500 rounded-md"
                    />
                  </div>
                </div>
                <label className="text-surface-500/80 py-1">
                  Your Message *
                </label>
                <textarea className="bg-surface-500 w-full p-2 mb-4 border-2 border-transparent focus:border-primary-600 outline-0 text-primary-500 rounded-md" />
                <a
                  href="mailto:abdulkarimceilinganddecor@gmail.com?subject=Request%20a%20Quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-500 px-4 py-2 text-surface-500 hover:bg-primary-600 rounded-md ml-auto cursor-pointer"
                >
                  Request a Quote
                </a>
              </form>
            </div>
            {/* Business Location Map */}
            <MapContainer
              center={position}
              zoom={15}
              scrollWheelZoom={false}
              className="relative h-120 md:min-h-40 min-w-40 md:w-[calc(60%+2.5rem)] bg-primary-600/20 rounded-md md:-ml-10 md:z-10 md:h-140 my-auto"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
              />

              <Marker position={position} icon={markerIcon}>
                <Popup>
                  AbdulKarim Ceiling & Decor <br />
                  Gudu, Abuja.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
