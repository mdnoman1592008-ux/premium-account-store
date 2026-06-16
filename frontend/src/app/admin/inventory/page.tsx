import InventoryTable from
"../../../components/InventoryTable";

export default function AdminInventoryPage() {

  return (
    <div
      style={{
        padding:"40px"
      }}
    >

      <h1>
        Inventory Management
      </h1>

      <div
        style={{
          marginTop:"30px"
        }}
      >

        <InventoryTable />

      </div>

    </div>
  );
}
