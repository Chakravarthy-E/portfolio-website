import { useGlobalContext } from "@/contexts/globalContext";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function About() {
  const { profile } = useGlobalContext();

  return (
    <div id="about" className="py-5 px-4 md:px-10 lg:px-20 min-h-screen">
      <h1 className="text-center text-3xl md:text-4xl lg:text-3xl tracking-widest font-semibold text-white first-letter:text-5xl first-letter:text-blue-500 border-t border-b py-5 border-gray-700">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between py-8 md:py-16 space-y-8 md:space-y-0 md:space-x-10">
        <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
          <img
            src={profile?.user.about.avatar.url}
            alt="Avatar"
            className="object-cover w-72 h-full md:w-96 md:h-72 lg:w-80 lg:h-full rounded-lg border px-3"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 space-y-4">
          <h1 className="text-gray-400 text-base md:text-2xl lg:text-2xl font-semibold  tracking-wide first-letter:text-blue-500 first-letter:lg:text-4xl">
            {profile?.user?.about.subTitle}
          </h1>
          <p className="text-gray-400 first-letter:text-blue-500 first-letter:text-3xl tracking-wide">
            {profile?.user?.about.description}
          </p>
          <div className="lg:flex lg:flex-row lg:space-x-3 space-y-2">
            <div className="border-style w-fit px-4 py-2">
              <p className="text-white">Experience</p>
              <p className="text-xl md:text-2xl lg:text-xl text-blue-600 font-bold text-center">
                {profile?.user?.about.exp_year} years
              </p>
            </div>
            <div className="border-style w-fit px-4 py-2">
              <p className="text-white">Address</p>
              <p className="text-xl md:text-2xl lg:text-xl text-blue-600 font-bold text-center">
                {profile?.user?.about.address}
              </p>
            </div>
            <div className="border-style w-fit px-4 py-2">
              <p className="text-white">Phone</p>
              <p className="text-xl md:text-2xl lg:text-xl text-blue-600 font-bold text-center">
                {profile?.user?.about.phoneNumber}
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
