"use client";

import { useState } from "react";

export default function FAQ() {

  const faqs = [
    {
      question:
      "How long does delivery take?",
      answer:
      "Usually within a few minutes after approval."
    },
    {
      question:
      "Which payment methods are available?",
      answer:
      "bKash, Nagad, Rocket, Upay and Cellfin."
    },
    {
      question:
      "Do you provide support?",
      answer:
      "Yes, we provide customer support."
    }
  ];

  const [open,setOpen] =
  useState<number | null>(null);

  return (
    <section
      style={{
        padding:"80px 50px"
      }}
    >

      <h2
        style={{
          textAlign:"center"
        }}
      >
        Frequently Asked Questions
      </h2>

      <div
        style={{
          marginTop:"40px",
          maxWidth:"900px",
          marginInline:"auto"
        }}
      >

        {faqs.map((faq,index)=>(
          <div
            key={index}
            className="app-card"
            style={{
              marginBottom:"15px"
            }}
          >

            <h3
              onClick={()=>
                setOpen(
                  open === index
                  ? null
                  : index
                )
              }
              style={{
                cursor:"pointer"
              }}
            >
              {faq.question}
            </h3>

            {open === index && (
              <p
                style={{
                  marginTop:"15px"
                }}
              >
                {faq.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}
