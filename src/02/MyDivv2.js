import MyDivv3 from './MyDivv3'

export default function MyDivv2({d1,d2,d3}) {
  return (
    <div className='flex flex-col items-center justify-center w-4/5 m-5 bg-cyan-600'>
      <p className='w-full p-2 text-left'>{d1}&gt;{d2}</p>
      <MyDivv3 dd1={d1} dd2={d2} dd3={d3} />
    </div>
  );
}