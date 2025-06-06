import { Location } from "@/utils/types";
import Link from "next/link";
import InfoBlock from "./InfoBlock";

type Props = {
  info: Location;
};

export default function LocationCard({ info: location }: Props) {
  const infoList = [
    {
      label: "Type",
      body: location.type,
    },
    {
      label: "Dimension",
      body: location.dimension,
    },
    {
      label: "Residents",
      body: location.residents.length,
    },
  ];

  return (
    <article
      className="flex flex-col rounded-lg border-2 border-blue-700 bg-white shadow-md"
      aria-label={`Card for ${location.name}`}
    >
      <div className="flex flex-col gap-4 p-4">
        <Link
          href={location.url}
          rel="noopener noreferrer"
          aria-label={`More about ${location.name}`}
        >
          <h2 className="text-xl font-bold">{location.name}</h2>
        </Link>

        {infoList.map(({ label, body }) => (
          <InfoBlock key={label} label={label} body={body} />
        ))}
      </div>
    </article>
  );
}
