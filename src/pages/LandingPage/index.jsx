import React from "react";
import { useNavigate } from "react-router-dom";

import { FiUser, FiTruck, FiShield } from "react-icons/fi";
import { useRole } from "../../context/RoleContext";

function LandingPage() {
  const navigate = useNavigate();
  const { switchRole } = useRole();

  const roles = [
    {
      title: "Admin",
      description: "Manage platform operations, users, and system settings.",
      icon: <FiShield className="w-8 h-8 text-primary" />,
      route: "/trips",
    },
    {
      title: "Shipper",
      description: "Post loads, track shipments, and manage deliveries.",
      icon: <FiUser className="w-8 h-8 text-secondary" />,
      route: "/trips",
    },
    {
      title: "Driver",
      description: "Update trip progress and confirm load deliveries.",
      icon: <FiTruck className="w-8 h-8 text-success" />,
      route: "/trips",
    },
  ];
  const onRoleSelection = (role) => {
    switchRole(role);
    navigate("/trips");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full text-center space-y-12">
        <header className="space-y-4">
          <h1 className=" text-2xl md:text-4xl sm:text-5xl font-bold text-text-primary tracking-tight font-mono tracking-widest">
            Welcome to MOAM Logistics
          </h1>
          <p className="text-lg text-text-secondary">
            Please choose your role to continue
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <div
              key={i}
              onClick={() => onRoleSelection(role.title.toLowerCase())}
              className="cursor-pointer group bg-white rounded-xl shadow-card p-6 hover:shadow-lg transition-all border border-gray-100 hover:border-primary"
            >
              <div className="flex justify-center mb-4 transition-transform group-hover:-translate-y-1">
                {role.icon}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {role.title}
              </h3>
              <p className="text-sm text-text-secondary">{role.description}</p>
            </div>
          ))}
        </div>

        <footer className="pt-8 text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} MOAM Logistics. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
