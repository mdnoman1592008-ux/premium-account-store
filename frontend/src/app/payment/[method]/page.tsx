"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function PaymentMethodPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const [copied, setCopied] = useState(false);

  const method = (params.method as string) || "bkash";

  const plan = searchParams.get("plan") || "";
  const duration = searchParams.get("duration") || "";
  const price = searchParams.get("price") || "0";

  const paymentMethods: Record<
    string,
    {
      name: string;
      number: string;
      type: string;
      qr: string;
      logo: string;
    }
  > = {
    bkash: {
      name: "bKash",
      number: "017XXXXXXXX",
      type: "Personal",
      qr: "/qr/bkash-qr.png",
      logo: "/payment-methods/bkash.png",
    },

    nagad: {
      name: "Nagad",
      number: "018XXXXXXXX",
      type: "Personal",
      qr: "/qr/nagad-qr.png",
      logo: "/payment-methods/nagad.png",
    },

    rocket: {
      name: "Rocket",
      number: "019XXXXXXXX",
      type: "Personal",
      qr: "/qr/rocket-qr.png",
      logo: "/payment-methods/rocket.png",
    },

    upay: {
      name: "Upay",
      number: "016XXXXXXXX",
      type: "Personal",
      qr: "/qr/upay-qr.png",
      logo: "/payment-methods/upay.png",
    },

    cellfin: {
      name: "Cellfin",
      number: "015XXXXXXXX",
      type: "Personal",
      qr: "/qr/cellfin-qr.png",
      logo: "/payment-methods/cellfin.png",
    },
  };

  const data =
    paymentMethods[method] ||
    paymentMethods.bkash;

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(
        data.number
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      alert("Copy failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#050505,#0d0d0d)",
        padding: "40px 20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(145deg,#111,#181818)",
            borderRadius: "28px",
            padding: "35px",
            border:
              "1px solid rgba(212,175,55,.25)",
            boxShadow:
              "0 20px 60px rgba(212,175,55,.15)",
          }}
        >
          {/* HEADER */}

          <div
            style={{
              textAlign: "center",
              marginBottom: "35px",
            }}
          >
            <img
              src={data.logo}
              alt={data.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                filter:
                  "drop-shadow(0 0 20px rgba(212,175,55,.5))",
              }}
            />

            <h1
              style={{
                fontSize: "42px",
                fontWeight: "800",
                marginTop: "15px",
              }}
            >
              {data.name} Payment
            </h1>

            <p
              style={{
                color: "#999",
                marginTop: "10px",
              }}
            >
              Secure Premium Checkout
            </p>
          </div>

          {/* QR */}

          <div
            style={{
              background: "#141414",
              borderRadius: "24px",
              padding: "25px",
              textAlign: "center",
              marginBottom: "25px",
              border:
                "1px solid rgba(212,175,55,.15)",
            }}
          >
            <img
              src={data.qr}
              alt="QR"
              style={{
                width: "280px",
                maxWidth: "100%",
                background: "#fff",
                padding: "12px",
                borderRadius: "20px",
                boxShadow:
                  "0 0 35px rgba(212,175,55,.2)",
              }}
            />

            <p
              style={{
                marginTop: "15px",
                color: "#d4af37",
                fontWeight: "bold",
              }}
            >
              Scan QR Code To Pay
            </p>
          </div>

          {/* PAYMENT INFO */}

          <div
            style={{
              background: "#141414",
              borderRadius: "20px",
              padding: "25px",
              marginBottom: "25px",
            }}
          >
            <h3
              style={{
                color: "#d4af37",
                marginBottom: "15px",
              }}
            >
              Payment Information
            </h3>

            <div
              style={{
                fontSize: "26px",
                fontWeight: "700",
              }}
            >
              {data.number}
            </div>

            <p
              style={{
                color: "#999",
                marginTop: "8px",
              }}
            >
              {data.type} Account
            </p>

            <button
              onClick={copyNumber}
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "14px",
                border: "none",
                borderRadius: "14px",
                background: copied
                  ? "#22c55e"
                  : "#d4af37",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
                transition: ".3s",
              }}
            >
              {copied
                ? "✓ Number Copied"
                : "Copy Number"}
            </button>
          </div>

          {/* ORDER SUMMARY */}

          <div
            style={{
              background: "#141414",
              borderRadius: "20px",
              padding: "25px",
              marginBottom: "25px",
            }}
          >
            <h3
              style={{
                color: "#d4af37",
                marginBottom: "20px",
              }}
            >
              Order Summary
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "12px",
              }}
            >
              <span>Plan</span>
              <strong>{plan}</strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginBottom: "12px",
              }}
            >
              <span>Duration</span>
              <strong>{duration}</strong>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
              }}
            >
              <span>Total Amount</span>

              <strong
                style={{
                  color: "#d4af37",
                  fontSize: "26px",
                }}
              >
                ৳{price}
              </strong>
            </div>
          </div>

          {/* SECURITY */}

          <div
            style={{
              background:
                "rgba(34,197,94,.08)",
              border:
                "1px solid rgba(34,197,94,.2)",
              padding: "18px",
              borderRadius: "16px",
              marginBottom: "25px",
              textAlign: "center",
              color: "#22c55e",
              fontWeight: "bold",
            }}
          >
            🔒 Secure Payment Verification
          </div>

          {/* BUTTON */}

          <Link
            href={`/payment-complete?method=${method}&plan=${encodeURIComponent(
              plan
            )}&duration=${encodeURIComponent(
              duration
            )}&price=${price}`}
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                width: "100%",
                padding: "18px",
                border: "none",
                borderRadius: "16px",
                background:
                  "linear-gradient(135deg,#d4af37,#f8d86a)",
                color: "#000",
                fontWeight: "800",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow:
                  "0 10px 30px rgba(212,175,55,.4)",
              }}
            >
              Payment Complete →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
