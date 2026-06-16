"use client";

import { useState } from "react";
import { submitPayment } from "../services/payments";

export default function PaymentForm({

  orderId,
  amount,
  paymentMethod

}:any){

  const [loading,setLoading] =
  useState(false);

  const [preview,setPreview] =
  useState("");

  const [form,setForm] =
  useState({

    senderNumber:"",
    transactionId:""

  });

  const [file,setFile] =
  useState<File | null>(null);

  const handleImage =
  (e:any)=>{

    const selected =
    e.target.files[0];

    if(!selected) return;

    setFile(selected);

    setPreview(
      URL.createObjectURL(
        selected
      )
    );
  };

  const submit =
  async ()=>{

    if(
      form.senderNumber.length !== 11
    ){
      return alert(
        "Invalid number"
      );
    }

    if(
      form.transactionId.length < 8
    ){
      return alert(
        "Invalid Transaction ID"
      );
    }

    const data =
    new FormData();

    data.append(
      "orderId",
      orderId
    );

    data.append(
      "amount",
      amount
    );

    data.append(
      "paymentMethod",
      paymentMethod
    );

    data.append(
      "senderNumber",
      form.senderNumber
    );

    data.append(
      "transactionId",
      form.transactionId
    );

    if(file){
      data.append(
        "screenshot",
        file
      );
    }

    try{

      setLoading(true);

      await submitPayment(
        data,
        localStorage.getItem(
          "token"
        ) || ""
      );

      alert(
        "Payment Submitted"
      );

    }catch(err){

      alert(
        "Submit Failed"
      );

    }finally{

      setLoading(false);

    }
  };

  return (

    <div className="app-card">

      <input
        placeholder=
        "Sender Number"
        value={
          form.senderNumber
        }
        onChange={(e)=>
        setForm({
          ...form,
          senderNumber:
          e.target.value
        })}
      />

      <input
        placeholder=
        "Transaction ID"
        value={
          form.transactionId
        }
        onChange={(e)=>
        setForm({
          ...form,
          transactionId:
          e.target.value
        })}
      />

      <input
        type="file"
        onChange={
          handleImage
        }
      />

      {preview &&

      <img
        src={preview}
        width="200"
      />

      }

      <button
        disabled={loading}
        onClick={submit}
      >

        {loading
        ? "Submitting..."
        : "Submit Payment"}

      </button>

    </div>

  );
}
