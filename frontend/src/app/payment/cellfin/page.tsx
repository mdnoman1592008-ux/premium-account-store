import PaymentProofViewer from
"../../../components/PaymentProofViewer";

export default function CellfinPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>Cellfin Payment</h1>

      <PaymentProofViewer
        method="Cellfin"
        accountNumber="015XXXXXXXX"
        accountType="Personal"
      />

    </div>
  );
}
