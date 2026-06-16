"use client";

import { useState } from "react";

export default function UserDropdown() {

  const [open,setOpen] =
  useState(false);

  return (
    <div
      style={{
        position:"relative"
      }}
    >

      <button
        onClick={()=>
          setOpen(!open)
        }
      >
        My Account
      </button>

      {open && (

        <div
          style={{
            position:"absolute",
            top:"45px",
            right:"0",
            width:"200px",
            background:"#151515",
            border:"1px solid #333",
            borderRadius:"12px",
            padding:"15px"
          }}
        >

          <p>Dashboard</p>

          <p>My Orders</p>

          <p>Profile</p>

          <p>Logout</p>

        </div>

      )}

    </div>
  );
}
