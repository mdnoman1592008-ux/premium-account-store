"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function PaymentCompleteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);

  const plan = searchParams.get("plan") || "";
  const duration = searchParams.get("duration") || "";
  const price = searchParams.get("price") || "0";
  const method = searchParams.get("method") || "";

  const handleSubmit = () => {
    if (!transactionId.trim()) {
      alert("Please enter transaction ID");
      return;
    }

    if (!screenshot) {
      alert("Please upload payment screenshot");
      return;
    }

    router.push(
      `/order-pending?plan=${encodeURIComponent(
        plan
      )}&duration=${encodeURIComponent(
        duration
      )}&price=${price}&method=${method}&trx=${encodeURIComponent(
        transactionId
      )}`
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#ffffff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "#111111",
          border: "1px solid rgba(212,175,55,.2)",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#d4af37",
            marginBottom: "30px",
          }}
        >
          Submit Payment
        </h1>

        <div style={{ marginBottom: "25px" }}>
          <p>
            <strong>Plan:</strong> {plan}
          </p>

          <p>
            <strong>Duration:</strong> {duration}
          </p>

          <p>
            <strong>Amount:</strong> ৳{price}
          </p>

          <p>
            <strong>Method:</strong> {method}
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
            }}
          >
            Transaction ID
          </label>

          <input
            type="text"
            value={transactionId}
            onChange={(e) =>
              setTransactionId(e.target.value)
            }
            placeholder="Enter Transaction ID"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #333",
              background: "#1a1a1a",
              color: "#fff",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
            }}
          >
            Upload Screenshot
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setScreenshot(
                e.target.files?.[0] || null
              )
            }
            style={{
              width: "100%",
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
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
          Submit Payment
        </button>
      </div>
    </div>
  );
}

export default function PaymentCompletePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentCompleteContent />
    </Suspense>
  );
}
