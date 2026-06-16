type Props = {
  app: string;
  plan: string;
  duration: string;
  price: string;
};

export default function OrderSummary({
  app,
  plan,
  duration,
  price
}: Props) {
  return (
    <div className="app-card">

      <h2>
        Order Summary
      </h2>

      <p>
        App: {app}
      </p>

      <p>
        Plan: {plan}
      </p>

      <p>
        Duration: {duration}
      </p>

      <h3
        style={{
          color:"#d4af37"
        }}
      >
        {price}
      </h3>

    </div>
  );
}
