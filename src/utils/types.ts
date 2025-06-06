export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "Unknown";
  species: string;
  type: string;
  gender: "Male" | "Female" | "Genderless" | "Unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type ResourceType = "character" | "location" | "episode";

export type PageInfo = {
  slug: string;
  title: string;
  resourceType: ResourceType;
};

export type FilterOption = {
  key: string;
  label: string;
};

export type FilterCategory = {
  resourceType: ResourceType;
  key: string;
  label: string;
  options: FilterOption[];
};

export type ActiveFilters = Record<string, string>;

export type FilterConfig = {
  resourceType: ResourceType;
  categories: FilterCategory[];
};
