import SettingsForm from
"../../../components/SettingsForm";

export default function AdminSettingsPage() {

  return (
    <div
      style={{
        padding:"40px"
      }}
    >

      <h1>
        Website Settings
      </h1>

      <div
        style={{
          maxWidth:"800px",
          marginTop:"30px"
        }}
      >

        <SettingsForm />

      </div>

    </div>
  );
}
