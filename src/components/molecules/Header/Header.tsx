import { useGlobalContext } from "@/contexts/globalContext";
import { Menu } from "lucide-react";

export default function Header() {
  const { profile } = useGlobalContext();
  return (
    <nav className="flex w-full justify-between items-center z-50 p-5 border-b border-gray-900 bg-black  top-0 start-0 ">
      <div className="text-3xl uppercase tracking-wide font-bold bg-gradient-to-r from-blue-500 to-indigo-800 bg-clip-text text-transparent">
        {profile?.user?.about.name}
      </div>
      <div>
        <Menu />
      </div>
    </nav>
  );
}
