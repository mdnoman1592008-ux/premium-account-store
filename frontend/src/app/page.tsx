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
          padding: "80px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: "999px",
              background: "#eef4ff",
              color: "#2563eb",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            ⭐ TRUSTED BY THOUSANDS
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.1",
              color: "#111827",
              marginBottom: "20px",
              fontWeight: "800",
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
              fontSize: "18px",
              color: "#6b7280",
              maxWidth: "600px",
              marginBottom: "35px",
              lineHeight: "1.8",
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
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  cursor: "pointer",
                  fontWeight: "bold",
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
                  padding: "16px 28px",
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
                "repeat(auto-fit,minmax(160px,1fr))",
              gap: "15px",
            }}
          >
            {[
              {
                title: "Instant Delivery",
                sub: "Fast & Reliable",
              },
              {
                title: "Secure Payment",
                sub: "100% Protected",
              },
              {
                title: "Affordable Price",
                sub: "Best Market Price",
              },
              {
                title: "24/7 Support",
                sub: "Always Here",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "18px",
                  padding: "18px",
                  boxShadow:
                    "0 5px 15px rgba(0,0,0,.05)",
                }}
              >
                <h4
                  style={{
                    color: "#111827",
                    marginBottom: "6px",
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
              maxWidth: "650px",
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
            fontSize: "36px",
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
          background: "#ffffff",
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
                border: "1px solid #e5e7eb",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  color: "#2563eb",
                  fontSize: "42px",
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

      {/* NEWSLETTER */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "80px auto",
          padding: "50px",
          background: "#fff",
          borderRadius: "30px",
          border: "1px solid #e5e7eb",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            color: "#111827",
            marginBottom: "15px",
          }}
        >
          Stay Updated
        </h2>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "25px",
          }}
        >
          Subscribe to receive offers and updates.
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          style={{
            width: "100%",
            maxWidth: "500px",
            padding: "15px",
            borderRadius: "12px",
            border: "1px solid #d1d5db",
            marginBottom: "15px",
          }}
        />

        <br />

        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "15px 40px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Subscribe
        </button>
      </section>
    </main>
  );
}
