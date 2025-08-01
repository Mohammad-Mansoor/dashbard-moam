// import { useRole } from "../context/RoleContext.jsx";

import { useEffect, useState } from "react";
import { FaTruck, FaList } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useRole } from "../../context/RoleContext.jsx";
import { IoClose } from "react-icons/io5";
import { routes } from "../../routes/routes.jsx";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar({ sidebarOpen, onClose }) {
  const { role } = useRole();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // if we had role specific routes we can filter sidebar Items here also
    setNavItems(routes);
  }, [role]);

  return (
    <div
      className={`fixed md:relative z-30 inset-y-0 left-0 bg-white shadow-lg flex flex-col
        transition-all duration-300 ease-in-out
        ${sidebarOpen || !isMobile ? "translate-x-0" : "-translate-x-full"}
        ${collapsed && !isMobile ? "w-20" : "w-64"}`}
    >
      <div className="relative flex items-center justify-between py-[23px] px-2 border-b">
        <h2 className="font-bold text-lg text-primary">
          {collapsed && !isMobile ? "MOAM" : "MOAM LOGISTICS"}
        </h2>

        {isMobile ? (
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close sidebar"
          >
            <IoClose size={24} />
          </button>
        ) : (
          !collapsed && (
            <button
              onClick={() => setCollapsed((prev) => !prev)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Collapse/Expand sidebar"
            >
              <IoClose size={24} />
            </button>
          )
        )}

        {!isMobile && collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            className="absolute -right-5 top-1/2 transform hover:text-primary transition-all duration-300 -translate-y-1/2 bg-gray-200 p-1 rounded-full shadow-md"
            aria-label="Expand sidebar"
          >
            <IoIosArrowDroprightCircle size={20} />
          </button>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map(({ name, icon, path }) => (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded transition-colors ${
                isActive
                  ? "bg-primary text-white font-medium shadow-sm"
                  : "text-gray-700 hover:bg-primary-light hover:text-white"
              }`
            }
          >
            <span className="text-lg">{icon}</span>
            {!collapsed && <span>{name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
