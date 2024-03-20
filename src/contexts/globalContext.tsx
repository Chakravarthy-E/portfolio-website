import axios from "axios";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface GlobalContextType {
  profile: null;
  setProfile: React.Dispatch<React.SetStateAction<null>>;
}
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}`);
        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile();
  }, []);

  console.log(profile);

  return (
    <GlobalContext.Provider value={{ profile, setProfile }}>
      {children}
    </GlobalContext.Provider>
  );
};
