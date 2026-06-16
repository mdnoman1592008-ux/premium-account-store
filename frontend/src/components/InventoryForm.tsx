"use client";

import { useState } from "react";

export default function InventoryForm() {

  const [form,setForm] =
  useState({
    app:"",
    plan:"",
    email:"",
    password:"",
    notes:""
  });

  return (
    <form className="app-card">

      <h2>
        Add Inventory Account
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

      <input
        type="email"
        placeholder="Account Email"
        value={form.email}
        onChange={(e)=>
          setForm({
            ...form,
            email:e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Account Password"
        value={form.password}
        onChange={(e)=>
          setForm({
            ...form,
            password:e.target.value
          })
        }
      />

      <textarea
        placeholder="Notes"
        value={form.notes}
        onChange={(e)=>
          setForm({
            ...form,
            notes:e.target.value
          })
        }
      />

      <button>
        Save Account
      </button>

    </form>
  );
}
