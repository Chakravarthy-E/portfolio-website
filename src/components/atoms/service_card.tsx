import { services } from "@/@types/user";
import Image from "next/image";
import React from "react";

export default function ServiceCard({
  name,
  charge,
  desc,
  image,
  enabled,
}: services) {
  return (
    <>
      {enabled && (
        <div className="w-full h-auto border-style flex items-center justify-center flex-col opacity-70 hover:opacity-100 cursor-pointer p-3">
          <div className="space-y-4">
            <Image
              src={image.url}
              alt={name}
              width={400}
              height={200}
              className="w-full rounded-xl"
              loading="lazy"
            />
            <h1 className="text-xl font-bold text-center text-white">{name}</h1>
          </div>
        </div>
      )}
    </>
  );
}
