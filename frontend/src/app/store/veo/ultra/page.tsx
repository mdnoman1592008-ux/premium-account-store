import DurationCard from
"../../../../components/DurationCard";

export default function VeoUltraPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Veo 3.1 Ultra</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳1999"
          finalPrice="৳1499"
          discount="25%"
          save="৳500"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳3999"
          finalPrice="৳2999"
          discount="25%"
          save="৳1000"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳7999"
          finalPrice="৳5499"
          discount="31%"
          save="৳2500"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
