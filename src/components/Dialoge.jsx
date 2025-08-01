import React, { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  // Close modal on Escape key
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={() => onClose()}
        className="fixed inset-0 bg-primary/5 bg-opacity-50 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-auto p-6 relative animate-fade-in"
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2
              id="modal-title"
              className="text-xl font-semibold text-gray-900"
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-700 focus:outline-none"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
