import React from 'react'

export default function MyDivv3({dd1,dd2,dd3}) {
    return (
      <div className='flex flex-col w-4/5 m-5 bg-cyan-500'>
        <p className='w-full p-2 text-left mb-7'>{dd1}&gt;{dd2}&gt;{dd3}</p>
        <div className='w-4/5'></div>
      </div>
    );
  }