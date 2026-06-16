import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppCard from "../components/AppCard";

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

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <h1>
          Premium Account Store
        </h1>

        <p>
          Premium Subscriptions At
          Affordable Prices
        </p>

        <button>
          Explore Plans
        </button>

      </section>

      <section className="apps">

        <h2>
          Available Apps
        </h2>

        <div className="grid">

          {apps.map((app) => (
            <AppCard
              key={app}
              name={app}
            />
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}
