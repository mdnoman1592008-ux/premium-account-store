import Link from "next/link";

type Props = {
  title: string;
  features: string[];
  price: string;
};

export default function PlanCard({
  title,
  features,
  price,
}: Props) {
  return (
    <div className="app-card">
      <h2>{title}</h2>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        {features.map((item, index) => (
          <p key={index}>✓ {item}</p>
        ))}
      </div>

      <h3
        style={{
          marginTop: "20px",
          color: "#d4af37",
        }}
      >
        {price}
      </h3>

      <Link
        href={`/checkout?plan=${encodeURIComponent(title)}`}
        style={{
          textDecoration: "none",
        }}
      >
        <button
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "#d4af37",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Select Plan
        </button>
      </Link>
    </div>
  );
}
