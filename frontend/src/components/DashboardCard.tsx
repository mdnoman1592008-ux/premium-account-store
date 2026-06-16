type Props = {
  title: string;
  value: string | number;
};

export default function DashboardCard({
  title,
  value
}: Props) {
  return (
    <div className="app-card">

      <h3>{title}</h3>

      <h1
        style={{
          marginTop:"15px",
          color:"#d4af37"
        }}
      >
        {value}
      </h1>

    </div>
  );
}
