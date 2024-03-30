import { social_handles } from "@/@types/user";
import Image from "next/image";

export default function SocialCard({
  platform,
  url,
  image,
  enabled,
}: social_handles) {
  return (
    <>
      {enabled && (
        <a
          href={url}
          className="flex items-center  hover:text-blue-600 w-fit px-2 py-2 space-x-2 text-sm md:text-base"
        >
          <Image
            src={image.url}
            alt={platform}
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
            loading="lazy"
            width={14}
            height={14}
          />
          <p className="text-xs">{platform}</p>
        </a>
      )}
    </>
  );
}
