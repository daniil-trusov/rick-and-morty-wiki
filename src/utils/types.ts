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

export type ResourceType = "character" | "location" | "episode";

export type Page = {
  path: string;
  title: string;
  resource: ResourceType;
};

export type FilterDefinition = {
  resource: ResourceType;
  paramName: string;
  label: string;
  options: string[];
};

export type SectionState = {
  isFirst: boolean;
  isLast: boolean;
  name: string;
};

export type FilterRecord = Record<string, string>;
