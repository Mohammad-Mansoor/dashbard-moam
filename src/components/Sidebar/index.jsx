// import { useRole } from "../context/RoleContext.jsx";

import { useEffect, useState } from "react";
import { FaTruck, FaList } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useRole } from "../context/RoleContext.jsx";

export default function Sidebar({ sidebarOpen, onClose }) {
  const { role } = useRole();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems =
    role === "driver"
      ? [{ label: "Assigned Trips", icon: <FaTruck /> }]
      : [{ label: "All Trips", icon: <FaList /> }];

  return (
    <div
      className={`fixed md:relative z-30 inset-y-0 left-0 bg-white shadow-lg flex flex-col
        transition-all duration-300 ease-in-out
        ${sidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"}
        ${collapsed && !isMobile ? "w-20" : "w-64"}`}
    >
      {/* Header */}
      <div className="relative flex items-center justify-between p-4 border-b">
        <h2 className="font-bold text-lg">
          {collapsed && !isMobile ? "Logo" : "Moam Logistics"}
        </h2>

        {/* Close icon (X) on mobile OR collapse icon on md+ */}
        {isMobile ? (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        ) : (
          <button
            onClick={() => setCollapsed((prev) => !prev)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Collapse/Expand sidebar"
          >
            ✕
          </button>
        )}

        {/* Expand icon when collapsed (only on md+) */}
        {!isMobile && collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-gray-200 p-1 rounded-full shadow-md"
            aria-label="Expand sidebar"
          >
            <IoIosArrowDroprightCircle size={20} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map(({ label, icon }) => (
          <a
            href="#"
            key={label}
            className="flex items-center space-x-3 px-3 py-2 rounded hover:bg-gray-200 transition-colors"
          >
            <span className="text-lg">{icon}</span>
            {!collapsed && <span>{label}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
}
