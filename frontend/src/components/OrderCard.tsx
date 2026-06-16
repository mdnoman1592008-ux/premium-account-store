type Props = {
  orderId: string;
  app: string;
  plan: string;
  duration: string;
  amount: string;
  status: string;
};

export default function OrderCard({
  orderId,
  app,
  plan,
  duration,
  amount,
  status
}: Props) {

  return (
    <div className="app-card">

      <h3>
        Order #{orderId}
      </h3>

      <p>
        App: {app}
      </p>

      <p>
        Plan: {plan}
      </p>

      <p>
        Duration: {duration}
      </p>

      <p>
        Amount: {amount}
      </p>

      <p
        style={{
          marginTop:"10px",
          color:
            status === "approved"
              ? "#4ade80"
              : status === "rejected"
              ? "#ef4444"
              : "#facc15"
        }}
      >
        {status}
      </p>

    </div>
  );
}
