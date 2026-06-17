```tsx
import Link from "next/link";

type Props = {
  name: string;
  image?: string;
  stock?: string;
};

export default function AppCard({
  name,
  image,
  stock = "Available",
}: Props) {
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <div
      style={{
        background:
          "rgba(255,255,255,.75)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter:
          "blur(18px)",
        border:
          "1px solid rgba(255,255,255,.45)",
        borderRadius: "28px",
        overflow: "hidden",
        position: "relative",
        transition: "all .3s ease",
        boxShadow:
          "0 20px 40px rgba(0,0,0,.08)",
      }}
    >
      {/* Blue Glow */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background:
            "rgba(37,99,235,.12)",
          filter: "blur(50px)",
        }}
      />

      {/* App Image */}
      <div
        style={{
          paddingTop: "30px",
          textAlign: "center",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={name}
            style={{
              width: "95px",
              height: "95px",
              objectFit: "contain",
              transition: ".3s",
            }}
          />
        ) : (
          <div
            style={{
              width: "95px",
              height: "95px",
              margin: "0 auto",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#2563eb,#60a5fa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "34px",
              fontWeight: "bold",
              boxShadow:
                "0 10px 30px rgba(37,99,235,.25)",
            }}
          >
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "22px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "24px",
            color: "#111827",
            fontWeight: 800,
          }}
        >
          {name}
        </h3>

        <div
          style={{
            color: "#fbbf24",
            marginTop: "10px",
            fontSize: "18px",
          }}
        >
          ★★★★★
        </div>

        <p
          style={{
            color: "#6b7280",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          Premium Subscription
        </p>

        <div
          style={{
            display: "inline-block",
            marginTop: "12px",
            padding: "7px 14px",
            borderRadius: "999px",
            background:
              "rgba(34,197,94,.12)",
            color: "#16a34a",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          ✓ {stock}
        </div>

        <Link
          href={`/store/${slug}`}
          style={{
            textDecoration: "none",
          }}
        >
          <button
            style={{
              width: "100%",
              marginTop: "22px",
              padding: "15px",
              border: "none",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg,#2563eb,#3b82f6)",
              color: "#fff",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow:
                "0 10px 25px rgba(37,99,235,.25)",
            }}
          >
            🚀 Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}
```
