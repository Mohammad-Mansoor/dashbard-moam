import React, { useEffect, useState } from "react";
import mockTrips from "../../data/mockTrips";
import TripCard from "./components/TripCard";
import { useRole } from "../../context/RoleContext";
import SuccessToast from "../../components/successToast";
import TripTable from "./components/TripTable";
const statuses = [
  { label: "All", value: "All" },
  { label: "Assigned", value: "Assigned" },
  { label: "In Transit", value: "In Transit" },
  { label: "Delivered", value: "Delivered" },
];
function Trips() {
  const [showToast, setShowToast] = useState(false);
  const [statusFilter, setStatusFilter] = useState(statuses[0]);
  const [search, setSearch] = useState("");
  const { role } = useRole();

  const [trips, setTrips] = useState([]);
  const handleStatusChange = (id, status) => {
    trips.map((t) => {
      if (t.id === id) {
        t.status = status;
      }
    });
    setShowToast(`Trip Status Successfully changed to ${status}`);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleUploadPod = (id, url) => {
    console.log("✅✅✅", url);
    trips.map((t) => {
      if (t.id === id) {
        t.proofOfDelivery = url;
      }
    });
  };

  const onSearchChange = (e) => setSearch(e.target.value);

  const handleDeleteTrip = (id) => {
    const filteredTrips = trips.filter((t) => t.id !== id);
    setTrips(filteredTrips);
    setShowToast(`Trip with ID ${id} Removed Successfully`);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    if (role === "driver") {
      const driverTrips = mockTrips.filter(
        (trip) => trip.driverName === "Zabi"
      );
      setTrips(driverTrips);
    } else {
      setTrips(mockTrips);
    }
  }, [role]);

  useEffect(() => {
    let filtered = [...mockTrips];

    if (role === "driver") {
      filtered = filtered.filter((trip) => trip.driverName === "Zabi");
      return;
    }

    if (statusFilter.value !== "All") {
      filtered = filtered.filter((trip) => trip.status === statusFilter.value);
    }

    if (search.trim() !== "") {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(
        (trip) =>
          trip.origin.toLowerCase().includes(searchLower) ||
          trip.destination.toLowerCase().includes(searchLower) ||
          trip.driverName.toLowerCase().includes(searchLower)
      );
    }

    setTrips(filtered);
  }, [role, statusFilter.value, search]);

  useEffect(() => {
    if (role === "driver") {
      const filtered = mockTrips.filter((trip) => trip.driverName === "Zabi");
      setTrips(filtered);
    } else {
      setTrips(mockTrips);
      setStatusFilter(statuses[0]);
    }
  }, [role]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {showToast && <SuccessToast message={showToast} />}
      {role === "driver" ? (
        trips.map((trip) => (
          <TripCard
            key={trip.id}
            trip={trip}
            onStatusChange={handleStatusChange}
            onUploadPOD={handleUploadPod}
          />
        ))
      ) : (
        <div className="col-span-1 lg:col-span-3 md:grid-cols-2 ">
          <TripTable
            trips={trips}
            onDeleteTrip={handleDeleteTrip}
            setStatusFilter={setStatusFilter}
            statusFilter={statusFilter}
            statuses={statuses}
            onSearchChange={onSearchChange}
            search={search}
          />
        </div>
      )}
    </div>
  );
}

export default Trips;
