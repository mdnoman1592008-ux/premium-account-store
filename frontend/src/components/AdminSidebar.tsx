export default function AdminSidebar() {
  return (
    <aside
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#111",
        padding: "20px",
        borderRight: "1px solid #222"
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          marginBottom: "30px"
        }}
      >
        Admin Panel
      </h2>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <li>Dashboard</li>
        <li>Orders</li>
        <li>Apps</li>
        <li>Plans</li>
        <li>Inventory</li>
        <li>Payments</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}
