import { Page, FilterDefinition } from "@/utils/types";
import { pageConfig } from "@/configs/pageConfig";
import { getFiltersForResource } from "@/utils/filterUtils";

type PageWithFilters = {
  page: Page;
  filters: FilterDefinition[];
};

const pageMap = pageConfig.reduce<Record<string, Page>>((acc, page) => {
  const key = page.path.replace(/^\//, "");
  acc[key] = page;
  return acc;
}, {});

export const getPageBySlug = (slug: string): Page => {
  const key = slug.replace(/^\//, "") || pageConfig[0].path;
  return pageMap[key];
};

export function getPageWithFilters(slug: string): PageWithFilters {
  const page = getPageBySlug(slug);

  const filters = getFiltersForResource(page.resource);
  return { page, filters };
}
