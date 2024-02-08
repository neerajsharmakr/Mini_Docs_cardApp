import React, { useRef } from "react";
import Card from "./Card";

const ForeGround = () => {
  const ref=useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", TagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", TagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", TagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", TagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} referance={ref}/>
      ))}
    </div>
  );
};

export default ForeGround;
