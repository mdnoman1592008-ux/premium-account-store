```tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backdropFilter: "blur(20px)",
        background: "rgba(8,8,12,.92)",
        borderBottom:
          "1px solid rgba(212,175,55,.15)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#d4af37,#f5d76e)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                fontWeight: 900,
                fontSize: "22px",
                boxShadow:
                  "0 0 30px rgba(212,175,55,.45)",
              }}
            >
              P
            </div>

            <div>
              <h2
                style={{
                  margin: 0,
                  color: "#f5d76e",
                  fontSize: "28px",
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Premium Account Store
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                Premium Digital Services
              </p>
            </div>
          </div>
        </Link>

        {/* Menu */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {[
            ["Home", "/"],
            ["Store", "/store"],
            ["Orders", "/orders"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              style={{
                color: "#f9fafb",
                textDecoration: "none",
                fontWeight: 500,
                transition: ".3s",
              }}
            >
              {label}
            </Link>
          ))}

          <Link
            href="/signup"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                border: "1px solid rgba(255,255,255,.15)",
                background: "transparent",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "14px",
                cursor: "pointer",
                fontWeight: "bold",
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
                border: "none",
                padding: "12px 24px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg,#2563eb,#3b82f6)",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow:
                  "0 10px 25px rgba(37,99,235,.35)",
              }}
            >
              Login
            </button>
          </Link>

          {/* Profile */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#d4af37,#f5d76e)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#000",
              fontWeight: 900,
              fontSize: "18px",
              cursor: "pointer",
              boxShadow:
                "0 0 25px rgba(212,175,55,.35)",
            }}
          >
            P
          </div>
        </nav>
      </div>
    </header>
  );
}
```
