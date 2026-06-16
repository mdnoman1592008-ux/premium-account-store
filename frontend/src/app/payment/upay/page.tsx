import PaymentProofViewer from
"../../../components/PaymentProofViewer";

export default function UpayPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Upay Payment</h1>

      <PaymentProofViewer
        method="Upay"
        accountNumber="016XXXXXXXX"
        accountType="Personal"
      />

    </div>
  );
}
