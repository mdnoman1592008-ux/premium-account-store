type Props = {
  title: string;
  value: string | number;
};

export default function AdminStatsCard({
  title,
  value,
}: Props) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: "#1a1a1a",
        border: "1px solid #333",
      }}
    >
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
}
