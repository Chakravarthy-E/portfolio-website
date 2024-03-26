import { testimonials } from "@/@types/user";
import Image from "next/image";

export default function TestimonialCard({
  image,
  name,
  review,
  position,
  enabled,
}: testimonials) {
  return (
    <>
      {enabled && (
        <div className="">
          <Image
            width={300}
            height={200}
            src={image.url}
            alt={name}
            className="w-52 h-52 object-contain rounded-full border"
            loading="lazy"
          />
          <div className="space-y-3">
            <h1 className="text-white text-xl">{name}</h1>
            <h1 className="text-gray-500">{review}</h1>
            <h1 className="text-gray-300">{position}</h1>
          </div>
        </div>
      )}
    </>
  );
}
