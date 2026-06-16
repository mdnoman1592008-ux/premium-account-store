export default function AppManagementTable() {

  const apps = [
    {
      id: 1,
      name: "ChatGPT",
      plans: 2,
      status: "Active"
    },
    {
      id: 2,
      name: "Gemini",
      plans: 2,
      status: "Active"
    },
    {
      id: 3,
      name: "Spotify",
      plans: 1,
      status: "Active"
    }
  ];

  return (
    <div className="app-card">

      <h2>
        Apps Management
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
            <th>App Name</th>
            <th>Plans</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {apps.map((app)=>(
            <tr key={app.id}>

              <td>{app.id}</td>

              <td>{app.name}</td>

              <td>{app.plans}</td>

              <td>{app.status}</td>

              <td>

                <button>
                  Edit
                </button>

                <button>
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}
