import { useGlobalContext } from "@/contexts/globalContext";
import Image from "next/image";

export default function About() {
  const { profile } = useGlobalContext();
  return (
    <div className="py-5 px-20 min-h-screen">
      <h1 className="text-center text-3xl font-semibold">About Me</h1>
      <div className="flex items-start justify-center py-16 space-x-10">
        <div>
          <img
            src={profile?.user.about.avatar.url}
            alt="Avatar"
            className="px-3 py-3 border-style object-cover w-96 h-52"
          />
        </div>
        <div className="w-1/2 space-y-2">
          <h1 className="text-gray-400 text-2xl font-semibold">
            {profile?.user?.about.subTitle}
          </h1>
          <p className="text-gray-400">{profile?.user?.about.description}</p>
          <p className="text-gray-400">
            Experience :{" "}
            <span className="text-xl text-blue-600 font-bold">
              {profile?.user?.about.exp_year} years
            </span>
          </p>
          <p className="text-gray-400">
            Address :{" "}
            <span className="text-xl text-blue-600 font-bold">
              {profile?.user?.about.address}
            </span>
          </p>
          <p className="text-gray-400">
            Phone Number :{" "}
            <span className="text-xl text-blue-600 font-bold">
              {profile?.user?.about.phoneNumber}
            </span>
          </p>
          <p className="text-gray-400">
            What I Believe :{" "}
            <span className="text-xl text-blue-600 font-bold">
              {profile?.user?.about.quote}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
