"use client";

export default function RevenueChart() {

  const data = [
    5000,
    7000,
    9000,
    12000,
    10000,
    14000
  ];

  return (
    <div className="app-card">

      <h2>
        Revenue Analytics
      </h2>

      <div
        style={{
          display:"flex",
          alignItems:"flex-end",
          gap:"12px",
          height:"250px",
          marginTop:"30px"
        }}
      >

        {data.map(
          (value,index)=>(
            <div
              key={index}
              style={{
                flex:1,
                height:
                `${value/70}px`,
                background:
                "#d4af37",
                borderRadius:
                "8px 8px 0 0"
              }}
            />
          )
        )}

      </div>

    </div>
  );
}
