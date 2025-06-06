import { Episode } from "@/utils/types";
import Link from "next/link";
import InfoBlock from "./InfoBlock";

type Props = {
  info: Episode;
};

export default function EpisodeCard({ info: episode }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg border-2 border-blue-700 bg-white shadow-md"
      aria-label={`Card for ${episode.name}`}
    >
      <div className="flex flex-col gap-4 p-4">
        <div className="space-y-2">
          <Link
            href={episode.url}
            rel="noopener noreferrer"
            aria-label={`More about ${episode.name}`}
          >
            <h2 className="line-clamp-2 text-xl font-bold">{episode.name}</h2>
          </Link>

          <span className="flex items-center text-sm text-gray-700">
            {episode.episode} - {episode.air_date}
          </span>

          <InfoBlock label="Characters" body={episode.characters.length} />
        </div>
      </div>
    </article>
  );
}
