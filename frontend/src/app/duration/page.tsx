"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function DurationContent() {
  const searchParams = useSearchParams();

  const plan =
    searchParams.get("plan") ||
    "Premium Plan";

  const durations = [
    {
      name: "1 Month",
      price: 299,
      regular: 299,
      badge: "",
      color: "#666",
    },
    {
      name: "3 Months",
      price: 799,
      regular: 897,
      badge: "POPULAR",
      color: "#0ea5e9",
    },
    {
      name: "6 Months",
      price: 1499,
      regular: 1794,
      badge: "MOST POPULAR",
      color: "#8b5cf6",
    },
    {
      name: "12 Months",
      price: 2799,
      regular: 3588,
      badge: "BEST VALUE",
      color: "#22c55e",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#050505,#0f0f0f)",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "10px",
            color: "#d4af37",
          }}
        >
          Select Duration
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginBottom: "50px",
          }}
        >
          {plan}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >
          {durations.map((item) => {
            const save =
              item.regular - item.price;

            const discount =
              Math.round(
                (save /
                  item.regular) *
                  100
              );

            const monthly =
              Math.round(
                item.price /
                  parseInt(
                    item.name
                  )
              );

            return (
              <div
                key={item.name}
                style={{
                  position:
                    "relative",

                  background:
                    "rgba(255,255,255,.04)",

                  backdropFilter:
                    "blur(20px)",

                  border:
                    "1px solid rgba(212,175,55,.2)",

                  borderRadius:
                    "24px",

                  padding:
                    "30px",

                  boxShadow:
                    "0 10px 40px rgba(0,0,0,.4)",

                  transition:
                    "all .3s ease",
                }}
              >
                {item.badge && (
                  <div
                    style={{
                      position:
                        "absolute",

                      top: "-12px",

                      right: "20px",

                      background:
                        item.color,

                      color:
                        "#fff",

                      padding:
                        "8px 14px",

                      borderRadius:
                        "999px",

                      fontSize:
                        "12px",

                      fontWeight:
                        "bold",
                    }}
                  >
                    {item.badge}
                  </div>
                )}

                <h2
                  style={{
                    fontSize:
                      "32px",
                    marginBottom:
                      "15px",
                  }}
                >
                  {item.name}
                </h2>

                <div
                  style={{
                    fontSize:
                      "42px",
                    color:
                      "#d4af37",
                    fontWeight:
                      "bold",
                  }}
                >
                  ৳{item.price}
                </div>

                <div
                  style={{
                    marginTop:
                      "10px",
                    color:
                      "#888",
                    textDecoration:
                      "line-through",
                  }}
                >
                  ৳{item.regular}
                </div>

                <div
                  style={{
                    marginTop:
                      "15px",
                    color:
                      "#22c55e",
                    fontWeight:
                      "bold",
                  }}
                >
                  Save ৳{save}
                </div>

                <div
                  style={{
                    marginTop:
                      "8px",
                    color:
                      "#f59e0b",
                  }}
                >
                  {discount}% OFF
                </div>

                <div
                  style={{
                    marginTop:
                      "15px",
                    padding:
                      "12px",
                    borderRadius:
                      "12px",
                    background:
                      "rgba(212,175,55,.08)",
                  }}
                >
                  Only ৳
                  {monthly}
                  /month
                </div>

                <div
                  style={{
                    marginTop:
                      "20px",
                    display:
                      "flex",
                    flexDirection:
                      "column",
                    gap: "8px",
                    color:
                      "#ddd",
                  }}
                >
                  <span>
                    ✓ Instant
                    Delivery
                  </span>
                  <span>
                    ✓ Premium
                    Access
                  </span>
                  <span>
                    ✓ 24/7 Support
                  </span>
                  <span>
                    ✓ Secure
                    Purchase
                  </span>
                </div>

                <Link
                  href={`/checkout?plan=${encodeURIComponent(
                    plan
                  )}&duration=${encodeURIComponent(
                    item.name
                  )}&price=${item.price}`}
                  style={{
                    textDecoration:
                      "none",
                  }}
                >
                  <button
                    style={{
                      width:
                        "100%",

                      marginTop:
                        "25px",

                      padding:
                        "15px",

                      border:
                        "none",

                      borderRadius:
                        "14px",

                      background:
                        "linear-gradient(135deg,#d4af37,#f5d76e)",

                      color:
                        "#000",

                      fontWeight:
                        "bold",

                      fontSize:
                        "16px",

                      cursor:
                        "pointer",
                    }}
                  >
                    Continue →
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function DurationPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight:
              "100vh",
            display:
              "flex",
            justifyContent:
              "center",
            alignItems:
              "center",
            color: "#fff",
            background:
              "#050505",
          }}
        >
          Loading...
        </div>
      }
    >
      <DurationContent />
    </Suspense>
  );
}
