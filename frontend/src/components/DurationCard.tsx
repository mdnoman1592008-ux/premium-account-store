type Props = {
  title: string;
  regularPrice: string;
  finalPrice: string;
  discount: string;
  save: string;
  badge?: string;
};

export default function DurationCard({
  title,
  regularPrice,
  finalPrice,
  discount,
  save,
  badge
}: Props) {
  return (
    <div className="app-card">

      {badge && (
        <span
          style={{
            background:"#d4af37",
            color:"#000",
            padding:"5px 12px",
            borderRadius:"20px",
            fontSize:"12px"
          }}
        >
          {badge}
        </span>
      )}

      <h2
        style={{
          marginTop:"15px"
        }}
      >
        {title}
      </h2>

      <p>
        Regular: {regularPrice}
      </p>

      <p>
        Discount: {discount}
      </p>

      <p>
        Save: {save}
      </p>

      <h3
        style={{
          color:"#d4af37",
          marginTop:"10px"
        }}
      >
        {finalPrice}
      </h3>

      <button
        style={{
          marginTop:"20px"
        }}
      >
        Buy Now
      </button>

    </div>
  );
}
