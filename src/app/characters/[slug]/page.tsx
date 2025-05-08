"use client";
import { use } from "react";
import { useApiCharacter } from "@/hooks/useApiCharacter";
import { Character } from "@/components/card";
import Loading from "@/components/loading";

export default function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const unwrappedParams = use(params);
  const characterId = unwrappedParams.slug.split("-")[0];
  const { character, isLoading, isError } = useApiCharacter(characterId);

  const characterData: Character = character?.result.properties;

  if (isLoading) return <Loading />;
  if (isError) return <div>Error loading character data</div>;

  return (
    <div className="grid place-items-center min-h-screen p-4 sm:p-8">
      <div className="bg-primary rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-2xl">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4 sm:mb-8 text-gray-800">
          {characterData.name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-gray-50 p-3 sm:p-4 rounded">
            <p className="text-gray-600 font-semibold">Height</p>
            <p className="text-gray-800">{characterData.height} cm</p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded">
            <p className="text-gray-600 font-semibold">Mass</p>
            <p className="text-gray-800">{characterData.mass} kg</p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded">
            <p className="text-gray-600 font-semibold">Hair Color</p>
            <p className="text-gray-800 capitalize">
              {characterData.hair_color}
            </p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded">
            <p className="text-gray-600 font-semibold">Skin Color</p>
            <p className="text-gray-800 capitalize">
              {characterData.skin_color}
            </p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded">
            <p className="text-gray-600 font-semibold">Eye Color</p>
            <p className="text-gray-800 capitalize">
              {characterData.eye_color}
            </p>
          </div>
          <div className="bg-gray-50 p-3 sm:p-4 rounded">
            <p className="text-gray-600 font-semibold">Birth Year</p>
            <p className="text-gray-800">{characterData.birth_year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
