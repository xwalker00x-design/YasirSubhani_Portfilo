import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { clearAdminSession } from "./AdminLogin";

const nav = [
  { to: "/settings", label: "Settings", tab: "settings" },
  { to: "/settings/ai", label: "AI", tab: "ai" },
];

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    clearAdminSession();
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-primary flex">
      <aside className="w-56 shrink-0 border-r border-white/10 bg-black-100/50 p-6 flex flex-col">
        <Link to="/settings" className="text-white font-bold text-lg mb-1">
          Yasir<span className="text-[#915EFF]"> Admin</span>
        </Link>
        <p className="text-secondary text-xs mb-8">admin.yasirsubhani.tech</p>
        <nav className="flex flex-col gap-2 flex-1">
          {nav.map((item) => {
            const active =
              item.tab === "settings"
                ? location.pathname === "/settings"
                : location.pathname.startsWith("/settings/ai");
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-[#915EFF]/20 text-[#a78bfa] border border-[#915EFF]/40"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a
          href="https://yasirsubhani.tech"
          target="_blank"
          rel="noreferrer"
          className="text-secondary text-sm hover:text-white mb-4"
        >
          View live site →
        </a>
        <button
          type="button"
          onClick={logout}
          className="text-left text-red-400 text-sm hover:text-red-300"
        >
          Log out
        </button>
      </aside>
      <main className="flex-1 overflow-auto py-10 px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
