"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function PaymentCompleteContent() {
const params = useSearchParams();
const router = useRouter();

const [transactionId, setTransactionId] =
useState("");

const [screenshot, setScreenshot] =
useState<File | null>(null);

const plan =
params.get("plan") || "";

const duration =
params.get("duration") || "";

const price =
params.get("price") || "0";

const method =
params.get("method") || "";

const handleSubmit = () => {
if (!transactionId) {
alert("Enter Transaction ID");
return;
}

```
if (!screenshot) {
  alert(
    "Upload Payment Screenshot"
  );
  return;
}

router.push(
  `/order-pending?plan=${encodeURIComponent(
    plan
  )}&duration=${encodeURIComponent(
    duration
  )}&price=${price}&method=${method}&trx=${transactionId}`
);
```

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
Submit Payment </h1>

```
    <div
      style={{
        background: "#111",
        border:
          "1px solid rgba(212,175,55,.2)",
        borderRadius: "20px",
        padding: "30px",
      }}
    >
      <div>
        <p>
          <strong>Plan:</strong>{" "}
          {plan}
        </p>

        <p>
          <strong>Duration:</strong>{" "}
          {duration}
        </p>

        <p>
          <strong>Amount:</strong>{" "}
          ৳{price}
        </p>

        <p>
          <strong>Method:</strong>{" "}
          {method}
        </p>
      </div>

      <div
        style={{
          marginTop: "25px",
        }}
      >
        <label>
          Transaction ID
        </label>

        <input
          type="text"
          value={transactionId}
          onChange={(e) =>
            setTransactionId(
              e.target.value
            )
          }
          placeholder="Enter Transaction ID"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "10px",
            borderRadius: "10px",
            border:
              "1px solid #333",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "25px",
        }}
      >
        <label>
          Upload Screenshot
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setScreenshot(
              e.target.files?.[0] ||
                null
            )
          }
          style={{
            width: "100%",
            marginTop: "10px",
          }}
        />
      </div>

      <button
        onClick={handleSubmit}
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
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Submit Payment
      </button>
    </div>
  </div>
</div>
```

);
}

export default function PaymentCompletePage() {
return (
<Suspense
fallback={<div>Loading...</div>}
> <PaymentCompleteContent /> </Suspense>
);
}
