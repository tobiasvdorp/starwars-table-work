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
  const { uid, name, url } = character;
  return (
    <Link href={`/characters/${uid}-${name}`} className="card text-center">
      <h5>{name.charAt(0)}</h5>
      <p>{name}</p>
    </Link>
  );
}
