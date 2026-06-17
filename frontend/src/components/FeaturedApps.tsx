import AppCard from "./AppCard";

const apps = [
  "ChatGPT",
  "Gemini",
  "Grok",
  "Veo",
  "Spotify",
  "YouTube",
  "CapCut",
  "InShot"
];

export default function FeaturedApps() {

  return (
    <section
      style={{
        padding:"80px 50px"
      }}
    >

      <h2>
        Featured Apps
      </h2>

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
  slug={app.toLowerCase()}
/>
        ))}

      </div>

    </section>
  );
}
