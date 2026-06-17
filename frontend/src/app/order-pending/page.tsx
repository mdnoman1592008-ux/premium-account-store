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
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "16px",
              marginBottom: "25px",
            }}
          >
            <h3
              style={{
                color: "#d4af37",
                marginBottom: "15px",
              }}
            >
              Order Details
            </h3>

            <p>
              <strong>Order ID:</strong>{" "}
              {orderId}
            </p>

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

            <p>
              <strong>Payment Method:</strong>{" "}
              {method}
            </p>

            <p>
              <strong>Transaction ID:</strong>{" "}
              {trx}
            </p>

            <p>
              <strong>Submitted:</strong>{" "}
              {submitTime}
            </p>
          </div>

          <div
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "16px",
              marginBottom: "25px",
            }}
          >
            <h3
              style={{
                color: "#d4af37",
                marginBottom: "20px",
              }}
            >
              Order Progress
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                ✅ Payment Submitted
              </div>

              <div>
                🔄 Pending Review
              </div>

              <div
                style={{
                  color: "#777",
                }}
              >
                ⏳ Verified
              </div>

              <div
                style={{
                  color: "#777",
                }}
              >
                📦 Delivered
              </div>
            </div>
          </div>

          <div
            style={{
              background:
                "rgba(245,158,11,.12)",
              border:
                "1px solid rgba(245,158,11,.3)",
              padding: "18px",
              borderRadius: "16px",
              color: "#f59e0b",
              marginBottom: "25px",
            }}
          >
            <strong>Status:</strong>{" "}
            PENDING

            <br />
            <br />

            Estimated Verification Time:
            5-30 Minutes
          </div>

          <div
            style={{
              display: "grid",
              gap: "15px",
            }}
          >
            <a
              href="/contact"
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
                  background: "#1f2937",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Contact Support
              </button>
            </a>

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
