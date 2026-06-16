"use client";

import { useState } from "react";

export default function RegisterPage() {

  const [form,setForm] =
  useState({
    name:"",
    email:"",
    mobile:"",
    password:""
  });

  return (
    <div
      style={{
        padding:"50px",
        maxWidth:"600px",
        margin:"auto"
      }}
    >

      <div className="app-card">

        <h1>
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e)=>
            setForm({
              ...form,
              name:e.target.value
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
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
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={(e)=>
            setForm({
              ...form,
              mobile:e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e)=>
            setForm({
              ...form,
              password:e.target.value
            })
          }
        />

        <button>
          Register
        </button>

      </div>

    </div>
  );
}
