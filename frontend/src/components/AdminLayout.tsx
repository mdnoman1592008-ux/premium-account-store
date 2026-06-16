import AdminSidebar from
"./AdminSidebar";

import AdminHeader from
"./AdminHeader";

export default function AdminLayout({
  children
}:{
  children:React.ReactNode
}) {

  return (
    <div
      style={{
        display:"flex",
        minHeight:"100vh"
      }}
    >

      <AdminSidebar />

      <div
        style={{
          flex:1,
          padding:"30px"
        }}
      >

        <AdminHeader />

        {children}

      </div>

    </div>
  );
}
