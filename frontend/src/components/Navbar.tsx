import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backdropFilter: "blur(20px)",
        background: "rgba(0,0,0,.85)",
        borderBottom: "1px solid rgba(212,175,55,.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo Section */}
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
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#d4af37,#f5d76e)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: "22px",
                color: "#000",
                boxShadow:
                  "0 0 25px rgba(212,175,55,.45)",
              }}
            >
              P
            </div>

            <div>
              <h2
                style={{
                  margin: 0,
                  color: "#d4af37",
                  fontSize: "30px",
                  fontWeight: 800,
                }}
              >
                Premium Account Store
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "#888",
                  fontSize: "12px",
                }}
              >
                Premium Digital Accounts
              </p>
            </div>
          </div>
        </Link>

        {/* Menu */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Home
          </Link>

          <Link
            href="/store"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Store
          </Link>

          <Link
            href="/orders"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            My Orders
          </Link>

          <Link
            href="/contact"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Contact
          </Link>

          <Link
            href="/signup"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Sign Up
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
                  "linear-gradient(135deg,#d4af37,#f5d76e)",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow:
                  "0 10px 25px rgba(212,175,55,.35)",
              }}
            >
              Login
            </button>
          </Link>

          {/* Profile Avatar */}
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#d4af37,#f5d76e)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#000",
              fontWeight: "bold",
              fontSize: "18px",
              cursor: "pointer",
              boxShadow:
                "0 0 20px rgba(212,175,55,.4)",
            }}
          >
            P
          </div>
        </nav>
      </div>
    </header>
  );
}
