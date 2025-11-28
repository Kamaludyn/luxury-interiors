import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../components/sections/NavBar";
import Footer from "../components/sections/Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default RootLayout;
