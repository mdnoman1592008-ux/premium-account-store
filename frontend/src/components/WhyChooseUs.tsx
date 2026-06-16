export default function WhyChooseUs() {

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
        Why Choose Us
      </h2>

      <div
        className="grid"
        style={{
          marginTop:"40px"
        }}
      >

        <div className="app-card">
          <h3>Instant Delivery</h3>
          <p>
            Fast account delivery
            after verification.
          </p>
        </div>

        <div className="app-card">
          <h3>Secure Payment</h3>
          <p>
            Safe payment process
            with verification.
          </p>
        </div>

        <div className="app-card">
          <h3>Affordable Price</h3>
          <p>
            Premium subscriptions
            at lower prices.
          </p>
        </div>

        <div className="app-card">
          <h3>24/7 Support</h3>
          <p>
            Dedicated support for
            all customers.
          </p>
        </div>

      </div>

    </section>
  );
}
