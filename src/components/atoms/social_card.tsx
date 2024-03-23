import Image from "next/image";

interface SocialCardProps {
  platform: string;
  url: string;
  image: {
    url: string;
  };
  enabled: boolean;
}

export default function SocialCard({
  platform,
  url,
  image,
  enabled,
}: SocialCardProps) {
  return (
    <>
      {enabled && (
        <a
          href={url}
          className="flex items-center border-style w-fit px-2 py-2 space-x-2"
        >
          <Image
            src={image.url}
            alt={platform}
            className="w-5 h-5 object-contain"
          />
          <p className="text-xs">{platform}</p>
        </a>
      )}
    </>
  );
}
