export type Character = {
  uid: string;
  name: string;
  url: string;
};

type CardProps = {
  character: Character;
};

export default function Card({ character }: CardProps) {
  const { uid, name, url } = character;
  return (
    <li className="card text-center">
      <h5>{name.charAt(0)}</h5>
      <p>{name}</p>
    </li>
  );
}
