// src/components/SuccessToast.jsx
import { HiCheckCircle } from "react-icons/hi";

export default function SuccessToast({ message }) {
  return (
    <div className="fixed top-18 right-5 z-50  shadow-lg rounded-xl px-4 py-3 flex items-center space-x-2 border border-green-200 bg-green-300 animate-fade-in">
      <HiCheckCircle className="text-green-500 text-xl" />
      <span className="text-sm text-gray-700">{message}</span>
    </div>
  );
}
