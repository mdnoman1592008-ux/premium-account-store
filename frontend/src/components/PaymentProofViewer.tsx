"use client";

import { useState } from "react";

type Props = {

  method:string;
  accountNumber:string;
  accountType:string;

};

export default function
PaymentProofViewer({

  method,
  accountNumber,
  accountType

}:Props){

  const [senderNumber,
  setSenderNumber] =
  useState("");

  const [trxId,
  setTrxId] =
  useState("");

  return (

    <div className="app-card">

      <h2>
        {method}
      </h2>

      <p>
        Number:
        {accountNumber}
      </p>

      <p>
        Type:
        {accountType}
      </p>

      <input
        type="text"
        placeholder=
        "Sender Number"
        value={senderNumber}
        onChange={(e)=>
        setSenderNumber(
          e.target.value
        )}
      />

      <input
        type="text"
        placeholder=
        "Transaction ID"
        value={trxId}
        onChange={(e)=>
        setTrxId(
          e.target.value
        )}
      />

      <input
        type="file"
      />

      <button>
        Submit Payment
      </button>

    </div>

  );
}
