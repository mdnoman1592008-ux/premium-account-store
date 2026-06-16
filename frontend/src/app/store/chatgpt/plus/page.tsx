import DurationCard from
"../../../../components/DurationCard";

export default function ChatGPTPlusPage() {
  return (
    <div style={{ padding:"50px" }}>

      <h1>ChatGPT Plus</h1>

      <div
        className="grid"
        style={{ marginTop:"30px" }}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳450"
          finalPrice="৳399"
          discount="11%"
          save="৳51"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳900"
          finalPrice="৳749"
          discount="17%"
          save="৳151"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳1800"
          finalPrice="৳1399"
          discount="22%"
          save="৳401"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
