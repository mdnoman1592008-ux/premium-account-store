import PlanCard from
"../../../components/PlanCard";

export default function InShotPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>InShot Pro</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <PlanCard
          title="InShot Pro"
          price="Starting ৳249"
          features={[
            "Premium Effects",
            "Premium Filters",
            "No Watermark",
            "Advanced Editing",
            "HD Export"
          ]}
        />

      </div>

    </div>
  );
}
