"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FilterCategory, ActiveFilters } from "@/utils/types";

import FilterPanel from "./FilterPanel";
import Search from "./Search";

type Props = {
  filters: FilterCategory[];
  initialSearch: string;
  initialFilters: ActiveFilters;
};

export default function ControlsPanel({
  filters,
  initialSearch,
  initialFilters,
}: Props) {
  const [search, setSearch] = useState(initialSearch);
  const [selectedFilters, setSelectedFilters] =
    useState<ActiveFilters>(initialFilters);

  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search.trim());
    }

    for (const [key, value] of Object.entries(selectedFilters)) {
      if (value) {
        params.set(key, value);
      }
    }

    const query = params.toString();
    router.replace(`?${query}`, { scroll: false });
  }, [search, selectedFilters, router]);

  return (
    <div className="space-y-6">
      <div role="search" className="mb-4 border-b border-gray-200 pb-4">
        <Search initialSearch={search} onSearch={setSearch} />
      </div>

      <FilterPanel
        filters={filters}
        initialFilters={selectedFilters}
        onFiltersChange={setSelectedFilters}
      />
    </div>
  );
}
