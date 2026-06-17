```tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "rgba(0,0,0,.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(212,175,55,.15)",
        padding: "14px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
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
              fontWeight: "bold",
              fontSize: "20px",
              boxShadow:
                "0 0 20px rgba(212,175,55,.4)",
            }}
          >
            P
          </div>

          <h2
            style={{
              color: "#d4af37",
              margin: 0,
              fontSize: "32px",
              fontWeight: "800",
            }}
          >
            Premium Account Store
          </h2>
        </div>

        {/* Right Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Home
          </Link>

          <Link
            href="/store"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Store
          </Link>

          <Link
            href="/orders"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            My Orders
          </Link>

          <Link
            href="/contact"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Contact
          </Link>

          <Link
            href="/login"
            style={{
              padding: "10px 24px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg,#d4af37,#f5d76e)",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>

          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#d4af37,#f5d76e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            P
          </div>
        </div>
      </div>
    </nav>
  );
}
```
