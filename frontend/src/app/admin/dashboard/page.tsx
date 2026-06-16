import AdminLayout from
"../../../components/AdminLayout";

import AdminStatsCard from
"../../../components/AdminStatsCard";

import RevenueChart from
"../../../components/RevenueChart";

import RecentPaymentsTable from
"../../../components/RecentPaymentsTable";

export default function AdminDashboardPage() {

  return (
    <AdminLayout>

      <div
        className="grid"
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
          title="Pending Orders"
          value={14}
        />

        <AdminStatsCard
          title="Users"
          value={58}
        />

      </div>

      <div
        style={{
          marginTop:"30px"
        }}
      >
        <RevenueChart />
      </div>

      <div
        style={{
          marginTop:"30px"
        }}
      >
        <RecentPaymentsTable />
      </div>

    </AdminLayout>
  );
}
