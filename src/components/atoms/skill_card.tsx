import Image from "next/image";

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
    <>
      {enabled && (
        <div className="border-style flex flex-col md:flex-row p-5 items-center md:space-x-3">
          <Image
            width={150}
            height={50}
            src={image.url}
            alt={name}
            className="w-full h-20 md:w-24 md:h-24 object-contain"
          />
          <div className="md:space-y-3">
            <h1 className="text-white text-lg md:text-xl lg:text-2xl">
              {name}
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
