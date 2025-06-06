import { Character, Episode, Location, ResourceType } from "@/utils/types";
import CharacterCard from "../Card/CharacterCard";
import EpisodeCard from "../Card/EpisodeCard";
import LocationCard from "../Card/LocationCard";
import React from "react";

type Props = {
  resourceType: ResourceType;
  items: (Character | Episode | Location)[];
};

export default function CardGrid({ resourceType, items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {items.map((item) => {
        let card: React.ReactNode;

        switch (resourceType) {
          case "character":
            card = <CharacterCard info={item as Character} />;
            break;
          case "episode":
            card = <EpisodeCard info={item as Episode} />;
            break;
          case "location":
            card = <LocationCard info={item as Location} />;
            break;
          default:
            return null;
        }

        return <React.Fragment key={item.id}>{card}</React.Fragment>;
      })}
    </div>
  );
}
