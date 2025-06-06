import rawPageConfig from "@/app/data/pageSchema.json";
import rawFilterCategories from "@/app/data/filterSchema.json";
import type {
  PageInfo,
  FilterCategory,
  ResourceType,
  FilterOption,
} from "@/utils/types";

const pageConfig = rawPageConfig as PageInfo[];
const filterCategories = rawFilterCategories as FilterCategory[];

export function getPageBySlug(slug: string): PageInfo | undefined {
  return pageConfig.find((page) => page.slug === `/${slug}`);
}

export function getFiltersByResource(
  resourceType: ResourceType
): FilterCategory[] {
  return filterCategories.filter(
    (filter) => filter.resourceType === resourceType
  );
}

export function getPageWithFiltersBySlug(
  slug: string
): { page: PageInfo; filters: FilterCategory[] } | undefined {
  const page = getPageBySlug(slug);

  if (!page) return undefined;

  const filters = getFiltersByResource(page.resourceType);

  return { page, filters };
}

export function getFilterLabel([categoryKey, valueKey]: [string, string]): {
  categoryLabel: string;
  optionLabel: string;
} {
  const category = filterCategories.find(({ key }) => key === categoryKey);
  const option = category?.options.find(({ key }) => key === valueKey);

  return {
    categoryLabel: category?.label || categoryKey,
    optionLabel: option?.label || valueKey,
  };
}
