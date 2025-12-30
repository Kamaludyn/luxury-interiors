import SEOHead from "../components/seo/SEOHead.jsx";
import LocalBusinessSchema from "../components/seo/BusinessSchema.jsx";
import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import Services from "../components/sections/Services";
import LatestProjects from "../components/sections/LatestProjects";
import Mail from "../components/ui/Mail";

const Home = () => {
  return (
    <>
      <LocalBusinessSchema />
      <SEOHead
        title="Best Interior Design & POP Ceiling Experts in Abuja"
        description="Transform your space with AC&D. Abuja's top specialists in modern POP ceilings, Gypsum board installation, TV wall designs, Bathroom Interior Design, and professional painting across Nigeria."
        path="/"
      />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <LatestProjects />
      </main>
      <Mail />
    </>
  );
};

export default Home;
