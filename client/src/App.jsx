import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./shared/context/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import RootLayout from "./site/layouts/RootLayout";
import AdminLayout from "./admin/layouts/AdminLayout";
import Login from "./admin/pages/Login";
import Home from "./site/pages/Home";
import DashboardHome from "./admin/pages/Home";
import Services from "./site/pages/Services";
import Projects from "./site/pages/Projects";
import ProjectDetails from "./site/pages/ProjectDetails";
import About from "./site/pages/About";
import Contact from "./site/pages/Contact";
import DashboardProjects from "./admin/pages/Projects";
import AdminProfile from "./admin/pages/Profile";
import AdminProfileSettings from "./admin/pages/ProfileSettings";
import ResetPassword from "./admin/pages/ResetPassword";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import NotFound from "./site/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "projects",
            element: <DashboardProjects />,
          },
          {
            path: "profile",
            element: <AdminProfile />,
          },
          {
            path: "profile-settings",
            element: <AdminProfileSettings />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reset-password/:token",
    element: <ResetPassword />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
