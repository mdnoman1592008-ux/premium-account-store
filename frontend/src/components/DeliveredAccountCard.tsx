type Props = {

  appName:string;
  planName:string;

  email:string;
  password:string;
};

export default function
DeliveredAccountCard({

  appName,
  planName,

  email,
  password

}:Props){

  return (

    <div className="app-card">

      <h2>
        {appName}
      </h2>

      <p>
        Plan:
        {planName}
      </p>

      <p>
        Email:
        {email}
      </p>

      <p>
        Password:
        {password}
      </p>

    </div>

  );
}
