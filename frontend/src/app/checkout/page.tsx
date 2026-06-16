import OrderSummary from
"../../components/OrderSummary";

import PaymentCard from
"../../components/PaymentCard";

export default function CheckoutPage() {

  return (
    <div style={{ padding:"50px" }}>

      <h1>Checkout</h1>

      <OrderSummary
        app="ChatGPT"
        plan="Plus"
        duration="6 Months"
        price="৳749"
      />

      <h2
        style={{
          marginTop:"40px"
        }}
      >
        Select Payment Method
      </h2>

      <div
        className="grid"
        style={{
          marginTop:"20px"
        }}
      >

        <PaymentCard
          name="bKash"
          number="017XXXXXXXX"
        />

        <PaymentCard
          name="Nagad"
          number="017XXXXXXXX"
        />

        <PaymentCard
          name="Rocket"
          number="017XXXXXXXX"
        />

        <PaymentCard
          name="Upay"
          number="017XXXXXXXX"
        />

        <PaymentCard
          name="Cellfin"
          number="017XXXXXXXX"
        />

      </div>

    </div>
  );
}
