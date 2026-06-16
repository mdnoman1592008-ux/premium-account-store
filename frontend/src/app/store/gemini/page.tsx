import PlanCard from
"../../../components/PlanCard";

export default function GeminiPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Gemini Plans</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <PlanCard
          title="Gemini Pro"
          price="Starting ৳399"
          features={[
            "Gemini Premium",
            "Gmail Support",
            "Docs Support",
            "2TB Storage",
            "Priority Access"
          ]}
        />

        <PlanCard
          title="Gemini Ultra"
          price="Starting ৳699"
          features={[
            "All Pro Features",
            "Deep Research",
            "Project Genie",
            "5TB Storage",
            "Maximum Performance"
          ]}
        />

      </div>

    </div>
  );
}
