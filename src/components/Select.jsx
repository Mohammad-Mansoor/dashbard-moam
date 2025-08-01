import React, { useState, useRef, useEffect } from "react";

const ChevronDownIcon = ({ className }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const Select = ({ options, selected, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div
      className="w-40 relative"
      ref={ref}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {label && (
        <label className="block mb-1 text-text-primary font-medium select-none">
          {label}
        </label>
      )}
      <button
        type="button"
        className="w-full bg-background-card border border-primary rounded-md shadow-card pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="block truncate text-text-primary">
          {selected?.label || "Select an option"}
        </span>
        <span className="absolute inset-y-0 right-0 top-[3px] flex items-center pr-3 pointer-events-none">
          <ChevronDownIcon
            className={`${isOpen ? "rotate-180" : "rotate-0"} text-primary`}
          />
        </span>
      </button>

      <ul
        className={`absolute z-10 mt-1 w-full bg-background-card shadow-card max-h-60 rounded-md py-1 text-base ring-1 ring-primary ring-opacity-20 overflow-auto focus:outline-none transition ease-in-out duration-300
          ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
        role="listbox"
        tabIndex={-1}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={`cursor-pointer select-none relative py-2 pl-3 pr-9 transition
              ${
                selected?.value === option.value
                  ? "font-semibold bg-primary-light text-primary-dark"
                  : "text-text-primary hover:bg-primary hover:text-white"
              }
            `}
            role="option"
            aria-selected={selected?.value === option.value}
            onClick={() => handleSelect(option)}
            onKeyDown={(e) => e.key === "Enter" && handleSelect(option)}
            tabIndex={0}
          >
            <span
              className={`block truncate ${
                selected?.value === option.value && "text-white"
              }`}
            >
              {option.label}
            </span>
            {selected?.value === option.value && (
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white hover:text-primary-dark">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
