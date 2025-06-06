import React, { useEffect, useState } from "react";
import { FilterCategory, ActiveFilters } from "@/utils/types";

import FilterSection from "./FilterSection";
import { getFilterLabel } from "@/app/lib/config";

type Props = {
  filters: FilterCategory[];
  initialFilters: ActiveFilters;
  onFiltersChange: (filters: ActiveFilters) => void;
};

export default function FilterPanel({
  filters,
  initialFilters,
  onFiltersChange,
}: Props) {
  const [selectedFilters, setSelectedFilters] = useState<ActiveFilters>(
    initialFilters || {}
  );
  const [ariaLiveMessage, setAriaLiveMessage] = useState(
    "Filters selected: none"
  );

  const updateSummaryText = (newState: ActiveFilters) => {
    const summaryText = Object.entries(newState)
      .map(([key, value]) => `${key}: ${value}`)
      .join("; ");

    setAriaLiveMessage(`Filters selected: ${summaryText || "none"}`);
  };

  const toggleFilter = (filterName: string, filterOption: string) => {
    setSelectedFilters((prev) => {
      const isSelected = (prev[filterName] || []) === filterOption;
      const newState = { ...prev };

      if (isSelected) {
        delete newState[filterName];
      } else {
        newState[filterName] = filterOption;
      }

      return newState;
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
  };

  useEffect(() => {
    onFiltersChange(selectedFilters);
    updateSummaryText(selectedFilters);
  }, [onFiltersChange, selectedFilters]);

  return (
    <section aria-label="Filters" role="region" className="mt-4">
      <div aria-live="polite" role="status" className="sr-only">
        {ariaLiveMessage}
      </div>

      {Object.entries(selectedFilters).length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {Object.entries(selectedFilters).map((selectedFilter) => {
            const { categoryLabel, optionLabel } =
              getFilterLabel(selectedFilter);
            const [categoryKey, valueKey] = selectedFilter;

            return (
              <button
                key={categoryKey}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 hover:bg-blue-200"
                onClick={() => toggleFilter(categoryKey, valueKey)}
              >
                {categoryLabel}: {optionLabel}
              </button>
            );
          })}
          <button
            onClick={clearAllFilters}
            className="ml-2 text-sm text-red-500 hover:underline"
          >
            Clear all
          </button>
        </div>
      )}

      <div id="filterPanel">
        {filters.map((filterCategory) => {
          const name = filterCategory.key;
          const selectedOption = selectedFilters[name] || "";

          return (
            <React.Fragment key={name}>
              <FilterSection
                filter={filterCategory}
                selectedOption={selectedOption}
                onFilterToggle={(option) => toggleFilter(name, option)}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
