import { ActiveFilters } from "./types";

export function parseSearchParams(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  let search = "";
  const selectedFilters: ActiveFilters = {};

  for (const key in searchParams) {
    const value = searchParams[key];

    if (!value) {
      continue;
    }

    const normalizedKey = key.toLowerCase();

    if (normalizedKey === "search") {
      search = Array.isArray(value) ? value[0] : value;
    } else {
      const normalizedValue = (
        Array.isArray(value) ? value[0] : value
      ).toLowerCase();
      selectedFilters[normalizedKey] = normalizedValue;
    }
  }

  return { search, selectedFilters };
}

export function normalizeSearchParams(params: {
  [key: string]: string | string[] | undefined;
}): Record<string, string> {
  if (!params || params === undefined) {
    return {};
  }

  const result: Record<string, string> = {};

  for (const key in params) {
    const value = params[key];

    if (typeof value === "string") {
      result[key] = value;
    } else if (Array.isArray(value)) {
      result[key] = value[0];
    }
  }
  return result;
}
