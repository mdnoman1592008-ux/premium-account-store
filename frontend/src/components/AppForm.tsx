"use client";

import { useState } from "react";

export default function AppForm() {

  const [form,setForm] =
  useState({
    name:"",
    slug:"",
    description:"",
    logo:""
  });

  return (
    <form className="app-card">

      <h2>
        Add App
      </h2>

      <input
        type="text"
        placeholder="App Name"
        value={form.name}
        onChange={(e)=>
          setForm({
            ...form,
            name:e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Slug"
        value={form.slug}
        onChange={(e)=>
          setForm({
            ...form,
            slug:e.target.value
          })
        }
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e)=>
          setForm({
            ...form,
            description:e.target.value
          })
        }
      />

      <input
        type="file"
      />

      <button>
        Save App
      </button>

    </form>
  );
}
