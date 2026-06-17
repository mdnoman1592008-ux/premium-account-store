import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        background: "#000",
      }}
    >
      <Link href="/">Home</Link>

      <Link href="/store">Store</Link>

      <Link href="/orders">My Orders</Link>

      <Link href="/contact">Contact</Link>

      <Link href="/login">Login</Link>
    </nav>
  );
}
