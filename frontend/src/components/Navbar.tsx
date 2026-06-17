"use client";

import Link from "next/link";

export default function Navbar() {
  const navLink = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
    transition: "all .3s ease",
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: "18px 40px",

        background: "rgba(0,0,0,.85)",
        backdropFilter: "blur(15px)",

        borderBottom: "1px solid rgba(212,175,55,.2)",

        boxShadow:
          "0 0 25px rgba(212,175,55,.08)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",

              borderRadius: "50%",

              background:
                "linear-gradient(135deg,#d4af37,#f5d76e)",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              color: "#000",
              fontWeight: "bold",

              boxShadow:
                "0 0 15px rgba(212,175,55,.4)",
            }}
          >
            P
          </div>

          <span
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#d4af37",
              letterSpacing: ".5px",
            }}
          >
            Premium Account Store
          </span>
        </div>
      </Link>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
        }}
      >
        <Link href="/" style={navLink}>
          Home
        </Link>

        <Link href="/store" style={navLink}>
          Store
        </Link>

        <Link href="/orders" style={navLink}>
          My Orders
        </Link>

        <Link href="/contact" style={navLink}>
          Contact
        </Link>

        <Link
  href="/register"
  style={{
    textDecoration: "none",
  }}
>
  <button
    style={{
      background: "transparent",
      color: "#d4af37",

      border: "1px solid #d4af37",

      padding: "10px 22px",

      borderRadius: "12px",

      cursor: "pointer",

      fontWeight: "600",

      transition: ".3s",
    }}
  >
    Sign Up
  </button>
</Link>

        <Link
          href="/login"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            style={{
              background:
                "linear-gradient(135deg,#d4af37,#f5d76e)",

              color: "#000",

              border: "none",

              padding: "10px 22px",

              borderRadius: "12px",

              fontWeight: "700",

              cursor: "pointer",

              transition: ".3s",

              boxShadow:
                "0 0 20px rgba(212,175,55,.35)",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}
