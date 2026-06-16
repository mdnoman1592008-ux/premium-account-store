import PlanCard from
"../../../components/PlanCard";

export default function GrokPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Grok Plans</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <PlanCard
          title="SuperGrok"
          price="Starting ৳499"
          features={[
            "Grok Build",
            "Long Chats",
            "Fast Response",
            "More Uploads",
            "HD Support"
          ]}
        />

        <PlanCard
          title="SuperGrok Heavy"
          price="Starting ৳899"
          features={[
            "Advanced Reasoning",
            "Expert Mode",
            "Highest Limit",
            "Priority Access",
            "All Premium Features"
          ]}
        />

      </div>

    </div>
  );
}
