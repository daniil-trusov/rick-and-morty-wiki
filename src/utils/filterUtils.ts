import { ResourceType, FilterDefinition } from "@/utils/types";
import { allFilterCategories } from "@/configs/filterConfig";

const filtersMap = (
  filters: FilterDefinition[]
): Record<ResourceType, FilterDefinition[]> => {
  return filters.reduce<Record<ResourceType, FilterDefinition[]>>(
    (acc, filter) => {
      if (!acc[filter.resource]) {
        acc[filter.resource] = [];
      }
      acc[filter.resource].push(filter);
      return acc;
    },
    {
      character: [],
      location: [],
      episode: [],
    }
  );
};

const filtersByResource = filtersMap(allFilterCategories);

export const getFiltersForResource = (
  resource: ResourceType
): FilterDefinition[] => {
  return filtersByResource[resource] || [];
};
