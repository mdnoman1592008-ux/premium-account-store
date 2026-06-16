import PaymentForm from
"../../components/PaymentForm";

export default function PaymentPage() {

  return (
    <div
      style={{
        padding:"50px"
      }}
    >

      <h1>
        Complete Payment
      </h1>

      <div
        style={{
          marginTop:"30px",
          maxWidth:"600px"
        }}
      >
        <PaymentForm />
      </div>

    </div>
  );
}
