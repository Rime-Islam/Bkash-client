import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type TUser = {
  _id: any;
  id: string;
  accountType: string;
  email: string;
  mobile: string;
};

type AuthContextType = {
  user: TUser | null;
  token: string | null;
  login: (token: string, user: TUser) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  // Load user from localStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (token: string, user: TUser) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Remove user on logout
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
