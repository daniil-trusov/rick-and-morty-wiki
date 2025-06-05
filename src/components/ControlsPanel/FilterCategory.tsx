import clsx from "clsx";

import { SectionState } from "./FilterPanel";
import FilterButton from "./FilterButton";

type Props = {
  section: SectionState;
  label: string;
  options: string[];
  selectedOption: string;
  onFilterToggle: (option: string) => void;
};

export default function FilterCategory({
  section,
  label,
  options,
  selectedOption,
  onFilterToggle,
}: Props) {
  const { isFirst, name } = section;

  return (
    <>
      <div className={clsx("p-2 font-bold", isFirst && "rounded-t-md")}>
        <h2 id={`filter-header-${name}`}>{label}</h2>
      </div>

      <div id={`filter-body-${name}`} aria-labelledby={`filter-header-${name}`}>
        <div className={clsx("flex flex-wrap gap-2 overflow-visible p-3")}>
          {options.map((option) => {
            return (
              <FilterButton
                key={option}
                option={option}
                isSelected={selectedOption === option}
                onToggle={() => onFilterToggle(option)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
