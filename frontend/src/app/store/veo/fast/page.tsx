import DurationCard from
"../../../../components/DurationCard";

export default function VeoFastPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Veo 3.1 Fast</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳999"
          finalPrice="৳799"
          discount="20%"
          save="৳200"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳1999"
          finalPrice="৳1499"
          discount="25%"
          save="৳500"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳3999"
          finalPrice="৳2799"
          discount="30%"
          save="৳1200"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
