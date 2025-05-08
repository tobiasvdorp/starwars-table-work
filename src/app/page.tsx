"use client";
import { useState } from "react";
import Card, { Character } from "@/components/card";
import { useApiCharacter } from "@/hooks/useApiCharacter";
import Loading from "@/components/loading";
import Filter from "@/components/Filter";

type SortOption = "none" | "asc" | "desc";

export default function Home() {
  const { character, isLoading, isError } = useApiCharacter();
  const [sortOption, setSortOption] = useState<SortOption>("none");

  if (isLoading) return <Loading />;

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
  };

  const getSortedCharacters = () => {
    if (!character || !character.results) return [];

    const sortedCharacters = [...character.results];

    if (sortOption === "asc") {
      return sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "desc") {
      return sortedCharacters.sort((a, b) => b.name.localeCompare(a.name));
    }

    return sortedCharacters;
  };

  const sortedCharacters = getSortedCharacters();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="font-semibold text-6xl">Star Wars Universe.</h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-7xl">
        {isError && <p>Something went wrong...</p>}
        {character && (
          <>
            <Filter sortOption={sortOption} onSortChange={handleSortChange} />
            <ul className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
              {sortedCharacters.map((c: Character) => (
                <Card key={c.uid} character={c} />
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
}
