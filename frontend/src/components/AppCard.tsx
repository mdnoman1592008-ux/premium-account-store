import Image from "next/image";
import Link from "next/link";

interface AppCardProps {
  name: string;
  slug: string;
  description?: string;
  price?: string;
}

export default function AppCard({
  name,
  slug,
  description,
  price,
}: AppCardProps) {
  return (
    <Link
      href={`/store/${slug}`}
      style={{
        textDecoration: "none",
      }}
    >
      <div
        style={{
          background: "#111",
          border: "1px solid rgba(212,175,55,.15)",
          borderRadius: "20px",
          padding: "20px",
          cursor: "pointer",
          transition: "all .3s ease",
          boxShadow: "0 10px 30px rgba(0,0,0,.35)",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <Image
            src={`/apps/${slug}.png`}
            alt={name}
            width={90}
            height={90}
            style={{
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
        </div>

        <h3
          style={{
            color: "#fff",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          {name}
        </h3>

        <p
          style={{
            color: "#aaa",
            fontSize: "14px",
            textAlign: "center",
            minHeight: "40px",
          }}
        >
          {description || "Premium Subscription"}
        </p>

        {price && (
          <div
            style={{
              textAlign: "center",
              marginTop: "12px",
              color: "#d4af37",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            ৳ {price}
          </div>
        )}

        <button
          style={{
            width: "100%",
            marginTop: "15px",
            padding: "12px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(135deg,#d4af37,#f5d76e)",
            color: "#000",
            fontWeight: "700",
            cursor: "pointer",
          }}
        >
          View Plans
        </button>
      </div>
    </Link>
  );
}
