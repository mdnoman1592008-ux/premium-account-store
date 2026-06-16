type Props = {
  title:string;
  message:string;
};

export default function EmptyState({
  title,
  message
}:Props) {

  return (
    <div
      style={{
        textAlign:"center",
        padding:"60px"
      }}
    >

      <h2>
        {title}
      </h2>

      <p
        style={{
          marginTop:"10px",
          color:"#aaa"
        }}
      >
        {message}
      </p>

    </div>
  );
}
