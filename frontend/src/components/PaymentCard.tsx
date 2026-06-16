type Props = {
  name: string;
  number: string;
};

export default function PaymentCard({
  name,
  number
}: Props) {
  return (
    <div className="app-card">

      <h3>{name}</h3>

      <p>
        Payment Number
      </p>

      <h2
        style={{
          color:"#d4af37"
        }}
      >
        {number}
      </h2>

      <button>
        Select Method
      </button>

    </div>
  );
}
