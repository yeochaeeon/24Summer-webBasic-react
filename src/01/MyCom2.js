import React from 'react';
import clock from './clock.png';
import { useState, useEffect } from 'react';

export default function MyCom2() {
    const [time,setTime] = useState(new Date());
    useEffect (()=>{
        const timer = setInterval(()=>{
            setTime(new Date());
        },1000);

        return (()=>{
            clearInterval(timer);
        })
    },[]);
  return (
    <div className='flex flex-col items-center'>
      <img src={clock} alt='clock' className='w-4/5'></img>
      <p className='p-5 m-3 font-bold text-white rounded-md bg-cyan-800'>현재 시간 : {time.toLocaleTimeString()}</p>
    </div>
  );
}
