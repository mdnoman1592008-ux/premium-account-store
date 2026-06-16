export default function InventoryTable() {

  const inventory = [
    {
      id: 1,
      app: "ChatGPT",
      plan: "Plus",
      email: "account1@gmail.com",
      status: "available"
    },
    {
      id: 2,
      app: "Gemini",
      plan: "Ultra",
      email: "account2@gmail.com",
      status: "assigned"
    }
  ];

  return (
    <div className="app-card">

      <h2>
        Inventory Accounts
      </h2>

      <table
        style={{
          width:"100%",
          marginTop:"20px"
        }}
      >

        <thead>
          <tr>
            <th>ID</th>
            <th>App</th>
            <th>Plan</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {inventory.map((item)=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.app}</td>
              <td>{item.plan}</td>
              <td>{item.email}</td>
              <td>{item.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
