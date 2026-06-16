"use client";

import { useState } from "react";

export default function AdminLogin() {

  const [email,setEmail] =
  useState("");

  const [password,setPassword] =
  useState("");

  return (
    <div
      className="app-card"
      style={{
        maxWidth:"500px",
        margin:"auto"
      }}
    >

      <h1>
        Admin Login
      </h1>

      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e)=>
          setEmail(
            e.target.value
          )
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>
          setPassword(
            e.target.value
          )
        }
      />

      <button>
        Login
      </button>

    </div>
  );
}
