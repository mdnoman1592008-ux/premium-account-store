"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function PaymentMethodPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const [copied, setCopied] = useState(false);

  const method = (params.method as string) || "bkash";

  const plan =
    searchParams.get("plan") || "";

  const duration =
    searchParams.get("duration") || "";

  const price =
    searchParams.get("price") || "0";

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
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#111",
            borderRadius: "24px",
            padding: "35px",
            border:
              "1px solid rgba(212,175,55,.25)",
            boxShadow:
              "0 20px 60px rgba(212,175,55,.15)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <img
              src={data.logo}
              alt={data.name}
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain",
              }}
            />

            <h1
              style={{
                color: "#d4af37",
                marginTop: "10px",
              }}
            >
              {data.name} Payment
            </h1>
          </div>

          <div
            style={{
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <img
              src={data.qr}
              alt="QR Code"
              style={{
                width: "250px",
                maxWidth: "100%",
                background: "#fff",
                padding: "12px",
                borderRadius: "18px",
              }}
            />
          </div>

          <div
            style={{
              background: "#1a1a1a",
              borderRadius: "18px",
              padding: "20px",
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

            <p>
              <strong>Number:</strong>{" "}
              {data.number}
            </p>

            <p>
              <strong>Type:</strong>{" "}
              {data.type}
            </p>

            <button
              onClick={copyNumber}
              style={{
                marginTop: "15px",
                padding:
                  "12px 20px",
                border: "none",
                borderRadius: "12px",
                background:
                  copied
                    ? "#22c55e"
                    : "#d4af37",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {copied
                ? "✓ Copied"
                : "Copy Number"}
            </button>
          </div>

          <div
            style={{
              background: "#1a1a1a",
              borderRadius: "18px",
              padding: "20px",
              marginBottom: "25px",
            }}
          >
            <h3
              style={{
                color: "#d4af37",
                marginBottom: "15px",
              }}
            >
              Order Summary
            </h3>

            <p>
              <strong>Plan:</strong>{" "}
              {plan}
            </p>

            <p>
              <strong>Duration:</strong>{" "}
              {duration}
            </p>

            <p>
              <strong>Amount:</strong> ৳
              {price}
            </p>
          </div>

          <Link
            href={`/payment-complete?method=${method}&plan=${encodeURIComponent(
              plan
            )}&duration=${encodeURIComponent(
              duration
            )}&price=${price}`}
            style={{
              textDecoration:
                "none",
            }}
          >
            <button
              style={{
                width: "100%",
                padding: "18px",
                border: "none",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg,#d4af37,#f5d76e)",
                color: "#000",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow:
                  "0 10px 30px rgba(212,175,55,.35)",
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
