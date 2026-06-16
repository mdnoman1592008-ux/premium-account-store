import DurationCard from
"../../../../components/DurationCard";

export default function ChatGPTProPage() {
  return (
    <div style={{ padding:"50px" }}>

      <h1>ChatGPT Pro</h1>

      <div
        className="grid"
        style={{ marginTop:"30px" }}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳750"
          finalPrice="৳699"
          discount="7%"
          save="৳51"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳1500"
          finalPrice="৳1299"
          discount="13%"
          save="৳201"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳3000"
          finalPrice="৳2499"
          discount="17%"
          save="৳501"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
