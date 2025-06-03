import React, { useEffect, useState } from "react";
import { filters } from "./filterConfig";
import Accordion from "../Accordion/Accordion";

type Filter = Record<string, string[]>;

type Props = {
  category: "characters" | "locations" | "episodes";
};

export default function Filter({ category }: Props) {
  const filtersProp = filters[category].map(({ label, name, options }) => ({
    label,
    name,
    options,
  }));

  const [cardsInfo, setCardsInfo] = useState();
  const [charFilters, setCharFilters] = useState<Filter>({});

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const query = buildQuery(charFilters);
        console.log(`https://rickandmortyapi.com/api/character?${query}`);
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?${query}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch characters");
        }

        const data = await res.json();

        setCardsInfo(data.results);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };

    fetchCharacters();
  }, [charFilters]);

  console.log(cardsInfo);

  const buildQuery = (filters: Filter): string => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, values]) => {
      if (values.length > 0) {
        params.set(key, values[0]);
      }
    });

    return params.toString();
  };

  return (
    <section aria-label="Filters" role="region" className="mb-4">
      <h3 className="text-lg font-semibold">Filters</h3>

      <Accordion filters={filtersProp} onFiltersChange={setCharFilters} />
    </section>
  );
}
