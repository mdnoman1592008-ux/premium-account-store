"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  title: string;
  features: string[];
};

const durationPrices = {
  "1 Month": 299,
  "3 Months": 799,
  "6 Months": 1499,
  "12 Months": 2799,
};

export default function PlanCard({
  title,
  features,
}: Props) {
  const [duration, setDuration] =
    useState("1 Month");

  const price =
    durationPrices[
      duration as keyof typeof durationPrices
    ];

  return (
    <div className="app-card">
      <h2>{title}</h2>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        {features.map((item, index) => (
          <p key={index}>
            ✓ {item}
          </p>
        ))}
      </div>

      {/* Duration Selection */}
      <div
        style={{
          marginTop: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "10px",
            fontWeight: "bold",
          }}
        >
          Select Duration
        </label>

        <select
          value={duration}
          onChange={(e) =>
            setDuration(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #444",
            background: "#111",
            color: "#fff",
          }}
        >
          <option>1 Month</option>
          <option>3 Months</option>
          <option>6 Months</option>
          <option>12 Months</option>
        </select>
      </div>

      <h3
        style={{
          marginTop: "20px",
          color: "#d4af37",
          fontSize: "28px",
        }}
      >
        ৳{price}
      </h3>

      <Link
        href={`/checkout?plan=${encodeURIComponent(
          title
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
            marginTop: "20px",
            padding: "14px",
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
          Continue to Checkout
        </button>
      </Link>
    </div>
  );
}
