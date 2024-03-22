import React from "react";

interface Props {
  name: string;
  charge: string;
  desc: string;
  image: {
    url: string;
  };
  enabled: boolean;
}

export default function ServiceCard({
  name,
  charge,
  desc,
  image,
  enabled,
}: Props) {
  return (
    <>
      {enabled && (
        <div className="w-full h-auto border-style flex items-center justify-center flex-col opacity-70 hover:opacity-100 cursor-pointer p-3">
          <div className="space-y-4">
            <img
              src={image.url}
              alt={name}
              className="w-96 h-52 object-cover"
            />
            <h1 className="text-xl font-bold text-center text-white">{name}</h1>
          </div>
        </div>
      )}
    </>
  );
}
