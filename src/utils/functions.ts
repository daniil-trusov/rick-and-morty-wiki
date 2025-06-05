import { FilterRecord } from "./types";

export function parseSearchParams(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  let search = "";
  const selectedFilters: FilterRecord = {};

  for (const key in searchParams) {
    const value = searchParams[key];

    if (!value) continue;

    if (key === "search") {
      search = Array.isArray(value) ? value[0] : value;
    } else {
      selectedFilters[key] = Array.isArray(value) ? value[0] : value;
    }
  }

  return { search, selectedFilters };
}
