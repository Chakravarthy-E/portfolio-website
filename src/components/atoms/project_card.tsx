import { projects } from "@/@types/user";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  liveurl,
  githuburl,
  techStack,
  title,
  description,
  image,
  enabled,
  sequence,
}: projects) {
  console.log(enabled);
  return (
    <>
      {enabled && (
        <div className="border-style p-2">
          <Image
            width={400}
            height={200}
            src={image.url}
            alt={title}
            className="rounded-lg w-full"
          />
          <div className="mt-2 flex items-center flex-col">
            <ul className="flex space-x-4  text-xs border-gray-800 w-full py-1 my-1 items-center justify-center text-gray-600">
              {techStack.map((tech: any) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <h1 className="text-center text-xl uppercase font-bold text-white">
              {title}
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
