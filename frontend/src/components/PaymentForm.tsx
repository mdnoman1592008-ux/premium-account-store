"use client";

import { useState } from "react";

export default function PaymentForm() {

  const [form, setForm] =
    useState({
      senderNumber: "",
      transactionId: ""
    });

  return (
    <form className="app-card">

      <h2>
        Payment Information
      </h2>

      <input
        type="text"
        placeholder="Sender Number"
        value={form.senderNumber}
        onChange={(e)=>
          setForm({
            ...form,
            senderNumber:e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Transaction ID"
        value={form.transactionId}
        onChange={(e)=>
          setForm({
            ...form,
            transactionId:e.target.value
          })
        }
      />

      <input
        type="file"
      />

      <button type="submit">
        Submit Payment
      </button>

    </form>
  );
}
