export default function Card({imgSrc, title, content}) {
  return (
    <div className="flex justify-center w-full p-3 border items-top h-50 border-slate-300">
      <div className="flex items-start justify-center w-1/3 h-full">
        <img src={imgSrc}/>
      </div>
      <div className="flex flex-col items-start justify-between w-2/3 h-full">
        <p className="ml-2 text-xl font-bold text-blue-900">
            {title}
            <p className="text-sm text-slate-600 ">
                {content}
            </p>
        </p>
        {/* <p className="text-sm text-slate-600">{content}</p> */}
        <p className="text-sm text-slate-900 "> ❤️ 좋아요 0</p>
      </div>
    </div>
  )
}
