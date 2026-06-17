"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CheckoutContent() {
  const params = useSearchParams();

  const plan = params.get("plan") || "Unknown Plan";
  const duration = params.get("duration") || "1 Month";
  const price = params.get("price") || "0";

  const methods = [
    {
      name: "bKash",
      image: "/payment-methods/bkash.png",
      slug: "bkash",
    },
    {
      name: "Nagad",
      image: "/payment-methods/nagad.png",
      slug: "nagad",
    },
    {
      name: "Rocket",
      image: "/payment-methods/rocket.png",
      slug: "rocket",
    },
    {
      name: "Upay",
      image: "/payment-methods/upay.png",
      slug: "upay",
    },
    {
      name: "Cellfin",
      image: "/payment-methods/cellfin.png",
      slug: "cellfin",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
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
            color: "#d4af37",
            marginBottom: "30px",
            fontSize: "48px",
          }}
        >
          Checkout
        </h1>

        <div
          style={{
            background: "#111",
            border: "1px solid rgba(212,175,55,.2)",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "40px",
          }}
        >
          <h2>Order Summary</h2>

          <div style={{ marginTop: "20px" }}>
            <p>
              <strong>Plan:</strong> {plan}
            </p>

            <p>
              <strong>Duration:</strong> {duration}
            </p>

            <p>
              <strong>Amount:</strong>{" "}
              <span
                style={{
                  color: "#d4af37",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                ৳{price}
              </span>
            </p>
          </div>
        </div>

        <h2
          style={{
            marginBottom: "25px",
          }}
        >
          Select Payment Method
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {methods.map((method) => (
            <Link
              key={method.slug}
              href={`/payment/${method.slug}?plan=${encodeURIComponent(
                plan
              )}&duration=${encodeURIComponent(
                duration
              )}&price=${price}`}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  background: "#111",
                  border:
                    "1px solid rgba(212,175,55,.2)",
                  borderRadius: "20px",
                  padding: "25px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: ".3s",
                }}
              >
                <Image
                  src={method.image}
                  alt={method.name}
                  width={100}
                  height={100}
                  style={{
                    objectFit: "contain",
                  }}
                />

                <h3
                  style={{
                    color: "#fff",
                    marginTop: "15px",
                  }}
                >
                  {method.name}
                </h3>

                <div
                  style={{
                    marginTop: "15px",
                    background:
                      "linear-gradient(135deg,#d4af37,#f5d76e)",
                    color: "#000",
                    padding: "12px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Pay
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
