type Props = {

  stock:number;

};

export default function
StockCounter({

  stock

}:Props){

  return (

    <div
      className="app-card"
    >

      <h3>
        Stock
      </h3>

      <h1>
        {stock}
      </h1>

      <p>

        {stock > 0
        ? "Available"
        : "Out Of Stock"}

      </p>

    </div>

  );
}
