type Props = {
  name: string;
};

export default function AppCard({
  name
}: Props) {
  return (
    <div className="app-card">

      <div className="app-logo">
        {name.charAt(0)}
      </div>

      <h3>{name}</h3>

      <p>
        Starting From ৳299
      </p>

      <span className="stock">
        In Stock
      </span>

      <button>
        View Plans
      </button>

    </div>
  );
}
