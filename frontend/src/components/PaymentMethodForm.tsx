"use client";

import { useState } from "react";

export default function PaymentMethodForm() {

  const [form,setForm] =
  useState({
    name:"",
    accountNumber:"",
    accountType:"Personal"
  });

  return (
    <form className="app-card">

      <h2>
        Payment Method
      </h2>

      <input
        type="text"
        placeholder="Method Name"
        value={form.name}
        onChange={(e)=>
          setForm({
            ...form,
            name:e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Account Number"
        value={form.accountNumber}
        onChange={(e)=>
          setForm({
            ...form,
            accountNumber:e.target.value
          })
        }
      />

      <select
        value={form.accountType}
        onChange={(e)=>
          setForm({
            ...form,
            accountType:e.target.value
          })
        }
      >
        <option>
          Personal
        </option>

        <option>
          Merchant
        </option>
      </select>

      <button>
        Save Method
      </button>

    </form>
  );
}
