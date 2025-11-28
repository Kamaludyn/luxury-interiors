import { NavLink, Link } from "react-router-dom";

const navItems = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Projects", path: "/dashboard/projects" },
  { title: "Profile", path: "/dashboard/profile" },
  { title: "Settings", path: "/dashboard/profile-settings" },
];

export default function Sidebar({ handleLogout }) {
  return (
    <aside className="min-h-screen h-full bg-surface-500 dark:bg-surface-800 text-text-500 dark:text-white border-r border-border-500 dark:border-border-800 p-4 md:pt-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold"><Link to="/">AC&D</Link></h2>
      </div>
      <nav className="flex flex-col space-y-1">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end
            className={({ isActive }) =>
              isActive
                ? "block text-sm rounded-lg bg-primary-500 dark:bg-primary-500/50 text-white p-2 cursor-pointer"
                : "text-sm rounded-lg hover:bg-primary-500/20 p-2"
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
  );
}
