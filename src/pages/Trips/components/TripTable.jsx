// src/components/TripTable.jsx

import { FaEye } from "react-icons/fa";
import { useRole } from "../../../context/RoleContext";
import { useState } from "react";
import Modal from "../../../components/Dialoge";
import TripDetails from "./TripDetails";
import { IoSearchOutline } from "react-icons/io5";
import Select from "../../../components/Select";

export default function TripTable({
  trips,
  onDeleteTrip,
  statuses,
  statusFilter,
  setStatusFilter,
  search,
  onSearchChange,
}) {
  const { role } = useRole();
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [viewTrip, setViewTrip] = useState({});

  const [imgUrl, setImgUrl] = useState("");
  const [deleteTripId, setDeleteTripId] = useState("");
  const closeImageModal = () => {
    setIsImageModalOpen(false);
    setImgUrl(false);
  };
  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setViewTrip({});
  };
  const closeConfirmationModal = () => {
    setIsConfirmationModalOpen(false);
    setDeleteTripId("");
  };
  const setFilterByStatus = (value) => {
    setStatusFilter(value);
  };
  return (
    <div className="overflow-x-auto w-full bg-background-card shadow-card rounded-xl p-4 animate-fade-in min-h-[500px]">
      <h2 className="text-xl font-semibold text-text-primary mb-4">
        All Trips
      </h2>
      <Modal
        isOpen={isImageModalOpen}
        onClose={closeImageModal}
        title={"POD Image Preview"}
      >
        <img src={imgUrl} alt="pod-preview" />
      </Modal>

      <Modal
        isOpen={isViewModalOpen}
        onClose={closeViewModal}
        title={"Trip Details"}
      >
        <TripDetails trip={viewTrip} />
      </Modal>
      <Modal
        isOpen={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        title={"Delete Trip"}
      >
        <div className="w-full">
          <h6 className="text-text-primary">
            Are you sure to delete this Trip?
          </h6>

          <div className="flex items-center justify-end gap-2 mt-4">
            <button
              onClick={closeConfirmationModal}
              className="hover:text-white border border-primary px-4 py-2 hover:bg-primary-dark transition rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDeleteTrip(deleteTripId);
                setDeleteTripId("");
                closeConfirmationModal();
              }}
              className="text-white px-4 py-2 rounded-md hover:bg-error-dark transition bg-error"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {role === "admin" && (
        <div className="w-full flex items-center justify-between my-4">
          <div className="relative min-w-[250px]  border border-gray-300 py-1 px-4 rounded-md hover:border-primary outline-none transition">
            <IoSearchOutline className="text-gray-300 absolute left-[4px] top-[10px] text-[24px]" />
            <input
              value={search}
              type="text"
              className="min-w-full w-full  py-1 px-4 rounded-md focus:border-primary outline-none transition"
              placeholder="Search..."
              onChange={(e) => onSearchChange(e)}
            />
          </div>
          <div>
            <Select
              options={statuses}
              selected={statusFilter}
              onChange={setFilterByStatus}
            />
          </div>
        </div>
      )}
      <table className="min-w-full  table-auto border-separate border-spacing-y-2 ">
        <thead>
          <tr className="text-left text-sm text-text-secondary">
            <th className="px-4 py-2">Trip ID</th>
            <th className="px-4 py-2">Origin</th>
            <th className="px-4 py-2">Destination</th>
            <th className="px-4 py-2">Cargo</th>
            <th className="px-4 py-2">Driver</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Proof of Delivery</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip, i) => (
            <tr
              key={trip.id}
              className="bg-white rounded-lg shadow-sm text-sm text-text-primary"
            >
              <td className="px-4 py-2">{i + 1}</td>
              <td className="px-4 py-2">{trip.origin}</td>
              <td className="px-4 py-2">{trip.destination}</td>
              <td className="px-4 py-2">{trip.cargoType}</td>
              <td className="px-4 py-2">{trip.driverName}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2  py-1 rounded-full text-xs font-medium ${
                    trip.status === "Delivered"
                      ? "bg-success/10 text-success"
                      : trip.status === "In Transit"
                      ? "bg-warning/20 text-warning-dark"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {trip.status}
                </span>
              </td>
              <td className="px-4 py-2">
                {trip.proofOfDelivery ? (
                  <p
                    onClick={() => {
                      setIsImageModalOpen(true);
                      setImgUrl(trip.proofOfDelivery);
                    }}
                    className="text-primary cursor-pointer  hover:underline"
                  >
                    View POD
                  </p>
                ) : (
                  <span className="text-text-secondary italic">
                    Not uploaded
                  </span>
                )}
              </td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="text-sm text-primary-light transition hover:text-primary font-medium flex items-center gap-1 mx-auto"
                    onClick={() => {
                      setViewTrip(trip);
                      setIsViewModalOpen(true);
                    }}
                  >
                    <FaEye />
                    View
                  </button>
                  {role === "admin" && (
                    <button
                      className="text-sm text-error hover:text-error-light font-medium flex items-center transition gap-1 mx-auto"
                      onClick={() => {
                        // onDeleteTrip(trip.id);
                        setDeleteTripId(trip.id);
                        setIsConfirmationModalOpen(true);
                      }}
                    >
                      <FaEye />
                      Delete
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
