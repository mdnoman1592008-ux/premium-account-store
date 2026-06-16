"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

type UserType = {
  id:number;
  name:string;
  email:string;
} | null;

const AuthContext =
createContext<any>(null);

export function AuthProvider({
  children
}:{
  children:React.ReactNode
}) {

  const [user,setUser] =
  useState<UserType>(null);

  const [token,setToken] =
  useState<string | null>(null);

  useEffect(()=>{

    const savedToken =
    localStorage.getItem("token");

    const savedUser =
    localStorage.getItem("user");

    if(savedToken){
      setToken(savedToken);
    }

    if(savedUser){
      setUser(
        JSON.parse(savedUser)
      );
    }

  },[]);

  const login = (
    token:string,
    user:any
  ) => {

    localStorage.setItem(
      "token",
      token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setToken(token);
    setUser(user);
  };

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext =
() => useContext(AuthContext);
