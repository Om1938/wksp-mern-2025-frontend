import { createContext, useEffect, useState } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  user: {
    avatarUrl: string;
    userName: string;
    userHandle: string;
  } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{
    avatarUrl: string;
    userName: string;
    userHandle: string;
  } | null>(null);

  const login = (username: string, password: string) => {
    if (username === "admin" && password === "password") {
      setUser({
        userName: "Admin",
        avatarUrl: "",
        userHandle: "@admin",
      });

      localStorage.setItem(
        "authData",
        JSON.stringify({
          userName: "Admin",
          avatarUrl: "",
          userHandle: "@admin",
        })
      );

      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("authData");
    setUser(null);
  };

  useEffect(() => {
    const authDetail = localStorage.getItem("authData");
    if (!authDetail) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(
      JSON.parse(authDetail) as {
        avatarUrl: string;
        userName: string;
        userHandle: string;
      }
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
