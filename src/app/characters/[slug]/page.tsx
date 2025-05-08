"use client";
import { use } from "react";
import { useApiCharacter } from "@/hooks/useApiCharacter";
import { Character } from "@/components/card";
import Loading from "@/components/loading";

type CharacterAttributeProps = {
  title: string;
  value: string;
};

function CharacterAttribute({ title, value }: CharacterAttributeProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-black">{title}</h3>
      <p className="text-xl capitalize">{value}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="mb-4">
      <h1 className="text-5xl font-bold text-black">Star Wars</h1>
      <h2 className="text-5xl font-bold text-black">Universe.</h2>
    </div>
  );
}

function CharacterDetails({ character }: { character: Character }) {
  return (
    <div className="flex flex-col md:flex-row pt-24 flex-wrap gap-x-4 justify-between">
      <div className="md:w-fit">
        <h1 className="text-8xl font-black text-black mb-4">
          {character.name}
        </h1>
      </div>

      <div className="md:w-fit mt-12 md:mt-0">
        <div className="space-y-6">
          <CharacterAttribute title="Birth year" value={character.birth_year} />
          <CharacterAttribute title="Hair" value={character.hair_color} />
          <CharacterAttribute title="Eyes" value={character.eye_color} />
          <CharacterAttribute title="Mass" value={character.mass} />
          <CharacterAttribute title="Skin" value={character.skin_color} />
        </div>
      </div>
    </div>
  );
}

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
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <CharacterDetails character={characterData} />
      </div>
    </div>
  );
}
