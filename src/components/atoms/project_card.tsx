import { projects } from "@/@types/user";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export default function ProjectCard({
  liveurl,
  githuburl,
  techStack,
  title,
  description,
  image,
  enabled,
}: projects) {
  console.log(enabled);
  return (
    <>
      {enabled && (
        <Dialog>
          <DialogTrigger asChild>
            <div className="border-style p-2 cursor-pointer opacity-70 hover:opacity-100">
              <Image
                width={400}
                height={200}
                src={image.url}
                alt={title}
                className="rounded-lg w-full"
                loading="lazy"
              />
              <div className="mt-2 flex items-center flex-col">
                <h1 className="text-center text-xl uppercase font-bold text-white">
                  {title}
                </h1>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-black border-gray-800">
            <div className="p-2 bg-black">
              <Image
                width={400}
                height={200}
                src={image.url}
                alt={title}
                className="rounded-lg w-full"
                loading="lazy"
              />
              <div className="mt-2 flex items-center flex-col space-y-2">
                <h1 className="text-center text-xl uppercase font-bold text-white">
                  {title}
                </h1>
                <ul className="flex space-x-4  text-xs border-gray-800 w-full py-1 my-1 items-center justify-center text-gray-600">
                  {techStack.map((tech: any) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <p className="text-gray-400">{description}</p>
              </div>
              <div className="flex justify-between items-center text-white py-2">
                <a href={githuburl} className="bg-transparent">
                  <button className="px-5 py-1 bg-blue-600 rounded">
                    Github
                  </button>
                </a>
                <a href={liveurl} className="bg-transparent">
                  <button className="px-5 py-1 bg-blue-600 rounded">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
