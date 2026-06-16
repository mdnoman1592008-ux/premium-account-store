import DurationCard from
"../../../../components/DurationCard";

export default function YouTubePremiumPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>YouTube Premium</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳299"
          finalPrice="৳199"
          discount="33%"
          save="৳100"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳599"
          finalPrice="৳349"
          discount="42%"
          save="৳250"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳1199"
          finalPrice="৳599"
          discount="50%"
          save="৳600"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
