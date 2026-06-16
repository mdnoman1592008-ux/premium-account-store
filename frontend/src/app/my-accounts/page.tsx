import DeliveredAccountCard
from
"../../components/DeliveredAccountCard";

export default function
MyAccountsPage(){

  return (

    <div
      style={{
        padding:"50px"
      }}
    >

      <h1>
        My Accounts
      </h1>

      <div
        className="grid"
        style={{
          marginTop:"30px"
        }}
      >

        <DeliveredAccountCard

          appName="ChatGPT"

          planName="Plus"

          email=
          "user@gmail.com"

          password=
          "password123"

        />

      </div>

    </div>

  );
}
