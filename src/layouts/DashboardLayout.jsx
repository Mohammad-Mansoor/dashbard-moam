import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOverlayClick = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Overlay for small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={handleOverlayClick}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="p-4 shadow-md bg-white flex items-center">
          {/* Hamburger menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            <GiHamburgerMenu />
          </button>
          <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
        </div>

        {/* Page content */}
        <div className="p-4">
          <p>Your main content goes here...</p>
        </div>
      </div>
    </div>
  );
}
