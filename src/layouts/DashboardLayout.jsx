import { Suspense, useState } from "react";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOverlayClick = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={handleOverlayClick}
        />
      )}

      <div className="flex flex-col flex-1">
        <AppHeader setSidebarOpen={setSidebarOpen} />

        <div className="md:p-4 p-0  flex-1 bg-gray-100 overflow-y-auto">
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
