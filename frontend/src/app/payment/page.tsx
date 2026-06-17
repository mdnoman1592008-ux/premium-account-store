import PaymentForm from "../../components/PaymentForm";

export default function PaymentPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom,#050505,#0d0d0d)",
        padding: "40px 20px",
      }}
    >
      <PaymentForm
        orderId={
          "ORD-" +
          Date.now()
            .toString()
            .slice(-8)
        }
        amount="799"
        paymentMethod="Nagad"
      />
    </div>
  );
}
