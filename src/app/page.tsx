"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Character } from "@/utils/Type";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
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

export default function Home() {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const pageTitle = pathname.length > 1 ? pathname.slice(1) : "Characters";
  const pageCategory = pageTitle.toLowerCase();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  /*useEffect(() => {
    const fetchLocations = async () => {
      const uniqueSpecies = new Set();

      for (let i = 0; i < 42; i++) {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${i}`
        );
        const data = await response.json();
        const species: string[] = data.results.map(
          (char: Character) => char.species
        );
        species.forEach((s) => uniqueSpecies.add(s));
      }
      console.log(uniqueSpecies);
    };

    fetchLocations();
  }, []);*/

  return (
    <>
      <h1 className="mb-6 text-center text-2xl font-bold">{pageTitle}</h1>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="w-full lg:w-1/3">
            <form onSubmit={handleSubmit}>
              <Search search={search} onSearch={setSearch} />

              <Filter category={pageCategory} />
            </form>
          </div>

          <div className="grid-cols-1 lg:grid-cols-2">
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
