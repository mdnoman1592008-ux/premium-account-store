"use client";

import { useState } from "react";

export default function ContactForm() {

  const [form,setForm] =
  useState({
    name:"",
    email:"",
    message:""
  });

  return (
    <form className="app-card">

      <h2>
        Contact Support
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e)=>
          setForm({
            ...form,
            name:e.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e)=>
          setForm({
            ...form,
            email:e.target.value
          })
        }
      />

      <textarea
        placeholder="Your Message"
        value={form.message}
        onChange={(e)=>
          setForm({
            ...form,
            message:e.target.value
          })
        }
        rows={6}
      />

      <button>
        Send Message
      </button>

    </form>
  );
}
