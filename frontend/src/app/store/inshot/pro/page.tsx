import DurationCard from
"../../../../components/DurationCard";

export default function InShotProPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>InShot Pro</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳349"
          finalPrice="৳249"
          discount="29%"
          save="৳100"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳699"
          finalPrice="৳449"
          discount="36%"
          save="৳250"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳1399"
          finalPrice="৳799"
          discount="43%"
          save="৳600"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
