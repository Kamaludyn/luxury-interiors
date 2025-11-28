import { useAuth } from "../../shared/context/AuthContext";
import PageHeader from "../components/PageHeader";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader title="Profile" />

      <div className="space-y-4 bg-surface-600 p-4 rounded-xl shadow-sm border border-surface-500">
        <div className="flex items-center gap-3">
          <p className="text-text-500 text-sm">Surname:</p>
          <p className="text-lg font-medium">{user?.surname}</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-text-500 text-sm">Other Name:</p>
          <p className="text-lg font-medium">{user?.othername}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="text-text-500 text-sm">Email:</p>
          <p className="text-lg font-medium break-all">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
