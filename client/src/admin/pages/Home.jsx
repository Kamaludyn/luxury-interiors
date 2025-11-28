import { Folders, User, GearSix } from "phosphor-react";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Projects" type="projects" />
        <MetricCard title="Profile" type="profile" />
        <MetricCard title="Settings" type="settings" />
      </div>
    </div>
  );
}

const icons = {
  projects: <Folders className="w-6 h-6 text-primary-600" />,
  profile: <User className="w-6 h-6 text-primary-600" />,
  settings: <GearSix className="w-6 h-6 text-primary-600" />,
};

export function MetricCard({ title, value, type }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl shadow-sm bg-surface-500 dark:bg-surface-800 border border-border-500 dark:border-border-800">
      <div>
        <p className="text-sm text-text-400 dark:text-text-700">{title}</p>
        {/* <p className="text-xl font-semibold text-text-500 dark:text-white">
          {value}
        </p> */}
      </div>
      {icons[type]}
    </div>
  );
}
