import Link from "next/link";

export default function NotFound() {

  return (
    <div
      style={{
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
      }}
    >

      <h1
        style={{
          fontSize:"80px",
          color:"#d4af37"
        }}
      >
        404
      </h1>

      <h2>
        Page Not Found
      </h2>

      <p
        style={{
          marginTop:"10px"
        }}
      >
        The page you are
        looking for does not
        exist.
      </p>

      <Link
        href="/"
        style={{
          marginTop:"20px",
          background:"#d4af37",
          color:"#000",
          padding:"12px 20px",
          borderRadius:"10px"
        }}
      >
        Go Home
      </Link>

    </div>
  );
}
