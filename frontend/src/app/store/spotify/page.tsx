import PlanCard from
"../../../components/PlanCard";

export default function SpotifyPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Spotify Premium</h1>

      <div
        className="grid"
        style={{marginTop:"30px"}}
      >

        <PlanCard
          title="Spotify Premium"
          price="Starting ৳199"
          features={[
            "Ad-Free Music",
            "Offline Download",
            "Unlimited Skip",
            "High Quality Audio",
            "Premium Access"
          ]}
        />

      </div>

    </div>
  );
}
