"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login Successful");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#050505",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "40px",
          borderRadius: "20px",
          background: "#111",
          border: "1px solid #333",
          boxShadow: "0 0 30px rgba(212,175,55,.15)",
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Login
        </h1>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #333",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #333",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "none",
              background: "#d4af37",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
