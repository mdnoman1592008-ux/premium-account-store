import UserTable from
"../../../components/UserTable";

export default function AdminUsersPage() {

  return (
    <div
      style={{
        padding:"40px"
      }}
    >

      <h1>
        Users Management
      </h1>

      <div
        style={{
          marginTop:"30px"
        }}
      >

        <UserTable />

      </div>

    </div>
  );
}
