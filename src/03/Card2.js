import { useState,useEffect } from "react";

import React from 'react'

export default function Card2({imgSrc,title,content}) {
    const [n,setN] = useState(0);
    const handleClick = () =>{
        setN(n+1);
    }

  return (
    <div className="flex justify-center w-full border items-top h-50 border-slate-300">
      <div className="items-start w-1/3 h-50">
        <img src={imgSrc}></img>
      </div>
      <div className="flex flex-col justify-between w-2/3 mx-2">
        <span className="font-bold text-left text-blue-950">{title}</span>
        <p className="text-sm text-left text-black">{content}</p>
        <p className="text-lg font-bold text-right cursor-pointer  text-slate-700" onClick={handleClick}>👍좋아요 {n}</p>
      </div>
    </div>
    
  )
}
