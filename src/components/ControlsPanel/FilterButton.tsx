import clsx from "clsx";
import { capitalize } from "lodash";

type Props = {
  option: string;
  isSelected: boolean;
  onToggle: () => void;
};

export default function FilterButton({ option, isSelected, onToggle }: Props) {
  return (
    <button
      key={option}
      type="button"
      aria-pressed={isSelected}
      aria-label={`Filter ${option} ${isSelected ? "is selected" : "is not selected"}`}
      onClick={onToggle}
      className={clsx(
        "rounded-full border px-3 py-1 text-sm transition-colors",
        isSelected
          ? "border-blue-600 bg-blue-600 text-white"
          : "border-gray-300 bg-white text-gray-600 hover:bg-blue-100"
      )}
    >
      {capitalize(option)}
    </button>
  );
}
