"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function DurationPage() {
  const params = useSearchParams();

  const plan =
    params.get("plan") || "Unknown Plan";

  const durations = [
    { name: "1 Month", price: 299 },
    { name: "3 Months", price: 799 },
    { name: "6 Months", price: 1499 },
    { name: "12 Months", price: 2799 },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        padding: "40px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Select Duration
      </h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "grid",
          gap: "20px",
        }}
      >
        {durations.map((item) => (
          <div
            key={item.name}
            style={{
              background: "#111",
              border:
                "1px solid rgba(212,175,55,.2)",
              borderRadius: "20px",
              padding: "25px",
            }}
          >
            <h2>{item.name}</h2>

            <h3
              style={{
                color: "#d4af37",
              }}
            >
              ৳{item.price}
            </h3>

            <Link
              href={`/checkout?plan=${encodeURIComponent(
                plan
              )}&duration=${encodeURIComponent(
                item.name
              )}&price=${item.price}`}
            >
              <button
                style={{
                  width: "100%",
                  marginTop: "15px",
                  padding: "12px",
                  border: "none",
                  borderRadius: "10px",
                  background:
                    "#d4af37",
                  color: "#000",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Continue
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
