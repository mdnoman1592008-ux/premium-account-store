type Props = {
  transactionId: string;
  senderNumber: string;
  screenshot: string;
};

export default function PaymentProofModal({
  transactionId,
  senderNumber,
  screenshot
}: Props) {

  return (
    <div className="app-card">

      <h2>
        Payment Proof
      </h2>

      <p>
        Sender Number:
        {senderNumber}
      </p>

      <p>
        Transaction ID:
        {transactionId}
      </p>

      <img
        src={screenshot}
        alt="payment-proof"
        style={{
          width:"100%",
          marginTop:"20px",
          borderRadius:"10px"
        }}
      />

    </div>
  );
}
