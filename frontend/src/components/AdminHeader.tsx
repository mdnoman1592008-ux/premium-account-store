"use client";

import NotificationBell from
"./NotificationBell";

import UserDropdown from
"./UserDropdown";

export default function AdminHeader() {

  return (
    <header
      style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:"30px"
      }}
    >

      <div>

        <h1>
          Admin Dashboard
        </h1>

        <p>
          Welcome Back Admin
        </p>

      </div>

      <div
        style={{
          display:"flex",
          alignItems:"center",
          gap:"20px"
        }}
      >

        <NotificationBell />

        <UserDropdown />

      </div>

    </header>
  );
}
