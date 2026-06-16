import PlanCard from
"../../../components/PlanCard";

export default function CapCutPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>CapCut Pro</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <PlanCard
          title="CapCut Pro"
          price="Starting ৳299"
          features={[
            "Premium Templates",
            "AI Tools",
            "No Watermark",
            "1200 Credits",
            "PC + Mobile Access"
          ]}
        />

      </div>

    </div>
  );
}
