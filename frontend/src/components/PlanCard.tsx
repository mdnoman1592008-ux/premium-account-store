type Props = {
  title: string;
  features: string[];
  price: string;
};

export default function PlanCard({
  title,
  features,
  price
}: Props) {
  return (
    <div className="app-card">

      <h2>
        {title}
      </h2>

      <div
        style={{
          marginTop:"20px"
        }}
      >
        {features.map(
          (item,index)=>(
            <p key={index}>
              ✓ {item}
            </p>
          )
        )}
      </div>

      <h3
        style={{
          marginTop:"20px",
          color:"#d4af37"
        }}
      >
        {price}
      </h3>

      <button
        style={{
          marginTop:"20px"
        }}
      >
        Select Plan
      </button>

    </div>
  );
}
