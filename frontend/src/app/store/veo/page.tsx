import PlanCard from
"../../../components/PlanCard";

export default function VeoPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Veo Plans</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <PlanCard
          title="Veo 3.1 Fast"
          price="Starting ৳799"
          features={[
            "Fast Generation",
            "HD Output",
            "Text To Video",
            "Quick Render",
            "Premium Access"
          ]}
        />

        <PlanCard
          title="Veo 3.1 Ultra"
          price="Starting ৳1499"
          features={[
            "Ultra Quality",
            "Priority Queue",
            "Long Videos",
            "Fast Processing",
            "Maximum Access"
          ]}
        />

      </div>

    </div>
  );
}
