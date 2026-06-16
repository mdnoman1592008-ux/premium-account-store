import PlanCard from
"../../../components/PlanCard";

export default function ChatGPTPage() {

  return (
    <div
      style={{
        padding:"50px"
      }}
    >

      <h1>
        ChatGPT Plans
      </h1>

      <div
        className="grid"
        style={{
          marginTop:"30px"
        }}
      >

        <PlanCard
          title="ChatGPT Plus"
          price="Starting ৳299"
          features={[
            "Advanced AI",
            "Fast Response",
            "Image Generation",
            "Extended Memory",
            "Priority Access"
          ]}
        />

        <PlanCard
          title="ChatGPT Pro"
          price="Starting ৳499"
          features={[
            "All Plus Features",
            "Deep Research",
            "Advanced Models",
            "Highest Limits",
            "Maximum Performance"
          ]}
        />

      </div>

    </div>
  );
}
