export default function StatsSection() {

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
        Our Statistics
      </h2>

      <div
        className="grid"
        style={{
          marginTop:"40px"
        }}
      >

        <div className="app-card">
          <h1>5000+</h1>
          <p>Orders Completed</p>
        </div>

        <div className="app-card">
          <h1>2000+</h1>
          <p>Happy Customers</p>
        </div>

        <div className="app-card">
          <h1>99%</h1>
          <p>Success Rate</p>
        </div>

        <div className="app-card">
          <h1>24/7</h1>
          <p>Support</p>
        </div>

      </div>

    </section>
  );
}
