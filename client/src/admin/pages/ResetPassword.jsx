import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThreeDot } from "react-loading-indicators";
import { toast } from "@acrool/react-toaster";
import api from "../../shared/services/api";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [resetForm, setResetForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { token } = useParams();

  // Handle Password Reset
  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Check if passwords match before proceeding
    if (resetForm.newPassword !== resetForm.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await api.patch(`/auth/reset-password/${token}`, {
        password: resetForm.newPassword,
      });
      toast.success("Password reset successfully");
      navigate("/login");
      setResetForm({ newPassword: "", confirmPassword: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="min-h-screen bg-primary-500 flex items-center justify-center px-4 mb-5">
      <div className="bg-white dark:bg-surface-3 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h3 className="text-lg font-semibold">Reset Password</h3>
        <form onSubmit={handleReset} className="space-y-4 mt-4">
          <input
            type="password"
            placeholder="New Password"
            autocomplete="new-password"
            className="w-full p-2 border rounded"
            value={resetForm.newPassword}
            onChange={(e) =>
              setResetForm((prev) => ({ ...prev, newPassword: e.target.value }))
            }
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            autocomplete="confirm-password"
            className="w-full p-2 border rounded"
            value={resetForm.confirmPassword}
            onChange={(e) =>
              setResetForm((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            required
          />

          <button
            type="submit"
            className="w-40 px-4 py-2 bg-primary-500 text-surface-500 rounded shadow hover:bg-transparent hover:text-primary-500 border border-primary-500 cursor-pointer disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <ThreeDot
                color="var(--color-primary-600)"
                size="small"
                textColor="blue"
              />
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
