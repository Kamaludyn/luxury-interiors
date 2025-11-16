import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import Services from "../components/sections/Services";
import LatestProjects from "../components/sections/LatestProjects";
import Mail from "../components/ui/Mail";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <LatestProjects />
      <Mail />
    </main>
  );
};

export default Home;
