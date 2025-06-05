import { FilterDefinition } from "@/utils/types";

export const allFilterCategories: FilterDefinition[] = [
  {
    resource: "character",
    paramName: "status",
    label: "Status",
    options: ["Alive", "Dead", "Unknown"],
  },
  {
    resource: "character",
    paramName: "species",
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
    resource: "character",
    paramName: "gender",
    label: "Gender",
    options: ["male", "female", "genderless", "unknown"],
  },
  {
    resource: "location",
    paramName: "type",
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
    resource: "location",
    paramName: "dimension",
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
    resource: "episode",
    paramName: "season",
    label: "Season",
    options: ["S01", "S02", "S03", "S04", "S05"],
  },
];
