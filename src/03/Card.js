import { useState,useEffect } from "react";
export default function Card({imgSrc, title, content}) {
  // 컴포넌트 변수
  // let n = 0;
  
  // state 변수를 사용해야함 ( 화면을 다시 그리기 위해 ) useState 훅 사용.
  const [n,setN] = useState(0);
  const handleClick = () => {
    // n = n + 1;
    setN(n+1);
    // console.log(n); 
    // console.log 를 setN 이후에 동작되게 하기 위해 useEffect 사용
  }

  // useEffect 사용 시 배열기호 안에 아무것도 없으면 컴포넌트 생성시 맨 처음 한 번만 실행됨 
  // useEffect(()=>{},[]) 

  //아래와 같은 형태로 작성했을 때는 특정 상태 변수가 변경 될 때 마다 실행됨
  useEffect(()=>{
    console.log(n)
  },[n]);

  return (
    <div className="flex justify-center w-full p-3 border items-top h-50 border-slate-300">
      <div className="flex items-start justify-center w-1/3 h-50">
        <img src={imgSrc}/>
      </div>
      <div className="flex flex-col items-start justify-between w-2/3 ml-2 h-50">
        <p className="text-xl font-bold text-blue-900 ">
          {title}
        </p>
        <p className="text-sm text-slate-600 ">
          {content}
        </p>
        <p className="w-full text-sm text-right text-slate-900">
          <span className="text-lg font-bold cursor-pointer" onClick={handleClick} >❤️ 좋아요</span> 
          {/* 온클릭을 콜백함수 형식으로 써도 되지만 전달 할 인수가 없기에 위와 같이 작성해도 무관 */}
          <span className="ml-2 text-lg font-bold">{n}</span>
        </p>
      </div>
    </div>
  )
}
