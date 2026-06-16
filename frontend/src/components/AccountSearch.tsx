"use client";

import { useState } from "react";

export default function
AccountSearch(){

  const [query,setQuery] =
  useState("");

  return (

    <input

      type="text"

      value={query}

      placeholder=
      "Search Account"

      onChange={(e)=>
      setQuery(
        e.target.value
      )}

    />

  );
}
