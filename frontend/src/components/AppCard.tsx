import Link from "next/link";

type Props = {
  name: string;
  image?: string;
  price?: string;
  stock?: string;
};

export default function AppCard({
  name,
  image,
  price = "Starting ৳299",
  stock = "In Stock",
}: Props) {
  const slug = name
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#0f0f0f,#181818)",
        border:
          "1px solid rgba(212,175,55,.15)",
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        transition: "all .3s ease",
        boxShadow:
          "0 15px 40px rgba(0,0,0,.35)",
      }}
    >
      {/* Gold Glow */}
      <div
        style={{
          position: "absolute",
          top: "-50px",
          right: "-50px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background:
            "rgba(212,175,55,.12)",
          filter: "blur(40px)",
        }}
      />

      {/* Image */}
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
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              width: "90px",
              height: "90px",
              margin: "0 auto",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#d4af37,#f5d76e)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontSize: "32px",
              fontWeight: "bold",
              boxShadow:
                "0 0 25px rgba(212,175,55,.35)",
            }}
          >
            {name.charAt(0)}
          </div>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 700,
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
            color: "#9ca3af",
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
            padding: "6px 14px",
            borderRadius: "999px",
            background:
              "rgba(34,197,94,.15)",
            color: "#22c55e",
            fontSize: "13px",
            fontWeight: "bold",
          }}
        >
          ✓ {stock}
        </div>

        <div
          style={{
            marginTop: "16px",
            color: "#d4af37",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {price}
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
              marginTop: "20px",
              padding: "14px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#d4af37,#f5d76e)",
              color: "#000",
              fontSize: "15px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow:
                "0 10px 25px rgba(212,175,55,.3)",
            }}
          >
            🔥 Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}
