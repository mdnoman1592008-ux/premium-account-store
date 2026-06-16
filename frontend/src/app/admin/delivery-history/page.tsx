export default function
DeliveryHistoryPage(){

  const history = [

    {
      app:"ChatGPT",
      plan:"Plus",
      user:"Rahim",
      email:
      "user@gmail.com"
    }

  ];

  return (

    <div
      style={{
        padding:"40px"
      }}
    >

      <h1>
        Delivery History
      </h1>

      <table
        style={{
          width:"100%",
          marginTop:"30px"
        }}
      >

        <thead>

          <tr>
            <th>User</th>
            <th>App</th>
            <th>Plan</th>
            <th>Email</th>
          </tr>

        </thead>

        <tbody>

          {history.map(
            (item,index)=>(
              <tr key={index}>

                <td>
                  {item.user}
                </td>

                <td>
                  {item.app}
                </td>

                <td>
                  {item.plan}
                </td>

                <td>
                  {item.email}
                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>

  );
}
