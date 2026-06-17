import AppCard from "./AppCard";

const apps = [
  {
    name: "ChatGPT",
    image: "/apps/chatgpt.png",
  },
  {
    name: "Gemini",
    image: "/apps/gemini.png",
  },
  {
    name: "Grok",
    image: "/apps/grok.png",
  },
  {
    name: "Veo",
    image: "/apps/veo.png",
  },
  {
    name: "Spotify",
    image: "/apps/spotify.png",
  },
  {
    name: "YouTube",
    image: "/apps/youtube.png",
  },
  {
    name: "CapCut",
    image: "/apps/capcut.png",
  },
  {
    name: "InShot",
    image: "/apps/inshot.png",
  },
];

export default function FeaturedApps() {
  return (
    <section
      style={{
        padding: "80px 50px",
      }}
    >
      <h2
        style={{
          color: "#fff",
          fontSize: "36px",
          marginBottom: "30px",
        }}
      >
        Featured Apps
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {apps.map((app) => (
          <AppCard
            key={app.name}
            name={app.name}
            image={app.image}
          />
        ))}
      </div>
    </section>
  );
}
