import DurationCard from
"../../../../components/DurationCard";

export default function CapCutProPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>CapCut Pro</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳399"
          finalPrice="৳299"
          discount="25%"
          save="৳100"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳799"
          finalPrice="৳549"
          discount="31%"
          save="৳250"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳1599"
          finalPrice="৳999"
          discount="38%"
          save="৳600"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
