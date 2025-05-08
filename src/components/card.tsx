import Link from "next/link";

export type Character = {
  uid: string;
  name: string;
  url: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
};

type CardProps = {
  character: Character;
};

export default function Card({ character }: CardProps) {
  const { uid, name } = character;
  return (
    <Link
      href={`/characters/${uid}-${name}`}
      className="card text-center p-20 flex flex-col items-center justify-center gap-y-10"
    >
      <h5 className="text-5xl font-bold">{name.charAt(0)}</h5>
      <p className="text-2xl">{name}</p>
    </Link>
  );
}
