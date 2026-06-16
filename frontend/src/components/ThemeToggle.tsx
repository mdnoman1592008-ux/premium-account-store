"use client";

import { useState } from "react";

export default function ThemeToggle() {

  const [dark,setDark] =
  useState(true);

  return (
    <button
      onClick={()=>
        setDark(!dark)
      }
      style={{
        padding:"10px 15px",
        borderRadius:"10px",
        cursor:"pointer"
      }}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
