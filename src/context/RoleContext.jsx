import { createContext, useContext, useState } from "react";

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(
    () => localStorage.getItem("role") || "driver"
  );
  const roles = [
    { value: "driver", label: "Driver" },
    { value: "shipper", label: "Shipper" },
    { value: "admin", label: "Admin" },
  ];

  const switchRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem("role", newRole);
  };

  return (
    <RoleContext.Provider value={{ role, roles, switchRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
