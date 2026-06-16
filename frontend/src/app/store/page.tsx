import AppCard from
"../../components/AppCard";

const apps = [
  "ChatGPT",
  "Gemini",
  "Grok",
  "Veo",
  "YouTube",
  "Spotify",
  "CapCut",
  "InShot"
];

export default function StorePage() {
  return (
    <div
      style={{
        padding:"50px"
      }}
    >

      <h1>
        Store
      </h1>

      <div
        className="grid"
        style={{
          marginTop:"30px"
        }}
      >

        {apps.map((app)=>(
          <AppCard
            key={app}
            name={app}
          />
        ))}

      </div>

    </div>
  );
}
