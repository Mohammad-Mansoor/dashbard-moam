// src/components/TripCard.jsx
import {
  FaMapMarkerAlt,
  FaTruck,
  FaBox,
  FaUser,
  FaFileImage,
} from "react-icons/fa";
// import { useRole } from "../context/RoleContext";
import { useEffect, useState } from "react";
import { useRole } from "../../../context/RoleContext";
import Select from "../../../components/Select";

export default function TripCard({ trip, onStatusChange, onUploadPOD }) {
  const { role } = useRole();
  const [status, setStatus] = useState();
  const [preview, setPreview] = useState(null);
  const statuses = [
    { label: "Assigned", value: "Assigned" },
    { label: "In Transit", value: "In Transit" },
    { label: "Delivered", value: "Delivered" },
  ];

  const handlePODUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    if (onUploadPOD) {
      onUploadPOD(trip.id, URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const sta = statuses.find((s) => s.value === trip.status);
    setStatus(sta);
    setPreview(trip?.proofOfDelivery);
  }, [trip.id]);
  const handleStatusChange = (e) => {
    setStatus(e);
    if (onStatusChange) {
      onStatusChange(trip.id, e.value);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 transition hover:shadow-lg border border-primary/50">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            {trip.origin} → {trip.destination}
          </h2>
          <span className="text-sm text-gray-500">Trip ID: {trip.id}</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>Origin: {trip.origin}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Destination: {trip.destination}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBox className="text-yellow-500" />
            <span>Cargo: {trip.cargoType}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-green-500" />
            <span>Driver: {trip.driverName}</span>
          </div>
        </div>

        {/* Status section */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <FaTruck className="text-indigo-500" />
            <span className="text-gray-700 font-medium">Status:</span>
          </div>

          {role === "driver" ? (
            <Select
              options={statuses}
              selected={status}
              onChange={handleStatusChange}
            />
          ) : (
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                status?.value === "Delivered"
                  ? "bg-green-100 text-success"
                  : status?.value === "In Transit"
                  ? "bg-yellow-200 text-yellow-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {status?.value}
            </span>
          )}
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-700 font-medium mb-2">
            <FaFileImage className="text-primary" />
            <span>Proof of Delivery (POD)</span>
          </div>

          {trip.proofOfDelivery || preview ? (
            <img
              src={preview || trip.proofOfDelivery}
              alt="POD"
              className="w-full h-48 object-contain rounded-lg border"
            />
          ) : role === "driver" ? (
            <input
              type="file"
              accept="image/*"
              onChange={handlePODUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          ) : (
            <p className="text-gray-400 text-sm italic">No POD uploaded yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
