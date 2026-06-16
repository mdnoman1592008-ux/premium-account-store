import DurationCard from
"../../../../components/DurationCard";

export default function GeminiUltraPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Gemini Ultra</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳899"
          finalPrice="৳699"
          discount="22%"
          save="৳200"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳1799"
          finalPrice="৳1299"
          discount="28%"
          save="৳500"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳3599"
          finalPrice="৳2499"
          discount="31%"
          save="৳1100"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
