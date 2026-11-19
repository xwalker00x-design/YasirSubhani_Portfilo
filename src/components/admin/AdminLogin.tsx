import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ADMIN_SESSION = "ys_admin_session";

export const isAdminAuthenticated = (): boolean =>
  sessionStorage.getItem(ADMIN_SESSION) === "1";

export const setAdminAuthenticated = (): void => {
  sessionStorage.setItem(ADMIN_SESSION, "1");
};

export const clearAdminSession = (): void => {
  sessionStorage.removeItem(ADMIN_SESSION);
};

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expected = import.meta.env.VITE_ADMIN_PASSWORD ?? "yasir-admin-2026";
    if (password === expected) {
      setAdminAuthenticated();
      navigate("/settings", { replace: true });
      return;
    }
    setError("Invalid password");
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-white/10 bg-black-100/80 p-8 backdrop-blur-xl"
      >
        <h1 className="text-white text-2xl font-bold mb-2">Admin</h1>
        <p className="text-secondary text-sm mb-6">admin.yasirsubhani.tech</p>
        <label className="text-secondary text-sm block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-primary text-white rounded-lg border border-gray-800 px-4 py-3 mb-4 focus:border-[#915EFF] focus:outline-none"
          placeholder="Enter admin password"
        />
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold text-white bg-[#915EFF] hover:bg-[#7B4FD9]"
        >
          Sign in
        </button>
      </motion.form>
    </div>
  );
};

export default AdminLogin;
