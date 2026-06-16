export default function LoadingSpinner() {

  return (
    <div
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:"50px"
      }}
    >

      <div
        style={{
          width:"50px",
          height:"50px",
          border:"5px solid #333",
          borderTop:
          "5px solid #d4af37",
          borderRadius:"50%",
          animation:
          "spin 1s linear infinite"
        }}
      />

    </div>
  );
}
