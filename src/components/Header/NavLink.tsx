import clsx from "clsx";
import Link from "next/link";
import { HOVER_ANIMATION_LENGTH } from "@/utils/constants";

type Props = {
  path: string;
  title: string;
  isSelected: boolean;
};

export default function NavLink({ path, title, isSelected }: Props) {
  return (
    <Link
      href={path}
      className={clsx(
        "transition-colors",
        `duration-${HOVER_ANIMATION_LENGTH}`,
        isSelected
          ? "pointer-events-none font-bold text-blue-600"
          : "text-gray-500 hover:text-gray-700"
      )}
    >
      {title}
    </Link>
  );
}
