import { useGlobalContext } from "@/contexts/globalContext";
import { MoveRight } from "lucide-react";

export default function Hero() {
  const { profile } = useGlobalContext();
  return (
    <div className="min-h-screen flex items-start justify-center flex-col bg-neutral-950 px-32">
      <div className="flex items-center justify-center space-x-52">
        <div className="space-y-5">
          <div className="space-y-1">
            <p className="text-xl">
              Hello{" "}
              <span className="text-blue-800 font-bold text-xl ml-1">I'm</span>
            </p>
            <h1 className="text-9xl font-bold tracking-wide text-blue-800 shadow-sm first-letter:uppercase">
              {profile?.user?.about.name}
            </h1>
            <p className="text-4xl font-semibold tracking-wide">
              {profile?.user?.about.title}
            </p>
          </div>
          <button className="px-5 py-3 bg-neutral-900 hover:border flex items-center space-x-3 text-xl">
            <p>Contact</p>
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
}
