import { Outlet } from "react-router-dom";
import NavBar from "../components/sections/NavBar";
import Footer from "../components/sections/Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
