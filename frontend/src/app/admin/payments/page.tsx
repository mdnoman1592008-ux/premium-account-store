export default function AdminPaymentsPage() {

  return (
    <div
      style={{
        padding:"40px"
      }}
    >

      <h1>
        Payment Verification
      </h1>

      <div
        className="app-card"
        style={{
          marginTop:"30px"
        }}
      >

        <h3>
          Transaction ID:
          TRX123456
        </h3>

        <p>
          Method: bKash
        </p>

        <p>
          Sender:
          017XXXXXXXX
        </p>

        <p>
          Amount:
          ৳749
        </p>

        <p>
          Status:
          Pending
        </p>

        <div
          style={{
            marginTop:"20px",
            display:"flex",
            gap:"10px"
          }}
        >

          <button>
            View Screenshot
          </button>

          <button>
            Approve
          </button>

          <button>
            Reject
          </button>

        </div>

      </div>

    </div>
  );
}
