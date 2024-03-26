import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGlobalContext } from "@/contexts/globalContext";
import SocialHandles from "../social_handles/social_handles";
import ScrollLink from "@/components/atoms/shared/scroll_link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const { profile } = useGlobalContext();
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight px-4 md:px-8 lg:px-20"
      >
        <h1
          className="xl:text-9xl lg:text-9xl text-5xl bg-transparent md:text-5xl sm:text:3xl"
          id="title-1"
        >
          Software Engineer
        </h1>
        <h1
          className="xl:text-9xl lg:text-9xl text-5xl bg-transparent md:text-5xl sm:text:3xl"
          id="title-2"
        >
          Designer
        </h1>
        <h1
          className="xl:text-9xl lg:9xl text-5xl bg-transparent md:text-5xl sm:text:3xl"
          id="title-3"
        >
          Brand Consultant
        </h1>
      </div>
      <div
        id="welcome"
        className=" w-full min-h-screen flex flex-col items-center justify-center bg-neutral-950 px-4 md:px-8 lg:px-20 antialiased relative"
      >
        <div className="flex flex-col items-center space-y-3 text-center md:text-left relative z-10 bg-transparent">
          <p className="text-lg md:text-xl text-white">
            Hello{" "}
            <span className="text-blue-800 font-bold text-xl md:text-2xl ml-1">
              I&apos;m
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
      </div>
    </div>
  );
};

export default Hero;
