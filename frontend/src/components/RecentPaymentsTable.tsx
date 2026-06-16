export default function RecentPaymentsTable() {

  const payments = [
    {
      id:"TRX123456",
      method:"bKash",
      amount:"749",
      status:"Approved"
    },
    {
      id:"TRX456789",
      method:"Nagad",
      amount:"1499",
      status:"Pending"
    }
  ];

  return (
    <div className="app-card">

      <h2>
        Recent Payments
      </h2>

      <table
        style={{
          width:"100%",
          marginTop:"20px"
        }}
      >

        <thead>

          <tr>
            <th>TRX ID</th>
            <th>Method</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {payments.map(
            (payment,index)=>(
              <tr key={index}>

                <td>
                  {payment.id}
                </td>

                <td>
                  {payment.method}
                </td>

                <td>
                  ৳{payment.amount}
                </td>

                <td>
                  {payment.status}
                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}
