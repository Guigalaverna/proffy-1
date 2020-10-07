import React, { createContext, useState } from "react";

import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  token: string;
  user: object | null;
  signIn(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthContextData> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await api.post("api/login", {});

    setUser(response.data.user);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, token: "", user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
