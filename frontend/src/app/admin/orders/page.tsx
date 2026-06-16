export default function AdminOrdersPage() {

  return (
    <div
      style={{
        padding:"40px"
      }}
    >

      <h1>
        Order Management
      </h1>

      <div
        className="app-card"
        style={{
          marginTop:"30px"
        }}
      >

        <h3>
          Order #1001
        </h3>

        <p>
          User: Rahim
        </p>

        <p>
          App: ChatGPT Plus
        </p>

        <p>
          Amount: ৳749
        </p>

        <p>
          Status: Pending
        </p>

        <div
          style={{
            display:"flex",
            gap:"10px",
            marginTop:"20px"
          }}
        >

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
