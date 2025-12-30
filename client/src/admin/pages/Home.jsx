import { Folders, User, GearSix } from "phosphor-react";
import PageHeader from "../components/PageHeader";
import { useProjectsCount } from "../../shared/hooks/useProjects";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { data: projectsCount } = useProjectsCount();
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Projects"
          type="projects"
          value={projectsCount}
          path={"projects"}
        />
        <MetricCard title="Profile" type="profile" path={"profile"} />
        <MetricCard
          title="Settings"
          type="settings"
          path={"profile-settings"}
        />
      </div>
    </div>
  );
};

const icons = {
  projects: <Folders className="w-6 h-6 text-primary-600" />,
  profile: <User className="w-6 h-6 text-primary-600" />,
  settings: <GearSix className="w-6 h-6 text-primary-600" />,
};

export function MetricCard({ title, value, type, path }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center justify-between p-4 rounded-2xl shadow-sm bg-surface-500 dark:bg-surface-800 border border-border-500 dark:border-border-800 cursor-pointer hover:shadow-md"
      onClick={() => navigate(path)}
    >
      <div>
        <p className="text-sm text-text-400 dark:text-text-700">{title}</p>
        {value && (
          <p className="mt-2 text-xl font-semibold text-text-500 dark:text-white">
            {value ?? 0}
          </p>
        )}
      </div>
      {icons[type]}
    </div>
  );
}
export default Dashboard;
