import React from "react";

const LoadingSpinner = ({ text = "Loading...", size = "md" }) => {
  const sizeMap = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-4",
    lg: "h-12 w-12 border-4",
  };

  const spinnerSize = sizeMap[size] || sizeMap["md"];

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
      <div
        className={`animate-spin rounded-full border-t-transparent border-primary ${spinnerSize}`}
      />
      {text && <p className="text-sm text-gray-600">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
