"use client";

type Props = {

  value:string;

};

export default function
AccountCopyButton({

  value

}:Props){

  const copy =
  async ()=>{

    await navigator
    .clipboard
    .writeText(value);

    alert(
      "Copied"
    );

  };

  return (

    <button
      onClick={copy}
    >
      Copy
    </button>

  );
}
