import DashboardCard from
"../../components/DashboardCard";

export default function DashboardPage() {

  return (
    <div
      style={{
        padding:"50px"
      }}
    >

      <h1>
        User Dashboard
      </h1>

      <div
        className="grid"
        style={{
          marginTop:"30px"
        }}
      >

        <DashboardCard
          title="Total Orders"
          value={12}
        />

        <DashboardCard
          title="Pending Orders"
          value={4}
        />

        <DashboardCard
          title="Approved Orders"
          value={7}
        />

        <DashboardCard
          title="Rejected Orders"
          value={1}
        />

      </div>

    </div>
  );
}
