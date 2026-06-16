"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#151515",
          color: "#fff",
          border: "1px solid #d4af37"
        }
      }}
    />
  );
}
