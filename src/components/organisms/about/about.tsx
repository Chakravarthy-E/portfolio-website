import { useGlobalContext } from "@/contexts/globalContext";

export default function About() {
  const { profile } = useGlobalContext();

  return (
    <div id="about" className="py-8 px-4 md:px-10 lg:px-20 min-h-screen">
      <h1 className="text-center text-3xl md:text-4xl lg:text-3xl tracking-widest font-semibold mb-6 text-white first-letter:text-5xl first-letter:text-blue-500 border-t border-b py-5 border-gray-700">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
          <img
            src={profile?.user.about.avatar?.url}
            alt="Avatar"
            className="object-cover w-72 h-72 md:w-96 lg:w-full rounded border-2 border-blue-500"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide">
            {profile?.user?.about.subTitle}
          </h2>
          <p className="text-base lg:text-xl text-gray-500">
            {profile?.user?.about.description}
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-6 lg:space-y-0">
            <div className="flex flex-col items-center border-2 border-gray-800 p-4 rounded">
              <p className="text-xl font-semibold text-white">Experience</p>
              <p className="text-2xl lg:text-xl text-blue-500">
                {profile?.user?.about.exp_year} years
              </p>
            </div>
            <div className="flex flex-col items-center border-2 border-gray-800 p-4 rounded">
              <p className="text-xl font-semibold text-white">Address</p>
              <p className="text-lg lg:text-xl text-blue-500">
                {profile?.user?.about.address}
              </p>
            </div>
            <div className="flex flex-col items-center border-2 border-gray-800 p-4 rounded">
              <p className="text-xl font-semibold text-white">Phone</p>
              <p className="text-lg lg:text-xl text-blue-500">
                {profile?.user?.about.phoneNumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
