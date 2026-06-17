"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function PaymentMethodPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const method = (params.method as string) || "bkash";

  const plan = searchParams.get("plan") || "";
  const duration = searchParams.get("duration") || "";
  const price = searchParams.get("price") || "0";

  const paymentMethods: Record<
    string,
    {
      name: string;
      number: string;
      qr: string;
    }
  > = {
    bkash: {
      name: "bKash",
      number: "01712345678",
      qr: "/qr/bkash-qr.png",
    },
    nagad: {
      name: "Nagad",
      number: "01812345678",
      qr: "/qr/nagad-qr.png",
    },
    rocket: {
      name: "Rocket",
      number: "01912345678",
      qr: "/qr/rocket-qr.png",
    },
    upay: {
      name: "Upay",
      number: "01612345678",
      qr: "/qr/upay-qr.png",
    },
    cellfin: {
      name: "Cellfin",
      number: "01512345678",
      qr: "/qr/cellfin-qr.png",
    },
  };

  const data =
    paymentMethods[method] ||
    paymentMethods.bkash;

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(
        data.number
      );
      alert("Number copied");
    } catch {
      alert("Copy failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#d4af37",
            marginBottom: "30px",
          }}
        >
          {data.name} Payment
        </h1>

        <div
          style={{
            background: "#111",
            border: "1px solid rgba(212,175,55,.2)",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={data.qr}
              alt={data.name}
              style={{
                width: "250px",
                maxWidth: "100%",
                borderRadius: "12px",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "25px",
              lineHeight: "2",
            }}
          >
            <p>
              <strong>Plan:</strong> {plan}
            </p>

            <p>
              <strong>Duration:</strong>{" "}
              {duration}
            </p>

            <p>
              <strong>Amount:</strong> ৳
              {price}
            </p>
          </div>

          <div
            style={{
              marginTop: "20px",
            }}
          >
            <h3>Payment Number</h3>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <input
                value={data.number}
                readOnly
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "10px",
                  border: "1px solid #333",
                }}
              />

              <button
                onClick={copyNumber}
                style={{
                  padding: "12px 20px",
                  border: "none",
                  borderRadius: "10px",
                  background: "#d4af37",
                  color: "#000",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Copy
              </button>
            </div>
          </div>

          <Link
            href={`/payment-complete?method=${method}&plan=${encodeURIComponent(
              plan
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
                marginTop: "30px",
                padding: "15px",
                border: "none",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#d4af37,#f5d76e)",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Payment Complete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
