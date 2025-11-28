import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { X } from "phosphor-react";

const navItems = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Projects", path: "/dashboard/projects" },
  { title: "Profile", path: "/dashboard/profile" },
  { title: "Settings", path: "/dashboard/profile-settings" },
];

export default function MobileSidebar({ open, onClose, handleLogout }) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 dark:text-white ${
        open ? "translate-x-0" : "-translate-x-full"
      } lg:hidden`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <aside className="relative w-64 h-full bg-surface-500 dark:bg-surface-800 p-4 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold"><Link to="/">AC&D</Link></h2>
          <button onClick={onClose}>
            <X weight="bold" className="w-5 h-5  cursor-pointer" />
          </button>
        </div>

        <nav className="flex flex-col space-y-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              className={({ isActive }) =>
                isActive
                  ? "block rounded-lg text-sm bg-primary-500 dark:bg-primary-500/50 text-white  px-4 py-2 cursor-pointer"
                  : "text-sm hover:bg-primary-500/20 px-4 py-2 "
              }
            >
              {item.title}
            </NavLink>
          ))}
          <button
            onClick={handleLogout}
            className="w-full text-left text-sm rounded-lg hover:bg-danger-800/20 p-2 mt-4 text-danger-800 cursor-pointer"
          >
            Logout
          </button>
        </nav>
      </aside>
    </div>
  );
}
