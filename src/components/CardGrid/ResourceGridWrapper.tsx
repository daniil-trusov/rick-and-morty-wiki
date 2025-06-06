import { fetchEntity } from "@/utils/fetchData";
import { normalizeSearchParams } from "@/utils/functions";
import CardGrid from "@/components/CardGrid/CardGrid";

import type { Character, Episode, Location } from "@/utils/types";

type EntityMap = {
  character: Character;
  episode: Episode;
  location: Location;
};

type Props = {
  resourceType: keyof EntityMap;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ResourceGridWrapper({
  resourceType,
  searchParams,
}: Props) {
  const normalized = normalizeSearchParams(searchParams);

  const { data, error, notFound } = await fetchEntity<
    EntityMap[typeof resourceType]
  >(resourceType, normalized);

  if (notFound) {
    return (
      <p className="text-muted-foreground text-center text-xl">
        No items found.
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-xl text-red-500">
        Unexpected error occurred: {error.message}
      </p>
    );
  }

  return <CardGrid resourceType={resourceType} items={data?.results ?? []} />;
}
