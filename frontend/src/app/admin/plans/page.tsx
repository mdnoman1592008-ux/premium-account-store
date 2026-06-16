export default function AdminPlansPage() {

  return (
    <div
      style={{
        padding:"40px"
      }}
    >

      <h1>
        Plans Management
      </h1>

      <div
        className="app-card"
        style={{
          marginTop:"30px"
        }}
      >

        <table
          style={{
            width:"100%"
          }}
        >

          <thead>
            <tr>
              <th>App</th>
              <th>Plan</th>
              <th>3M</th>
              <th>6M</th>
              <th>12M</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr>

              <td>ChatGPT</td>

              <td>Plus</td>

              <td>399</td>

              <td>749</td>

              <td>1399</td>

              <td>
                <button>
                  Edit
                </button>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}
