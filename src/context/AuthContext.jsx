import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

const parseJWT = (token) => {
  return JSON.parse(atob(token.split(".")[1]));
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = parseJWT(token);
        setUser({
          token,
          role: decodedToken?.role || "User",
          id: decodedToken?.id,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const login = async (token) => {
    return new Promise((resolve) => {
      const decodedToken = parseJWT(token);
      localStorage.setItem("token", token);
      setUser({
        token,
        role: decodedToken?.role || "User",
        id: decodedToken?.id,
      });
      resolve();
    });
  };

  const logout = async () => {
    return new Promise((resolve) => {
      localStorage.removeItem("token");
      setUser(null);
      resolve();
    });
  };

  const value = {
    user,
    loading,
    login,
    logout,
    role: user?.role || null,
    userId: user?.id || null,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
