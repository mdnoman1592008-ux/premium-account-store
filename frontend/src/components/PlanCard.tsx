"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  title: string;
  features: string[];
  price?: string;
};

const durationPrices: Record<string, number> = {
  "1 Month": 299,
  "3 Months": 799,
  "6 Months": 1499,
  "12 Months": 2799,
};

export default function PlanCard({
  title,
  features,
}: Props) {
  const [duration, setDuration] = useState("1 Month");

  const selectedPrice =
    durationPrices[duration];

  return (
    <div
      style={{
        background: "#111",
        border: "1px solid rgba(212,175,55,.2)",
        borderRadius: "20px",
        padding: "30px",
        color: "#fff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {title}
      </h2>

      <div>
        {features.map(
          (item, index) => (
            <p key={index}>
              ✓ {item}
            </p>
          )
        )}
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "10px",
          }}
        >
          Select Duration
        </label>

        <select
          value={duration}
          onChange={(e) =>
            setDuration(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            background: "#1a1a1a",
            color: "#fff",
            border:
              "1px solid #333",
          }}
        >
          <option>
            1 Month
          </option>
          <option>
            3 Months
          </option>
          <option>
            6 Months
          </option>
          <option>
            12 Months
          </option>
        </select>
      </div>

      <h3
        style={{
          marginTop: "20px",
          textAlign: "center",
          color: "#d4af37",
          fontSize: "28px",
        }}
      >
        ৳{selectedPrice}
      </h3>

      <Link
        href={`/checkout?plan=${encodeURIComponent(
          title
        )}&duration=${encodeURIComponent(
          duration
        )}&price=${selectedPrice}`}
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
            cursor: "pointer",
          }}
        >
          Continue to Checkout
        </button>
      </Link>
    </div>
  );
}
