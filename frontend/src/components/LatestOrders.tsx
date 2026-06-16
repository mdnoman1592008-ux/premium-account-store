export default function LatestOrders() {

  const orders = [
    {
      app:"ChatGPT Pro",
      status:"Delivered"
    },
    {
      app:"Gemini Ultra",
      status:"Delivered"
    },
    {
      app:"Spotify Premium",
      status:"Delivered"
    }
  ];

  return (
    <section
      style={{
        padding:"80px 50px"
      }}
    >

      <h2
        style={{
          textAlign:"center"
        }}
      >
        Latest Orders
      </h2>

      <div
        className="grid"
        style={{
          marginTop:"40px"
        }}
      >

        {orders.map(
          (order,index)=>(
            <div
              key={index}
              className="app-card"
            >

              <h3>
                {order.app}
              </h3>

              <p>
                {order.status}
              </p>

            </div>
          )
        )}

      </div>

    </section>
  );
}
