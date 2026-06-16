import DurationCard from
"../../../../components/DurationCard";

export default function GeminiProPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Gemini Pro</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳499"
          finalPrice="৳399"
          discount="20%"
          save="৳100"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳999"
          finalPrice="৳749"
          discount="25%"
          save="৳250"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳1999"
          finalPrice="৳1399"
          discount="30%"
          save="৳600"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
