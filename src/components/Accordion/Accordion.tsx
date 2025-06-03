import React, { useEffect, useState } from "react";
import clsx from "clsx";

type AccordionOption = {
  label: string;
  name: string;
  options: string[];
};

type Props = {
  filters: AccordionOption[];
  onFiltersChange: (filters: Record<string, string[]>) => void;
};

const animationLength = 500;

export default function Accordion({ filters, onFiltersChange }: Props) {
  const [openSectionId, setOpenSectionId] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({});
  const [ariaLiveMessage, setAriaLiveMessage] = useState("");

  const toggleSection = (id: number) =>
    setOpenSectionId(openSectionId === id ? -1 : id);

  const updateSummaryText = (newState: Record<string, string[]>) => {
    const summaryText = Object.entries(newState)
      .map(([key, values]) => `${key}: ${values.join(", ")}`)
      .join("; ");

    setAriaLiveMessage(`Filters selected: ${summaryText || "none"}`);
  };

  const toggleFilter = (filterName: string, filterOption: string) => {
    setSelectedFilters((prev) => {
      const current = prev[filterName] || [];
      const isSelected = current.includes(filterOption);
      const updated = isSelected
        ? current.filter((item) => item !== filterOption)
        : [...current, filterOption];
      const newState = { ...prev, [filterName]: updated };

      if (newState[filterName].length === 0) {
        delete newState[filterName];
      }

      updateSummaryText(newState);

      return newState;
    });
  };

  useEffect(() => {
    onFiltersChange(selectedFilters);
  }, [onFiltersChange, selectedFilters]);

  return (
    <>
      <div aria-live="polite" role="status" className="sr-only">
        {ariaLiveMessage}
      </div>

      <div
        id="accordion"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 text-blue-600"
      >
        {filters.map(({ label, name, options }, index) => {
          const isFirst = index === 0;
          const isLast = index === filters.length - 1;
          const isOpen = openSectionId === index;
          const selected = selectedFilters[name] || [];

          return (
            <React.Fragment key={name}>
              <h2 id={`accordion-header-${name}`}>
                <button
                  type="button"
                  className={clsx(
                    "flex w-full items-center justify-between gap-3 border border-gray-200 p-5 font-medium text-gray-500 hover:bg-blue-100 focus:ring-2 focus:ring-blue-200 rtl:text-right",
                    isFirst && "rounded-t-md",
                    isLast && !isOpen && "rounded-b-md",
                    !isLast && "border-b-0"
                  )}
                  data-accordion-target={`#accordion-body-${name}`}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-body-${name}`}
                  onClick={() => toggleSection(index)}
                >
                  <span>{label}</span>
                  <svg
                    data-accordion-icon
                    className={clsx(
                      `duration-${animationLength}`,
                      "h-3 w-3 shrink-0 transition-transform",
                      isOpen && "text-blue-600",
                      !isOpen && "rotate-180"
                    )}
                    aria-hidden={!isOpen}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>

              <div
                id={`accordion-body-${name}`}
                className={clsx(
                  `duration-${animationLength}`,
                  "overflow-hidden transition-[max-height] ease-in-out",
                  isOpen ? "opacity-100" : "max-h-0 opacity-0"
                )}
                aria-labelledby={`accordion-header-${name}`}
              >
                <div
                  className={clsx(
                    "border border-gray-200 p-5",
                    !isLast && "border-b-0",
                    isLast && "rounded-b-md"
                  )}
                >
                  {options.map((option) => {
                    const isSelected = selected.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        aria-pressed={isSelected}
                        aria-label={`Filter ${option} ${isSelected ? "is selected" : "is not selected"}`}
                        onClick={() => toggleFilter(name, option)}
                        className={clsx(
                          "rounded-full border px-3 py-1 text-sm transition-colors",
                          isSelected
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-300 bg-white text-gray-600 hover:bg-blue-100"
                        )}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
