import PaymentProofViewer from
"../../../components/PaymentProofViewer";

export default function BkashPage() {

  return (
    <div style={{padding:"50px"}}>

      <h1>bKash Payment</h1>

      <PaymentProofViewer
        method="bKash"
        accountNumber="017XXXXXXXX"
        accountType="Personal"
      />

    </div>
  );
}
