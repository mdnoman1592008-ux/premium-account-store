import OrderCard from
"../../components/OrderCard";

export default function OrdersPage() {

  return (
    <div
      style={{
        padding:"50px"
      }}
    >

      <h1>
        My Orders
      </h1>

      <div
        className="grid"
        style={{
          marginTop:"30px"
        }}
      >

        <OrderCard
          orderId="1001"
          app="ChatGPT"
          plan="Plus"
          duration="6 Months"
          amount="৳749"
          status="approved"
        />

        <OrderCard
          orderId="1002"
          app="Gemini"
          plan="Ultra"
          duration="12 Months"
          amount="৳1499"
          status="pending"
        />

      </div>

    </div>
  );
}
