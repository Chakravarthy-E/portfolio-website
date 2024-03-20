import React from "react";

interface Props {
  name: string;
  charge: string;
  desc: string;
  image: {
    url: string;
  };
}

export default function ServiceCard({ name, charge, desc, image }: Props) {
  return (
    <div className="w-full h-auto border-style px-2 py-3 opacity-70 hover:opacity-100 cursor-pointer p-5">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold text-center">{name}</h1>
        <p className="text-center font-semibold">{desc}</p>
        <p className="text-center text-2xl font-semibold">{charge}</p>
      </div>
    </div>
  );
}
