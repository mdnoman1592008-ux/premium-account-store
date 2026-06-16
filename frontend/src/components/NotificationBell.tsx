"use client";

export default function NotificationBell() {

  return (
    <div
      style={{
        position:"relative",
        cursor:"pointer"
      }}
    >

      <span
        style={{
          fontSize:"24px"
        }}
      >
        🔔
      </span>

      <span
        style={{
          position:"absolute",
          top:"-5px",
          right:"-5px",
          background:"#ef4444",
          color:"#fff",
          width:"18px",
          height:"18px",
          borderRadius:"50%",
          fontSize:"10px",
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        3
      </span>

    </div>
  );
}
