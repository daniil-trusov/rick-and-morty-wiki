import { Character } from "@/utils/Type";
import Image from "next/image";
import Link from "next/link";

function getStatusColor(status: string) {
  switch (status) {
    case "Alive":
      return "bg-green-500";
    case "Dead":
      return "bg-red-500";
    case "Unknown":
      return "bg-gray-400";
  }
}

type Props = {
  character: Character;
};

export default function Card({ character }: Props) {
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
          priority
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

        <div className="space-y-1">
          <span className="text-sm text-gray-500">Last known location:</span>
          <br />
          <Link
            href={character.location.url}
            rel="noopener noreferrer"
            aria-label={`More about ${character.name}'s last location`}
            className="text-lg"
          >
            {character.location.name}
          </Link>
        </div>

        <div className="space-y-1">
          <span className="text-sm text-gray-500">Seen in:</span>
          <br />
          <span>
            {character.episode.length} episode
            {character.episode.length !== 1 && "s"}
          </span>
        </div>
      </div>
    </article>
  );
}
