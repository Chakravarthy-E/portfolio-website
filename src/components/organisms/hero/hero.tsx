import { useGlobalContext } from "@/contexts/globalContext";
import SocialHandles from "../social_handles/social_handles";
import ScrollLink from "@/components/atoms/shared/scroll_link";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Hero() {
  const { profile } = useGlobalContext();
  return (
    <div
      id="home"
      className=" w-full min-h-screen flex flex-col items-center justify-center bg-neutral-950 px-4 md:px-8 lg:px-20 antialiased relative"
    >
      <div className="flex flex-col items-center space-y-3 text-center md:text-left relative z-10 bg-transparent">
        <p className="text-lg md:text-xl text-white">
          Hello{" "}
          <span className="text-blue-800 font-bold text-xl md:text-2xl ml-1">
            I'm
          </span>
        </p>
        <h1 className="text-5xl md:text-9xl font-bold tracking-wide text-blue-800 bg-transparent first-letter:uppercase ">
          {profile?.user?.about.name}
        </h1>
        <p className="text-2xl md:text-4xl font-semibold tracking-wide text-gray-300">
          {profile?.user?.about.title}
        </p>
      </div>
      <div></div>
      <motion.button
        whileTap={{ scale: 0.85 }}
        className="text-white border-style px-4 py-2 rounded flex items-center relative z-10 mt-5"
      >
        <ScrollLink href="/contact">Contact</ScrollLink> <MoveRight />
      </motion.button>
      <BackgroundBeams />
    </div>
  );
}
