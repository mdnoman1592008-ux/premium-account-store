"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({
  children
}:{
  children:React.ReactNode
}) {

  const router =
  useRouter();

  const {
    isAuthenticated
  } = useAuth();

  useEffect(()=>{

    if(!isAuthenticated){
      router.push("/login");
    }

  },[
    isAuthenticated,
    router
  ]);

  if(!isAuthenticated){
    return null;
  }

  return <>{children}</>;
}
