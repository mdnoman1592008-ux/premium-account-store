import Image from "next/image";
import Link from "next/link";

type AppCardProps = {
name: string;
slug: string;
description?: string;
price?: string;
};

export default function AppCard({
name,
slug,
description,
price,
}: AppCardProps) {
return (
<Link
href={`/store/${slug}`}
style={{
textDecoration: "none",
}}
>
<div
style={{
background: "#111",
border: "1px solid rgba(212,175,55,.15)",
borderRadius: "20px",
padding: "20px",
transition: "all .3s ease",
cursor: "pointer",

```
      boxShadow:
        "0 10px 30px rgba(0,0,0,.35)",

      height: "100%",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "15px",
      }}
    >
      <Image
        src={`/apps/${slug}.png`}
        alt={name}
        width={90}
        height={90}
        style={{
          borderRadius: "18px",
          objectFit: "cover",
        }}
      />
    </div>

    <h3
      style={{
        color: "#fff",
        textAlign: "center",
        marginBottom: "8px",
      }}
    >
      {name}
    </h3>

    <p
      style={{
        color: "#aaa",
        fontSize: "14px",
        textAlign: "center",
        minHeight: "40px",
      }}
    >
      {description}
    </p>

    {price && (
      <div
        style={{
          marginTop: "15px",
          textAlign: "center",
          color: "#d4af37",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        ৳ {price}
      </div>
    )}

    <button
      style={{
        width: "100%",
        marginTop: "15px",
        padding: "12px",

        background:
          "linear-gradient(135deg,#d4af37,#f5d76e)",

        border: "none",

        borderRadius: "12px",

        color: "#000",

        fontWeight: "700",

        cursor: "pointer",
      }}
    >
      View Plans
    </button>
  </div>
</Link>
```

);
}
