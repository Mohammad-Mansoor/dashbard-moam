import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role || role === "undefined") {
      navigate("/");
    } else {
      setIsChecking(false);
    }
  }, [navigate]);

  if (isChecking) return null;

  return <Outlet />;
}

export default ProtectedRoute;
