"use client";

import { useState } from "react";

export default function LoginPage() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = (e: React.FormEvent) => {
e.preventDefault();
alert("Login System Connected Successfully");
};

return (
<div
style={{
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",

```
    background:
      "radial-gradient(circle at top,#2b2100,#050505 60%)",

    padding: "30px",
  }}
>
  <div
    style={{
      width: "100%",
      maxWidth: "500px",

      padding: "45px",

      borderRadius: "28px",

      background:
        "rgba(255,255,255,.05)",

      backdropFilter: "blur(20px)",

      border:
        "1px solid rgba(212,175,55,.25)",

      boxShadow:
        "0 20px 60px rgba(0,0,0,.6), 0 0 35px rgba(212,175,55,.15)",

      transform:
        "perspective(1000px) rotateX(3deg)",
    }}
  >
    <div
      style={{
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",

          margin: "0 auto 15px",

          borderRadius: "50%",

          background:
            "linear-gradient(135deg,#d4af37,#f5d76e)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontSize: "28px",
          fontWeight: "bold",
          color: "#000",

          boxShadow:
            "0 0 25px rgba(212,175,55,.5)",
        }}
      >
        P
      </div>

      <h1
        style={{
          color: "#d4af37",
          fontSize: "38px",
          marginBottom: "8px",
        }}
      >
        Welcome Back
      </h1>

      <p
        style={{
          color: "#bbb",
        }}
      >
        Login to your Premium Account
      </p>
    </div>

    <form
      onSubmit={handleLogin}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        style={{
          padding: "16px",
          borderRadius: "14px",
          border:
            "1px solid rgba(255,255,255,.1)",

          background:
            "rgba(255,255,255,.06)",

          color: "#fff",
          fontSize: "15px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={{
          padding: "16px",
          borderRadius: "14px",
          border:
            "1px solid rgba(255,255,255,.1)",

          background:
            "rgba(255,255,255,.06)",

          color: "#fff",
          fontSize: "15px",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "16px",

          border: "none",

          borderRadius: "14px",

          background:
            "linear-gradient(135deg,#d4af37,#f5d76e)",

          color: "#000",

          fontWeight: "700",

          fontSize: "16px",

          cursor: "pointer",

          boxShadow:
            "0 0 25px rgba(212,175,55,.35)",
        }}
      >
        Login
      </button>
    </form>

    <div
      style={{
        textAlign: "center",
        marginTop: "25px",
        color: "#aaa",
      }}
    >
      Don't have an account? Register
    </div>
  </div>
</div>
```

);
}
