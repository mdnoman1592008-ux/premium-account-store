import PaymentProofViewer from
"../../../components/PaymentProofViewer";

export default function NagadPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Nagad Payment</h1>

      <PaymentProofViewer
        method="Nagad"
        accountNumber="018XXXXXXXX"
        accountType="Personal"
      />

    </div>
  );
}
