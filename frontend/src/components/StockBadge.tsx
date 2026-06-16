type Props = {
  status:
    | "in_stock"
    | "low_stock"
    | "out_of_stock";
};

export default function StockBadge({
  status
}: Props) {

  const getColor = () => {

    if(
      status === "in_stock"
    ){
      return "#22c55e";
    }

    if(
      status === "low_stock"
    ){
      return "#f59e0b";
    }

    return "#ef4444";
  };

  const getText = () => {

    if(
      status === "in_stock"
    ){
      return "In Stock";
    }

    if(
      status === "low_stock"
    ){
      return "Low Stock";
    }

    return "Out Of Stock";
  };

  return (
    <span
      style={{
        background:getColor(),
        color:"#fff",
        padding:"6px 12px",
        borderRadius:"20px",
        fontSize:"12px",
        fontWeight:"bold"
      }}
    >
      {getText()}
    </span>
  );
}
