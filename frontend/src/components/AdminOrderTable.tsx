export default function AdminOrderTable() {

  const orders = [
    {
      id: "1001",
      user: "Rahim",
      app: "ChatGPT",
      amount: "749",
      status: "pending"
    },
    {
      id: "1002",
      user: "Karim",
      app: "Gemini",
      amount: "1499",
      status: "approved"
    }
  ];

  return (
    <div className="app-card">

      <h2>
        Recent Orders
      </h2>

      <table
        style={{
          width: "100%",
          marginTop: "20px"
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>App</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>{order.app}</td>
              <td>৳{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
