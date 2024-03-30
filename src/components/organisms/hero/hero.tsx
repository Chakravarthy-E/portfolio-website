import { useGlobalContext } from "@/contexts/globalContext";
import ScrollLink from "@/components/atoms/shared/scroll_link";
import { motion } from "framer-motion";

const Hero = () => {
  const { profile } = useGlobalContext();

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center  px-4 md:px-8 lg:px-20 antialiased"
    >
      <div className="max-w-4xl w-full ">
        <div className="flex flex-col md:flex-row  items-center lg:space-x-20 justify-center space-y-8 md:space-y-0 md:space-x-8 text-center md:text-left">
          <div className="flex-shrink-0">
            <img
              src={profile.user.about.avatar?.url}
              alt="Profile Avatar"
              className="w-56 h-56 md:w-64 border p-2 border-gray-800 bg-transparent md:h-64 rounded-full mx-auto md:mx-0 object-cover shadow shadow-white "
            />
          </div>
          <div className="flex flex-col items-center md:items-start ">
            <p className="text-lg md:text-xl text-white bg-transparent">
              Hello{" "}
              <span className="text-blue-500 font-bold text-xl md:text-2xl ml-1">
                I&apos;m
              </span>
            </p>
            <h1 className="text-5xl md:text-9xl font-bold tracking-wide text-blue-800 bg-transparent first-letter:uppercase">
              {profile?.user?.about.name}
            </h1>
            <p className="text-2xl md:text-4xl font-semibold tracking-wide text-gray-300">
              {profile?.user?.about.title}
            </p>
            <motion.button
              whileTap={{ scale: 0.85 }}
              className="text-white border-style px-4 py-2 rounded flex items-center mt-5"
            >
              <ScrollLink href="/contact">Contact</ScrollLink>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
