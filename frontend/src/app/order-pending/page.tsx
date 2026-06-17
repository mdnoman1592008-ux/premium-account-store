"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PendingContent() {
  const params = useSearchParams();

  const plan =
    params.get("plan") || "Unknown";

  const duration =
    params.get("duration") || "Unknown";

  const price =
    params.get("price") || "0";

  const method =
    params.get("method") || "Unknown";

  const trx =
    params.get("trx") || "N/A";

  const orderId =
    "ORD-" +
    Date.now()
      .toString()
      .slice(-8);

  const submitTime =
    new Date().toLocaleString();

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
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#111",
            border:
              "1px solid rgba(212,175,55,.2)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow:
              "0 15px 50px rgba(0,0,0,.4)",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "60px",
              }}
            >
              ⏳
            </div>

            <h1
              style={{
                color: "#d4af37",
                marginTop: "10px",
              }}
            >
              Order Submitted
            </h1>

            <p
              style={{
                color: "#aaa",
              }}
            >
              Waiting For Admin Verification
            </p>
          </div>

          <div
            style={{
              marginTop: "35px",
              display: "grid",
              gap: "15px",
            }}
          >
            <div
              style={{
                background: "#1a1a1a",
                padding: "15px",
                borderRadius: "12px",
              }}
            >
              <strong>Order ID:</strong>{" "}
              {orderId}
            </div>

            <div
              style={{
                background: "#1a1a1a",
                padding: "15px",
                borderRadius: "12px",
              }}
            >
              <strong>Plan:</strong>{" "}
              {plan}
            </div>

            <div
              style={{
                background: "#1a1a1a",
                padding: "15px",
                borderRadius: "12px",
              }}
            >
              <strong>Duration:</strong>{" "}
              {duration}
            </div>

            <div
              style={{
                background: "#1a1a1a",
                padding: "15px",
                borderRadius: "12px",
              }}
            >
              <strong>Amount:</strong> ৳
              {price}
            </div>

            <div
              style={{
                background: "#1a1a1a",
                padding: "15px",
                borderRadius: "12px",
              }}
            >
              <strong>
                Payment Method:
              </strong>{" "}
              {method}
            </div>

            <div
              style={{
                background: "#1a1a1a",
                padding: "15px",
                borderRadius: "12px",
              }}
            >
              <strong>
                Transaction ID:
              </strong>{" "}
              {trx}
            </div>

            <div
              style={{
                background: "#1a1a1a",
                padding: "15px",
                borderRadius: "12px",
              }}
            >
              <strong>
                Submitted At:
              </strong>{" "}
              {submitTime}
            </div>

            <div
              style={{
                background:
                  "rgba(245,158,11,.12)",
                border:
                  "1px solid rgba(245,158,11,.3)",
                padding: "18px",
                borderRadius: "12px",
                color: "#f59e0b",
                fontWeight: "bold",
              }}
            >
              Status: PENDING
            </div>
          </div>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <a
              href="/my-accounts"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "15px",
                  border: "none",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg,#d4af37,#f5d76e)",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Go To My Accounts
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderPendingPage() {
  return (
    <Suspense
      fallback={<div>Loading...</div>}
    >
      <PendingContent />
    </Suspense>
  );
}
