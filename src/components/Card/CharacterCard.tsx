import { Character } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import InfoBlock from "./InfoBlock";

function getStatusColor(status: string) {
  switch (status) {
    case "Alive":
      return "bg-green-500";
    case "Dead":
      return "bg-red-500";
    case "Unknown":
      return "bg-gray-400";
    case "unknown":
      return "bg-gray-400";
    default:
      return "bg-yellow-400";
  }
}

type Props = {
  info: Character;
};

export default function CharacterCard({ info: character }: Props) {
  return (
    <article
      className="flex h-auto w-[220px] flex-col overflow-hidden rounded-lg border-2 border-blue-700 bg-white shadow-md md:h-[220px] md:w-[600px] md:flex-row"
      aria-label={`Card for ${character.name}`}
    >
      <Link
        href={character.url}
        rel="noopener noreferrer"
        aria-label={`View details for ${character.name}`}
        className="relative h-[200px] w-full shrink-0 md:h-full md:w-[220px]"
      >
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 220px, 100vw"
        />
      </Link>

      <div className="flex w-full flex-col gap-4 p-4 md:w-2/3">
        <div className="space-y-2">
          <Link
            href={character.url}
            rel="noopener noreferrer"
            aria-label={`More about ${character.name}`}
          >
            <h2 className="text-xl font-bold">{character.name}</h2>
          </Link>

          <span className="flex items-center text-sm text-gray-700">
            <span
              className={`mr-2 inline-block h-3 w-3 rounded-full ${getStatusColor(character.status)}`}
              aria-hidden="true"
            ></span>

            <span className="">
              {character.status} - {character.species}
            </span>
          </span>
        </div>

        <InfoBlock
          label="Last known location"
          body={
            <Link
              href={character.location.url}
              rel="noopener noreferrer"
              aria-label={`More about ${character.name}'s last location`}
              className="text-lg"
            >
              {character.location.name}
            </Link>
          }
        />

        <InfoBlock
          label="Seen in"
          body={`${character.episode.length} episode${character.episode.length !== 1 ? "s" : ""}`}
        />
      </div>
    </article>
  );
}
