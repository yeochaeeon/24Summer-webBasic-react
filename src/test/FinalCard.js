export default function FinalCard({cwGroupNm,inspIemNm1,inspWqbs,
                                mjValue,buValue,hmValue,dsValue}) {
  return (
    <div className='p-3 border rounded-md border-slate-200'>
        <p className="text-lg font-extrabold text-slate-500">{cwGroupNm}</p>
        <div className="flex font-extrabold text-green-900 font-lg">
        <p>{inspIemNm1} </p> <p> (</p> <p> {inspWqbs} </p> <p> )</p>
        </div> 
        <div className='grid grid-cols-2'>
            <div className="flex p-2 m-1 bg-blue-600 rounded-md"><p className="mr-2 text-white">명장검사</p><p className='font-bold text-yellow-300'>{mjValue}</p></div>
            <div className="flex p-2 m-1 bg-blue-600 rounded-md"><p className="mr-2 text-white">범어사검사</p><p className='font-bold text-yellow-300'>{buValue}</p></div>
            <div className="flex p-2 m-1 bg-blue-600 rounded-md"><p className="mr-2 text-white">화명검사</p><p className='font-bold text-yellow-300'>{hmValue}</p></div>
            <div className="flex p-2 m-1 bg-blue-600 rounded-md"><p className="mr-2 text-white">덕산검사</p><p className='font-bold text-yellow-300'>{dsValue}</p></div>
        </div>
    </div>
  )
}
