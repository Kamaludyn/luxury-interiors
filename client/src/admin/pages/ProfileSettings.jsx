import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@acrool/react-toaster";
import { ThreeDot } from "react-loading-indicators";
import api from "../../shared/services/api";
import PageHeader from "../components/PageHeader";

const Settings = () => {
  const [email, setEmail] = useState("");
  const [changePassForm, setChangePassForm] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [loading, setLoading] = useState({
    changePassword: false,
    forgotPassword: false,
  });

  const navigate = useNavigate();

  // CHANGE PASSWORD
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, changePassword: true }));
    try {
      await api.patch("/auth/change-password", changePassForm);
      toast.success("Password changed successfully");
      setChangePassForm({ currentPassword: "", newPassword: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to change password");
    } finally {
      setLoading((prev) => ({ ...prev, changePassword: false }));
    }
  };

  // Handle Forgot Password
  const handleForgot = async (e) => {
    e.preventDefault();

    setLoading((prev) => ({ ...prev, forgotPassword: true }));

    try {
      await api.post("/auth/forgot-password", { email: email });
      toast.success("Reset link sent to your email");
      setEmail("");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send reset link");
    } finally {
      setLoading((prev) => ({ ...prev, forgotPassword: false }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <PageHeader title="Profile Settings" />

      {/* CHANGE PASSWORD */}
      <div className="bg-surface-600 p-4 rounded-xl border border-surface-500 space-y-4">
        <h3 className="text-lg font-semibold">Change Password</h3>
        <form onSubmit={handleChangePassword}>
          <input
            type="password"
            placeholder="Current Password"
            className="w-full p-2 border rounded"
            autocomplete="current-password"
            value={changePassForm.currentPassword}
            onChange={(e) =>
              setChangePassForm((prev) => ({
                ...prev,
                currentPassword: e.target.value,
              }))
            }
            required
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2  my-2 border rounded"
            autocomplete="new-password"
            value={changePassForm.newPassword}
            onChange={(e) =>
              setChangePassForm((prev) => ({
                ...prev,
                newPassword: e.target.value,
              }))
            }
            required
          />

          <button
            type="submit"
            className="w-50 px-4 py-2 bg-primary-500 text-surface-500 rounded shadow hover:bg-transparent hover:text-primary-500 border border-primary-500 cursor-pointer"
            disabled={loading.changePassword}
          >
            {loading.changePassword ? (
              <ThreeDot color="var(--color-primary-600)" size="small" />
            ) : (
              "Update Password"
            )}
          </button>
        </form>
      </div>
      {/* FORGOT PASSWORD */}
      <div className="bg-surface-600 p-4 rounded-xl border border-surface-500 space-y-4">
        <h3 className="text-lg font-semibold">Forgot Password</h3>
        <form onSubmit={handleForgot}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
            autocomplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-40 px-4 py-2 mt-2 bg-primary-500 text-surface-500 rounded shadow hover:bg-transparent hover:text-primary-500 border border-primary-500 cursor-pointer"
            disabled={loading.forgotPassword}
          >
            {loading.forgotPassword ? (
              <ThreeDot color="var(--color-primary-600)" size="small" />
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
