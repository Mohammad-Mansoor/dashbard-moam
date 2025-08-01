import { useEffect, useState } from "react";
import { useRole } from "../../context/RoleContext";
import Select from "../Select.jsx";
import { GiHamburgerMenu } from "react-icons/gi";

function AppHeader({ setSidebarOpen }) {
  const { role, roles, switchRole } = useRole();
  const [selectedRole, setSelectedRole] = useState();
  useEffect(() => {
    const localStorageRole = localStorage.getItem("role");

    roles.find((r) => {
      if (r.value === localStorageRole) setSelectedRole(r);
    });
  }, []);
  useEffect(() => {
    switchRole(selectedRole?.value);
  }, [selectedRole?.value]);
  return (
    <div className="p-4 shadow-md bg-white flex items-center justify-between">
      <div className="flex items-center justify-start">
        <button
          className="md:hidden text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <GiHamburgerMenu />
        </button>
        <h1 className="ml-4 text-xl font-semibold hidden md:block">{`${role} Dashboard`}</h1>
      </div>
      <div className="">
        <Select
          options={roles}
          selected={selectedRole}
          onChange={setSelectedRole}
          label=""
        />
      </div>
    </div>
  );
}

export default AppHeader;
