"use client";

import { useState } from "react";

export default function Newsletter() {

  const [email,setEmail] =
  useState("");

  return (
    <section
      style={{
        padding:"80px 50px"
      }}
    >

      <div className="app-card">

        <h2>
          Subscribe Newsletter
        </h2>

        <p
          style={{
            marginTop:"10px"
          }}
        >
          Get latest offers and
          premium deals.
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }
          style={{
            marginTop:"20px"
          }}
        />

        <button
          style={{
            marginTop:"20px"
          }}
        >
          Subscribe
        </button>

      </div>

    </section>
  );
}
