import { FilterDefinition, Page } from "@/utils/types";
import { getFiltersForResource } from "@/utils/filterUtils";
import { usePage } from "./usePage";

export const usePageWithFilters = (): {
  page: Page;
  filters: FilterDefinition[];
} => {
  const page: Page = usePage();
  const filters = getFiltersForResource(page.resource);

  return { page, filters };
};
