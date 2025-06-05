import { FilterRecord } from "./types";

export function getFiltersFromSearchParams(params: {
  [key: string]: string | string[] | undefined;
}): FilterRecord {
  const filters: FilterRecord = {};

  for (const key in params) {
    if (key === "search") {
      continue;
    }
    const value = params[key];
    if (typeof value === "string") {
      filters[key] = value;
    } else if (Array.isArray(value) && value.length > 0) {
      filters[key] = value[0];
    }
  }
  return filters;
}
