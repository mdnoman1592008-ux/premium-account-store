import AppCard from "../../components/AppCard";

const apps = [
  "ChatGPT",
  "Gemini",
  "Grok",
  "Veo",
  "YouTube",
  "Spotify",
  "CapCut",
  "InShot",
];

export default function StorePage() {
  return (
    <div
      style={{
        padding: "50px",
      }}
    >
      <h1
        style={{
          color: "#fff",
          marginBottom: "30px",
        }}
      >
        Store
      </h1>

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "24px",
        }}
      >
        {apps.map((app) => (
          <AppCard
            key={app}
            name={app}
          />
        ))}
      </div>
    </div>
  );
}
