import { useState } from "react";
import Sidebar from "../components/Sidebar";
import AppHeader from "../components/AppHeader";

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

      <div className="flex-1 flex flex-col">
        <AppHeader setSidebarOpen={setSidebarOpen} />

        <div className="p-4">
          <p>pages content </p>
        </div>
      </div>
    </div>
  );
}
