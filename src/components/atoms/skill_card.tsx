import { skills } from "@/@types/user";
import Image from "next/image";

export default function SkillCard({
  enabled,
  name,
  sequence,
  percentage,
  image,
}: skills) {
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
            loading="lazy"
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
