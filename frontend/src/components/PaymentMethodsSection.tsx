export default function PaymentMethodsSection() {

  const methods = [
    "bKash",
    "Nagad",
    "Rocket",
    "Upay",
    "Cellfin"
  ];

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
        Payment Methods
      </h2>

      <div
        className="grid"
        style={{
          marginTop:"40px"
        }}
      >

        {methods.map((method)=>(
          <div
            key={method}
            className="app-card"
          >
            <h3>{method}</h3>
            <p>
              Secure Payment
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}
