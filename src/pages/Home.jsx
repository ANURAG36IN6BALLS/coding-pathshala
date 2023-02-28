import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

export default function Home() {
  const leftbtn = document.getElementsByClassName("left");
  const rightbtn = document.getElementsByClassName("right");

  return (
    <div>
      <div className="flex w-full relative overflow-hidden">
        <BiLeftArrow
          className="absolute left-5 top-[50%] text-[100px] text-black "
          class="left"
        />
        <img src="scroll1.jpg" alt="" class="scroll" />
        <img src="scroll2.jpg" alt="" class="scroll" />
        <img src="scroll3.jpg" alt="" class="scroll" />
        <img src="scroll4.jpg" alt="" class="scroll" />
        <BiRightArrow
          className="absolute right-5 top-[50%] text-[100px] text-black"
          class="right"
        />
      </div>
    </div>
  );
}
