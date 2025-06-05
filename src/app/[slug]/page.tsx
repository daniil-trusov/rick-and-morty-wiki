import { notFound } from "next/navigation";
import { Character } from "@/utils/types";
//import { getCharacters, getLocations, getEpisodes } from "@/services/api";
import { getPageWithFilters } from "@/utils/pageUtils";
import { parseSearchParams } from "@/utils/functions";

import ControlsPanel from "@/components/ControlsPanel/ControlsPanel";
import Card from "@/components/Card/Card";

const characters: Character[] = [
  {
    id: 392,
    name: "Bearded Morty",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/392.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/51",
    ],
    url: "https://rickandmortyapi.com/api/character/392",
    created: "2018-01-14T14:48:05.977Z",
  },
  {
    id: 761,
    name: "Turkey President Curtis",
    status: "Alive",
    species: "Animal",
    type: "Turkey",
    gender: "Male",
    origin: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    location: {
      name: "Earth (Replacement Dimension)",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/761.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/47"],
    url: "https://rickandmortyapi.com/api/character/761",
    created: "2021-10-17T15:03:29.593Z",
  },
];

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ResourcePage({ params, searchParams }: Props) {
  const slug = params.slug;

  const { page, filters } = getPageWithFilters(slug);

  if (!page) {
    return notFound();
  }

  const { search, selectedFilters } = parseSearchParams(searchParams);

  return (
    <>
      <h1 className="mb-6 text-center text-2xl font-bold">{page.title}</h1>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <ControlsPanel
              filters={filters}
              initialSearch={search}
              initialFilters={selectedFilters}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
