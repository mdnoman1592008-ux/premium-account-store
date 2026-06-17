"use client";

import { useState } from "react";

export default function AddPlanPage() {
  const [form, setForm] = useState({
    appName: "",
    planName: "",
    duration: "",
    price: "",
    discount: "",
    features: ""
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log(form);

    alert("Plan Saved Successfully");
  };

  return (
    <div
      style={{
        padding: "30px"
      }}
    >
      <h1
        style={{
          marginBottom: "20px"
        }}
      >
        Add New Plan
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "700px"
        }}
      >
        <input
          type="text"
          name="appName"
          placeholder="App Name"
          value={form.appName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="planName"
          placeholder="Plan Name"
          value={form.planName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (3 Months / 6 Months / 1 Year)"
          value={form.duration}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />

        <input
          type="number"
          name="discount"
          placeholder="Discount (%)"
          value={form.discount}
          onChange={handleChange}
        />

        <textarea
          name="features"
          placeholder="Plan Features"
          rows={6}
          value={form.features}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            cursor: "pointer"
          }}
        >
          Save Plan
        </button>
      </form>
    </div>
  );
}
