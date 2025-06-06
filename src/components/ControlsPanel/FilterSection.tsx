import FilterButton from "./FilterButton";
import { FilterCategory } from "@/utils/types";

type Props = {
  filter: FilterCategory;
  selectedOption: string;
  onFilterToggle: (option: string) => void;
};

export default function FilterSection({
  filter,
  selectedOption,
  onFilterToggle,
}: Props) {
  const { label, key: name, options } = filter;
  return (
    <>
      <div className="p-2 font-bold">
        <h2 id={`filter-header-${name}`}>{label}</h2>
      </div>

      <div id={`filter-body-${name}`} aria-labelledby={`filter-header-${name}`}>
        <div className="flex flex-wrap gap-2 overflow-visible p-3">
          {options.map(({ key, label }) => {
            return (
              <FilterButton
                key={key}
                option={label}
                isSelected={selectedOption === key}
                onToggle={() => onFilterToggle(key)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
