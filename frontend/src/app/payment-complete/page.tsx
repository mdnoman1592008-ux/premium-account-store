"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function PaymentCompleteContent() {
  const params = useSearchParams();
  const router = useRouter();

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
    params.get("plan") || "";

  const duration =
    params.get("duration") || "";

  const price =
    params.get("price") || "0";

  const method =
    params.get("method") || "";

  const handleImage = (
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

  const handleSubmit = async () => {
    if (!senderNumber) {
      alert("Enter Sender Number");
      return;
    }

    if (!transactionId) {
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
        )}&price=${price}&method=${method}&trx=${transactionId}`
      );
    }, 1500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#050505,#0d0d0d)",
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
            background:
              "linear-gradient(145deg,#111,#181818)",
            borderRadius: "28px",
            padding: "35px",
            border:
              "1px solid rgba(212,175,55,.2)",
            boxShadow:
              "0 20px 60px rgba(212,175,55,.15)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#d4af37",
              marginBottom: "10px",
            }}
          >
            Submit Payment
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#999",
              marginBottom: "30px",
            }}
          >
            Complete your order verification
          </p>

          <div
            style={{
              background: "#141414",
              padding: "20px",
              borderRadius: "18px",
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
              <strong>Method:</strong>{" "}
              {method}
            </p>

            <p>
              <strong>Amount:</strong> ৳
              {price}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            <div>
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
                  marginTop: "8px",
                  padding: "15px",
                  borderRadius: "12px",
                  border:
                    "1px solid #333",
                  background:
                    "#0d0d0d",
                  color: "#fff",
                }}
              />
            </div>

            <div>
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
                placeholder="Enter Transaction ID"
                style={{
                  width: "100%",
                  marginTop: "8px",
                  padding: "15px",
                  borderRadius: "12px",
                  border:
                    "1px solid #333",
                  background:
                    "#0d0d0d",
                  color: "#fff",
                }}
              />
            </div>

            <div>
              <label>
                Upload Screenshot
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
              />
            </div>

            {preview && (
              <div
                style={{
                  textAlign: "center",
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
                      "16px",
                    border:
                      "1px solid rgba(212,175,55,.3)",
                  }}
                />
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: "100%",
                padding: "18px",
                border: "none",
                borderRadius: "16px",
                background:
                  loading
                    ? "#22c55e"
                    : "linear-gradient(135deg,#d4af37,#f5d76e)",
                color: "#000",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {loading
                ? "✓ Payment Submitted"
                : "Submit Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentCompletePage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            color: "#fff",
            padding: "30px",
          }}
        >
          Loading...
        </div>
      }
    >
      <PaymentCompleteContent />
    </Suspense>
  );
}
