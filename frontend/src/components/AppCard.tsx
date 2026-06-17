```tsx
import Link from "next/link";

type Props = {
  name: string;
};

export default function AppCard({
  name,
}: Props) {
  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#111,#181818)",
        border:
          "1px solid rgba(212,175,55,.15)",
        borderRadius: "22px",
        padding: "24px",
        textAlign: "center",
        color: "#fff",
        transition: "0.3s",
        boxShadow:
          "0 10px 30px rgba(0,0,0,.3)",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          margin: "0 auto 15px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#d4af37,#f5d76e)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#000",
          fontWeight: "bold",
          fontSize: "30px",
          boxShadow:
            "0 0 25px rgba(212,175,55,.4)",
        }}
      >
        {name.charAt(0)}
      </div>

      <h3
        style={{
          marginBottom: "10px",
        }}
      >
        {name}
      </h3>

      <div
        style={{
          color: "#fbbf24",
          marginBottom: "10px",
        }}
      >
        ★★★★★
      </div>

      <p
        style={{
          color: "#d4af37",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        Starting From ৳299
      </p>

      <div
        style={{
          display: "inline-block",
          marginTop: "8px",
          marginBottom: "20px",
          padding: "6px 12px",
          borderRadius: "999px",
          background:
            "rgba(34,197,94,.15)",
          color: "#22c55e",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        ✓ In Stock
      </div>

      <Link
        href={`/store/${name
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        <button
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg,#d4af37,#f5d76e)",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          🔥 Buy Now
        </button>
      </Link>
    </div>
  );
}
```
