import PaymentProofViewer from
"../../../components/PaymentProofViewer";

export default function RocketPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Rocket Payment</h1>

      <PaymentProofViewer
        method="Rocket"
        accountNumber="019XXXXXXXX"
        accountType="Personal"
      />

    </div>
  );
}
