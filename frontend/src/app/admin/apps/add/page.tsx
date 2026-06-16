import AppForm from
"../../../../components/AppForm";

export default function AddAppPage() {

  return (
    <div
      style={{
        padding:"40px",
        maxWidth:"900px"
      }}
    >

      <h1>
        Add New App
      </h1>

      <div
        style={{
          marginTop:"30px"
        }}
      >
        <AppForm />
      </div>

    </div>
  );
}
