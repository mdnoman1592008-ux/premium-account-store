import DurationCard from
"../../../../components/DurationCard";

export default function SuperGrokHeavyPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>SuperGrok Heavy</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <DurationCard
          title="3 Months"
          regularPrice="৳1199"
          finalPrice="৳899"
          discount="25%"
          save="৳300"
        />

        <DurationCard
          title="6 Months"
          regularPrice="৳2399"
          finalPrice="৳1699"
          discount="29%"
          save="৳700"
          badge="Popular"
        />

        <DurationCard
          title="12 Months"
          regularPrice="৳4799"
          finalPrice="৳3299"
          discount="31%"
          save="৳1500"
          badge="Best Value"
        />

      </div>

    </div>
  );
}
