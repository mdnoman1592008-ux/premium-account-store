"use client";

import { useState } from "react";

type Props = {
  method: string;
  accountNumber: string;
  accountType: string;
};

export default function PaymentProofViewer({
  method,
  accountNumber,
  accountType,
}: Props) {
  const [senderNumber, setSenderNumber] =
    useState("");

  const [trxId, setTrxId] =
    useState("");

  const [preview, setPreview] =
    useState("");

  const [copied, setCopied] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const copyNumber = async () => {
    await navigator.clipboard.writeText(
      accountNumber
    );

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    setPreview(
      URL.createObjectURL(file)
    );
  };

  const submitPayment = () => {
    if (senderNumber.length !== 11) {
      alert(
        "Enter valid sender number"
      );
      return;
    }

    if (trxId.length < 6) {
      alert(
        "Enter valid transaction ID"
      );
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      window.location.href =
        "/order-pending";
    }, 1500);
  };

  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "0 auto",
        background:
          "linear-gradient(145deg,#111,#181818)",
        borderRadius: "28px",
        padding: "35px",
        color: "#fff",
        border:
          "1px solid rgba(212,175,55,.2)",
        boxShadow:
          "0 20px 60px rgba(212,175,55,.15)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        <h1
          style={{
            color: "#d4af37",
            marginBottom: "10px",
          }}
        >
          {method} Payment
        </h1>

        <p
          style={{
            color: "#999",
          }}
        >
          Secure Payment Verification
        </p>
      </div>

      <div
        style={{
          background: "#141414",
          padding: "20px",
          borderRadius: "18px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <img
          src={`/qr/${method.toLowerCase()}-qr.png`}
          alt="QR"
          style={{
            width: "260px",
            maxWidth: "100%",
            background: "#fff",
            padding: "12px",
            borderRadius: "16px",
          }}
        />

        <p
          style={{
            color: "#d4af37",
            marginTop: "15px",
            fontWeight: "bold",
          }}
        >
          Scan QR Code To Pay
        </p>
      </div>

      <div
        style={{
          background: "#141414",
          padding: "20px",
          borderRadius: "18px",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            color: "#d4af37",
            marginBottom: "10px",
          }}
        >
          Payment Information
        </h3>

        <p>
          <strong>Number:</strong>{" "}
          {accountNumber}
        </p>

        <p>
          <strong>Type:</strong>{" "}
          {accountType}
        </p>

        <button
          onClick={copyNumber}
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "14px",
            border: "none",
            borderRadius: "12px",
            background: copied
              ? "#22c55e"
              : "#d4af37",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {copied
            ? "✓ Number Copied"
            : "Copy Number"}
        </button>
      </div>

      <input
        type="text"
        placeholder="Sender Number"
        value={senderNumber}
        onChange={(e) =>
          setSenderNumber(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
          border: "1px solid #333",
          background: "#0d0d0d",
          color: "#fff",
        }}
      />

      <input
        type="text"
        placeholder="Transaction ID"
        value={trxId}
        onChange={(e) =>
          setTrxId(e.target.value)
        }
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
          border: "1px solid #333",
          background: "#0d0d0d",
          color: "#fff",
        }}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        style={{
          marginBottom: "20px",
          width: "100%",
        }}
      />

      {preview && (
        <div
          style={{
            marginBottom: "20px",
          }}
        >
          <img
            src={preview}
            alt="Preview"
            style={{
              width: "100%",
              maxHeight: "350px",
              objectFit: "contain",
              borderRadius: "16px",
              border:
                "1px solid rgba(212,175,55,.2)",
            }}
          />

          <p
            style={{
              color: "#22c55e",
              marginTop: "10px",
            }}
          >
            ✓ Screenshot Ready
          </p>
        </div>
      )}

      <button
        onClick={submitPayment}
        disabled={submitting}
        style={{
          width: "100%",
          padding: "18px",
          border: "none",
          borderRadius: "16px",
          background: submitting
            ? "#22c55e"
            : "linear-gradient(135deg,#d4af37,#f5d76e)",
          color: "#000",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {submitting
          ? "✓ Payment Submitted"
          : "Submit Payment"}
      </button>
    </div>
  );
}
