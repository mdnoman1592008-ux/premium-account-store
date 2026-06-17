"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function PaymentCompleteContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [transactionId, setTransactionId] =
    useState("");

  const [senderNumber, setSenderNumber] =
    useState("");

  const [screenshot, setScreenshot] =
    useState<File | null>(null);

  const [preview, setPreview] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const plan =
    searchParams.get("plan") || "";

  const duration =
    searchParams.get("duration") || "";

  const price =
    searchParams.get("price") || "0";

  const method =
    searchParams.get("method") || "";

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    setScreenshot(file);

    setPreview(
      URL.createObjectURL(file)
    );
  };

  const handleSubmit = () => {
    if (!senderNumber.trim()) {
      alert("Enter Sender Number");
      return;
    }

    if (!transactionId.trim()) {
      alert("Enter Transaction ID");
      return;
    }

    if (!screenshot) {
      alert(
        "Upload Payment Screenshot"
      );
      return;
    }

    setLoading(true);

    setTimeout(() => {
      router.push(
        `/order-pending?plan=${encodeURIComponent(
          plan
        )}&duration=${encodeURIComponent(
          duration
        )}&price=${price}&method=${method}&trx=${encodeURIComponent(
          transactionId
        )}`
      );
    }, 2000);
  };

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
          <h1
            style={{
              textAlign: "center",
              color: "#d4af37",
              marginBottom: "30px",
            }}
          >
            Submit Payment
          </h1>

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

            <p>
              <strong>Method:</strong>{" "}
              {method}
            </p>
          </div>

          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <label>
              Sender Number
            </label>

            <input
              type="text"
              value={senderNumber}
              onChange={(e) =>
                setSenderNumber(
                  e.target.value
                )
              }
              placeholder="01XXXXXXXXX"
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "8px",
                borderRadius: "12px",
                border:
                  "1px solid #333",
                background:
                  "#1a1a1a",
                color: "#fff",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "20px",
            }}
          >
            <label>
              Transaction ID
            </label>

            <input
              type="text"
              value={transactionId}
              onChange={(e) =>
                setTransactionId(
                  e.target.value
                )
              }
              placeholder="Transaction ID"
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "8px",
                borderRadius: "12px",
                border:
                  "1px solid #333",
                background:
                  "#1a1a1a",
                color: "#fff",
              }}
            />
          </div>

          <div
            style={{
              marginBottom: "25px",
            }}
          >
            <label>
              Upload Screenshot
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={
                handleFileChange
              }
              style={{
                width: "100%",
                marginTop: "10px",
              }}
            />

            {preview && (
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                <img
                  src={preview}
                  alt="Preview"
                  style={{
                    width: "100%",
                    maxHeight:
                      "350px",
                    objectFit:
                      "contain",
                    borderRadius:
                      "14px",
                    border:
                      "1px solid #333",
                  }}
                />

                <p
                  style={{
                    color:
                      "#22c55e",
                    marginTop:
                      "10px",
                  }}
                >
                  ✓ Screenshot
                  Selected
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
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
            {loading
              ? "✓ Processing Payment..."
              : "Submit Payment"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PaymentCompletePage() {
  return (
    <Suspense
      fallback={<div>Loading...</div>}
    >
      <PaymentCompleteContent />
    </Suspense>
  );
}
