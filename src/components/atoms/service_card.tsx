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
        <div className="w-full max-w-sm mx-auto  border border-gray-800 shadow-lg rounded-xl overflow-hidden opacity-70 hover:opacity-100 cursor-pointer">
          <div className="relative h-40 overflow-hidden">
            <Image
              src={image.url}
              alt={name}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-t-xl"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <h1 className="text-xl font-semibold text-white mb-2">{name}</h1>
            <p className="text-gray-300">{desc}</p>
            <div className="flex justify-between mt-4">
              <p className="text-gray-400">{charge}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                Learn More
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
