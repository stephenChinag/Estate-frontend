import { createContext, useState, ReactNode, useEffect } from "react";

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<any>({});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") as string) || null
  );

  const updateUser = (data: any) => {
    setCurrentUser(data);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
