import DurationCard from
"../../../../components/DurationCard";

export default function SuperGrokPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>SuperGrok</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳699"
          finalPrice="৳499"
          discount="29%"
          save="৳200"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳1399"
          finalPrice="৳999"
          discount="29%"
          save="৳400"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳2799"
          finalPrice="৳1899"
          discount="32%"
          save="৳900"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
