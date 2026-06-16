"use client";

import { useState } from "react";

export default function PlanForm() {

  const [form,setForm] =
  useState({
    app:"",
    plan:"",
    description:""
  });

  return (
    <form className="app-card">

      <h2>
        Add Plan
      </h2>

      <input
        type="text"
        placeholder="App Name"
        value={form.app}
        onChange={(e)=>
          setForm({
            ...form,
            app:e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Plan Name"
        value={form.plan}
        onChange={(e)=>
          setForm({
            ...form,
            plan:e.target.value
          })
        }
      />

      <textarea
        placeholder="Plan Description"
        value={form.description}
        onChange={(e)=>
          setForm({
            ...form,
            description:e.target.value
          })
        }
      />

      <button>
        Save Plan
      </button>

    </form>
  );
}
