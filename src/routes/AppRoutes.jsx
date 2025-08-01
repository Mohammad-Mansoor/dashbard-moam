// src/routes/Router.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

// Lazy-loaded pages
const LandingPage = lazy(() => import("../pages/LandingPage"));
const Trips = lazy(() => import("../pages/Trips"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/trips" element={<DashboardLayout />}>
          <Route path="/trips" element={<Trips />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
