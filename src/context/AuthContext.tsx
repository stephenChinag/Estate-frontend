import { createContext, useState, ReactNode } from "react";

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<any>({});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") as string) || null
  );

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
