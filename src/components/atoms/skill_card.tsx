interface Props {
  enabled: boolean;
  name: string;
  sequence: string;
  percentage: number;
  image: {
    url: string;
  };
}

export default function SkillCard({
  enabled,
  name,
  sequence,
  percentage,
  image,
}: Props) {
  return (
    <div className="border-style flex p-5 items-center space-x-3">
      <img src={image.url} alt={name} className="w-20 h-20 object-contain" />
      <div>
        <h1>{name}</h1>
        <h1>Sequence : {sequence}</h1>
        <progress value={percentage} max={100} />
      </div>
    </div>
  );
}
