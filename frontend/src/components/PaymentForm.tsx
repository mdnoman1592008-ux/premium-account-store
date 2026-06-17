"use client";

import { useState } from "react";
import { submitPayment } from "../services/payments";

export default function PaymentForm({
  orderId,
  amount,
  paymentMethod,
}: any) {
  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  const [form, setForm] =
    useState({
      senderNumber: "",
      transactionId: "",
    });

  const [file, setFile] =
    useState<File | null>(null);

  const handleImage = (
    e: any
  ) => {
    const selected =
      e.target.files?.[0];

    if (!selected) return;

    setFile(selected);

    setPreview(
      URL.createObjectURL(
        selected
      )
    );
  };

  const submit =
    async () => {
      if (
        form.senderNumber.length !==
        11
      ) {
        return alert(
          "Invalid Sender Number"
        );
      }

      if (
        form.transactionId.length <
        8
      ) {
        return alert(
          "Invalid Transaction ID"
        );
      }

      const data =
        new FormData();

      data.append(
        "orderId",
        orderId
      );

      data.append(
        "amount",
        amount
      );

      data.append(
        "paymentMethod",
        paymentMethod
      );

      data.append(
        "senderNumber",
        form.senderNumber
      );

      data.append(
        "transactionId",
        form.transactionId
      );

      if (file) {
        data.append(
          "screenshot",
          file
        );
      }

      try {
        setLoading(true);

        await submitPayment(
          data,
          localStorage.getItem(
            "token"
          ) || ""
        );

        setSuccess(true);

        setTimeout(() => {
          window.location.href =
            "/order-pending";
        }, 1500);
      } catch (err) {
        alert(
          "Payment Submit Failed"
        );
      } finally {
        setLoading(false);
      }
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
      <h1
        style={{
          textAlign: "center",
          color: "#d4af37",
        }}
      >
        Complete Payment
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#999",
          marginBottom: "25px",
        }}
      >
        Upload payment proof
      </p>

      <div
        style={{
          background: "#141414",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            color: "#d4af37",
          }}
        >
          Order Summary
        </h3>

        <p>
          Order ID: {orderId}
        </p>

        <p>
          Method:{" "}
          {paymentMethod}
        </p>

        <p>
          Amount: ৳{amount}
        </p>
      </div>

      <input
        placeholder="Sender Number"
        value={
          form.senderNumber
        }
        onChange={(e) =>
          setForm({
            ...form,
            senderNumber:
              e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          marginBottom: "15px",
          background:
            "#0d0d0d",
          color: "#fff",
          border:
            "1px solid #333",
        }}
      />

      <input
        placeholder="Transaction ID"
        value={
          form.transactionId
        }
        onChange={(e) =>
          setForm({
            ...form,
            transactionId:
              e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          marginBottom: "15px",
          background:
            "#0d0d0d",
          color: "#fff",
          border:
            "1px solid #333",
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
              maxHeight:
                "350px",
              objectFit:
                "contain",
              borderRadius:
                "16px",
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
        disabled={loading}
        onClick={submit}
        style={{
          width: "100%",
          padding: "18px",
          border: "none",
          borderRadius: "16px",
          background:
            success
              ? "#22c55e"
              : "linear-gradient(135deg,#d4af37,#f5d76e)",
          color: "#000",
          fontWeight: "bold",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {loading
          ? "Submitting..."
          : success
          ? "✓ Submitted"
          : "Submit Payment"}
      </button>
    </div>
  );
}
