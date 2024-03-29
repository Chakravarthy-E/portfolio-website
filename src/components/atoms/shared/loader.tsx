import React from "react";

export default function Loader() {
  return (
    <div className="relative w-14 h-14">
      <div className="absolute w-full h-full rounded-full animate-spin border-4 border-transparent border-t-blue-400"></div>
    </div>
  );
}
