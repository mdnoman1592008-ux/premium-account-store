"use client";

import { useState } from "react";

export default function SearchBar() {

  const [query,setQuery] =
  useState("");

  return (
    <div
      style={{
        marginBottom:"30px"
      }}
    >

      <input
        type="text"
        placeholder="Search apps..."
        value={query}
        onChange={(e)=>
          setQuery(
            e.target.value
          )
        }
        style={{
          width:"100%",
          padding:"15px",
          borderRadius:"12px",
          border:"1px solid #333",
          background:"#151515",
          color:"#fff"
        }}
      />

    </div>
  );
}
