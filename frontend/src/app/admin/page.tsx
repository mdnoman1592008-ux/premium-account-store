import AdminSidebar from
"../../components/AdminSidebar";

import AdminStatsCard from
"../../components/AdminStatsCard";

import AdminOrderTable from
"../../components/AdminOrderTable";

export default function AdminPage() {

  return (
    <div
      style={{
        display: "flex"
      }}
    >

      <AdminSidebar />

      <div
        style={{
          flex: 1,
          padding: "30px"
        }}
      >

        <h1>
          Admin Dashboard
        </h1>

        <div
          className="grid"
          style={{
            marginTop: "30px"
          }}
        >

          <AdminStatsCard
            title="Total Orders"
            value={125}
          />

          <AdminStatsCard
            title="Revenue"
            value="৳85,000"
          />

          <AdminStatsCard
            title="Pending"
            value={14}
          />

          <AdminStatsCard
            title="Users"
            value={58}
          />

        </div>

        <div
          style={{
            marginTop: "40px"
          }}
        >
          <AdminOrderTable />
        </div>

      </div>

    </div>
  );
}
