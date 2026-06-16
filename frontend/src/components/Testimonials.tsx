export default function Testimonials() {

  return (
    <section
      style={{
        padding:"80px 50px"
      }}
    >

      <h2
        style={{
          textAlign:"center"
        }}
      >
        Customer Reviews
      </h2>

      <div
        className="grid"
        style={{
          marginTop:"40px"
        }}
      >

        <div className="app-card">
          <h3>Rahim</h3>
          <p>
            Very fast delivery.
            Recommended.
          </p>
        </div>

        <div className="app-card">
          <h3>Karim</h3>
          <p>
            Genuine account and
            excellent support.
          </p>
        </div>

        <div className="app-card">
          <h3>Noman</h3>
          <p>
            Best premium store
            I have used.
          </p>
        </div>

      </div>

    </section>
  );
}
