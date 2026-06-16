import Link from "next/link";

export default function HeroSection() {

  return (
    <section
      className="hero"
    >

      <h1>
        Premium Account Store
      </h1>

      <p>
        ChatGPT, Gemini, Grok,
        Veo, Spotify, YouTube,
        CapCut & More
      </p>

      <div
        style={{
          marginTop:"30px",
          display:"flex",
          justifyContent:"center",
          gap:"15px"
        }}
      >

        <Link href="/store">

          <button>
            Explore Plans
          </button>

        </Link>

        <Link href="/contact">

          <button>
            Contact Support
          </button>

        </Link>

      </div>

    </section>
  );
}
