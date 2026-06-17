"use client";

import Link from "next/link";

type Props = {
  title: string;
  features: string[];
  price?: string;
};

export default function PlanCard({
  title,
  features,
  price,
}: Props) {
  return (
    <div
      style={{
        background: "#111",
        border: "1px solid rgba(212,175,55,.2)",
        borderRadius: "24px",
        padding: "30px",
        color: "#fff",
        boxShadow:
          "0 10px 40px rgba(0,0,0,.4)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "34px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {features.map((item, index) => (
          <p
            key={index}
            style={{
              color: "#ddd",
              fontSize: "18px",
            }}
          >
            ✓ {item}
          </p>
        ))}
      </div>

      {price && (
        <h3
          style={{
            marginTop: "25px",
            textAlign: "center",
            color: "#d4af37",
            fontSize: "30px",
          }}
        >
          {price}
        </h3>
      )}

      <Link
        href={`/duration?plan=${encodeURIComponent(
          title
        )}`}
        style={{
          textDecoration: "none",
        }}
      >
        <button
          style={{
            width: "100%",
            marginTop: "25px",
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
          Select Plan
        </button>
      </Link>
    </div>
  );
}
