export default function UserTable() {

  const users = [
    {
      id: 1,
      name: "Rahim",
      email: "rahim@gmail.com",
      orders: 5,
      status: "Active"
    },
    {
      id: 2,
      name: "Karim",
      email: "karim@gmail.com",
      orders: 2,
      status: "Active"
    }
  ];

  return (
    <div className="app-card">

      <h2>
        Users
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
            <th>Name</th>
            <th>Email</th>
            <th>Orders</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user)=>(
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.orders}</td>
              <td>{user.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
