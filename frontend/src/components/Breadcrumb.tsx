import Link from "next/link";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
};

export default function Breadcrumb({
  items
}: Props) {

  return (
    <div
      style={{
        display:"flex",
        gap:"10px",
        marginBottom:"20px",
        color:"#aaa"
      }}
    >

      {items.map(
        (item,index)=>(
          <div
            key={index}
            style={{
              display:"flex",
              gap:"10px"
            }}
          >

            <Link
              href={item.href}
            >
              {item.label}
            </Link>

            {index <
            items.length - 1 &&
            <span>/</span>}

          </div>
        )
      )}

    </div>
  );
}
