import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/MobileSidebar";
import { useAuth } from "../../shared/context/AuthContext";

const RootLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    logout();
  };
  return (
    <div className="h-screen w-full flex text-sm md:text-base bg-surface-500">
      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        handleLogout={handleLogout}
      />

      <div className="hidden md:block w-64">
        <Sidebar handleLogout={handleLogout} />
      </div>

      <div className="h-full w-full flex-1 flex flex-col">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="w-full flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
