import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminLogin, { isAdminAuthenticated } from "./AdminLogin";
import AdminLayout from "./AdminLayout";
import AdminSettingsPage from "./AdminSettingsPage";
import AdminAiSettingsPage from "./AdminAiSettingsPage";
import AiAssistant from "../ai/AiAssistant";

const ProtectedAdmin = ({ children }: { children: ReactNode }) => {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AdminApp = () => (
  <BrowserRouter>
    <div className="relative z-0 bg-primary min-h-screen">
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
        <Route
          element={
            <ProtectedAdmin>
              <AdminLayout />
            </ProtectedAdmin>
          }
        >
          <Route path="/settings" element={<AdminSettingsPage />} />
          <Route path="/settings/ai" element={<AdminAiSettingsPage />} />
          <Route path="/" element={<Navigate to="/settings" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/settings" replace />} />
      </Routes>
      <AiAssistant />
    </div>
  </BrowserRouter>
);

export default AdminApp;
