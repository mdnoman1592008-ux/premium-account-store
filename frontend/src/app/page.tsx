```tsx
import Link from "next/link";
import FeaturedApps from "../components/FeaturedApps";

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "60px 40px 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#2563eb",
              fontWeight: "bold",
              marginBottom: "25px",
            }}
          >
            ⭐ TRUSTED BY THOUSANDS
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "1.05",
              fontWeight: "900",
              color: "#111827",
              marginBottom: "24px",
            }}
          >
            Premium Accounts
            <br />
            For Your{" "}
            <span
              style={{
                color: "#2563eb",
              }}
            >
              Digital Life
            </span>
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#6b7280",
              maxWidth: "600px",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Get premium accounts, subscriptions and
            digital services at the best price.
            Fast delivery, secure payment and
            reliable support.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <Link href="/store">
              <button
                style={{
                  background:
                    "linear-gradient(135deg,#2563eb,#3b82f6)",
                  color: "#fff",
                  border: "none",
                  padding: "16px 30px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  boxShadow:
                    "0 10px 30px rgba(37,99,235,.25)",
                }}
              >
                Explore Plans →
              </button>
            </Link>

            <Link href="/contact">
              <button
                style={{
                  background: "#fff",
                  color: "#111827",
                  border: "1px solid #e5e7eb",
                  padding: "16px 30px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Contact Support
              </button>
            </Link>
          </div>

          {/* FEATURES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "15px",
            }}
          >
            {[
              {
                icon: "⚡",
                title: "Instant Delivery",
                sub: "Fast & Reliable",
              },
              {
                icon: "🛡️",
                title: "Secure Payment",
                sub: "100% Protected",
              },
              {
                icon: "🏷️",
                title: "Affordable Price",
                sub: "Best Market Price",
              },
              {
                icon: "🎧",
                title: "24/7 Support",
                sub: "Always Here",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow:
                    "0 5px 20px rgba(0,0,0,.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    marginBottom: "10px",
                  }}
                >
                  {item.icon}
                </div>

                <h4
                  style={{
                    color: "#111827",
                    marginBottom: "5px",
                  }}
                >
                  {item.title}
                </h4>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                  }}
                >
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
            textAlign: "center",
          }}
        >
          <img
            src="/hero.png"
            alt="Premium Account Store"
            style={{
              width: "100%",
              maxWidth: "720px",
              height: "auto",
              filter:
                "drop-shadow(0 20px 40px rgba(37,99,235,.2))",
            }}
          />
        </div>
      </section>

      {/* POPULAR APPS */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 40px 80px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            color: "#111827",
            marginBottom: "30px",
          }}
        >
          Popular Apps
        </h2>

        <FeaturedApps />
      </section>

      {/* STATS */}
      <section
        style={{
          padding: "80px 40px",
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          {[
            ["5000+", "Happy Customers"],
            ["100+", "Premium Services"],
            ["24/7", "Support Available"],
            ["99%", "Customer Satisfaction"],
          ].map(([number, text]) => (
            <div
              key={number}
              style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,.05)",
              }}
            >
              <h2
                style={{
                  color: "#2563eb",
                  fontSize: "42px",
                  marginBottom: "10px",
                }}
              >
                {number}
              </h2>

              <p
                style={{
                  color: "#6b7280",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
```
