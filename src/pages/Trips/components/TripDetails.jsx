import {
  FaMapMarkerAlt,
  FaBox,
  FaUser,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";

export default function TripDetails({ trip }) {
  if (!trip) return null;

  // Status color classes
  const statusColors = {
    Assigned: "bg-gray-200 text-gray-700",
    "In Transit": "bg-yellow-200 text-yellow-700",
    Delivered: "bg-green-200 text-success",
  };

  return (
    <div className="space-y-6 p-4 animate-fade-in">
      <h3 className="text-2xl font-semibold text-primary">{`Trip #${trip.id}`}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-blue-500 w-6 h-6" />
          <div>
            <p className="text-sm font-medium text-gray-500">Origin</p>
            <p className="text-lg font-semibold">{trip.origin}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500 w-6 h-6" />
          <div>
            <p className="text-sm font-medium text-gray-500">Destination</p>
            <p className="text-lg font-semibold">{trip.destination}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaBox className="text-yellow-500 w-6 h-6" />
          <div>
            <p className="text-sm font-medium text-gray-500">Cargo Type</p>
            <p className="text-lg font-semibold">{trip.cargoType}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaUser className="text-green-500 w-6 h-6" />
          <div>
            <p className="text-sm font-medium text-gray-500">Driver</p>
            <p className="text-lg font-semibold">{trip.driverName}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 col-span-full">
          <FaTruck className="text-indigo-500 w-6 h-6" />
          <div>
            <p className="text-sm font-medium text-gray-500">Status</p>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full font-semibold text-sm ${
                statusColors[trip.status]
              }`}
            >
              {trip.status}
              {trip.status === "Delivered" && (
                <FaCheckCircle className="ml-2 text-green-600" />
              )}
            </span>
          </div>
        </div>

        <div className="col-span-full">
          <p className="text-sm font-medium text-gray-500 mb-2">
            Proof of Delivery
          </p>
          {trip.proofOfDelivery ? (
            <img
              src={trip.proofOfDelivery}
              alt="Proof of Delivery"
              className="w-full max-h-64 object-contain rounded-lg border border-gray-300 shadow-sm"
            />
          ) : (
            <p className="text-gray-400 italic">
              No proof of delivery uploaded yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
