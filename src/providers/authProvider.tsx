import { createContext, useEffect, useState } from "react";
import { api } from "../helper/api";

type AuthContextValue = {
  isAuthenticated: boolean;
  token?: string | null;
  user: {
    avatarUrl: string;
    userName: string;
    userHandle: string;
  } | null;
  login: (username: string, password: string) => Promise<boolean>;
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

  const [, setToken] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    const res = await api.post("/auth/login", {
      userHandle: username,
      password,
    });

    const authData = res.data.data as {
      token: string;
      user: {
        avatarUrl: string;
        userName: string;
        userHandle: string;
      };
    };

    if (authData.token) {
      setUser({
        userName: authData.user.userName,
        avatarUrl: authData.user.avatarUrl,
        userHandle: authData.user.userHandle,
      });

      localStorage.setItem(
        "authData",
        JSON.stringify({
          userName: authData.user.userName,
          avatarUrl: authData.user.avatarUrl,
          userHandle: authData.user.userHandle,
        })
      );

      localStorage.setItem("authToken", authData.token);

      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("authData");
    localStorage.removeItem("authToken");
    setUser(null);
  };

  useEffect(() => {
    const authDetail = localStorage.getItem("authData");
    const authToken = localStorage.getItem("authToken");

    if (!authDetail || !authToken) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(
      JSON.parse(authDetail) as {
        avatarUrl: string;
        userName: string;
        userHandle: string;
      }
    );

    setToken(authToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
