import PlanCard from
"../../../components/PlanCard";

export default function YouTubePage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>YouTube Premium</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <PlanCard
          title="YouTube Premium"
          price="Starting ৳199"
          features={[
            "Ad-Free Videos",
            "Background Play",
            "Offline Download",
            "YouTube Music",
            "Premium Access"
          ]}
        />

      </div>

    </div>
  );
}
