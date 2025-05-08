import React from "react";

type SortOption = "none" | "asc" | "desc";

type FilterProps = {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
};

export default function Filter({ sortOption, onSortChange }: FilterProps) {
  return (
    <div className="w-full mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <h2 className="text-2xl font-bold">Characters</h2>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="font-medium">
          Sort by name:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="p-2 rounded-md bg-[var(--secondary)] border-2 border-[var(--foreground)] text-[var(--foreground)]"
        >
          <option value="none">Default</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  );
}
