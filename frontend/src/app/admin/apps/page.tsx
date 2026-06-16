import AppManagementTable from
"../../../components/AppManagementTable";

export default function AdminAppsPage() {

  return (
    <div
      style={{
        padding:"40px"
      }}
    >

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}
      >

        <h1>
          Apps Management
        </h1>

        <button>
          Add New App
        </button>

      </div>

      <div
        style={{
          marginTop:"30px"
        }}
      >

        <AppManagementTable />

      </div>

    </div>
  );
}
