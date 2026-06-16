"use client";

type Props = {

  image:string;

};

export default function
ImagePreview({

  image

}:Props){

  return (

    <div>

      <img
        src={image}
        alt="preview"
        style={{
          width:"100%",
          borderRadius:"10px"
        }}
      />

    </div>

  );
}
