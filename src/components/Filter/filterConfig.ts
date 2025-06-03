export type FilterOption = {
  category: "characters" | "locations" | "episodes";
  name: string;
  label: string;
  options: string[];
};

const filterConfig: FilterOption[] = [
  {
    category: "characters",
    name: "status",
    label: "Status",
    options: ["Alive", "Dead", "Unknown"],
  },
  {
    category: "characters",
    name: "species",
    label: "Species",
    options: [
      "Human",
      "Alien",
      "Humanoid",
      "unknown",
      "Poopybutthole",
      "Mythological Creature",
      "Animal",
      "Robot",
      "Cronenberg",
      "Disease",
    ],
  },
  {
    category: "characters",
    name: "gender",
    label: "Gender",
    options: ["male", "female", "genderless", "unknown"],
  },
  {
    category: "locations",
    name: "type",
    label: "Type",
    options: [
      "Planet",
      "Cluster",
      "Space station",
      "Microverse",
      "TV",
      "Resort",
      "Fantasy town",
      "Dream",
    ],
  },
  {
    category: "locations",
    name: "dimension",
    label: "Dimension",
    options: [
      "Dimension C-137",
      "unknown",
      "Post-Apocalyptic Dimension",
      "Replacement Dimension",
      "Cronenberg Dimension",
      "Fantasy Dimension",
      "Dimension 5-126",
    ],
  },
  {
    category: "episodes",
    name: "season",
    label: "Season",
    options: ["S01", "S02", "S03", "S04", "S05"],
  },
];

const mapFiltersByCategory = (filters: FilterOption[]) =>
  filters.reduce<Record<FilterOption["category"], FilterOption[]>>(
    (acc, filter) => {
      if (!acc[filter.category]) acc[filter.category] = [];
      acc[filter.category].push(filter);
      return acc;
    },
    {
      characters: [],
      locations: [],
      episodes: [],
    }
  );

export const filters = mapFiltersByCategory(filterConfig);
