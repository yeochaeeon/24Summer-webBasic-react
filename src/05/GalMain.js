import React, { useEffect, useRef, useState } from 'react'
import GalCard from './GalCard';
export default function GalMain() {
    // 상태변수 ( 배열로 가져옴 )
    const [tdata,setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    const inRef = useRef();

    // 데이터 가져오기
    const getData = ((kw) => {
        console.log(kw);
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = url + `&keyword=${kw}&_type=json`;
        console.log(url);
        
        fetch(url)
            .then(resp => resp.json()) // json 이 아니라 json()을 호출해야 한다.
            .then(data => setTdata(data.response.body.items.item));
        console.log(kw);
    })
    
    //tdata가 변경되었을 때
    useEffect(()=>{
      let tm = tdata.map(item => 
          <GalCard
              galTitle={item.galTitle}
              galWebmgalWebImageUrl={item.galWebImageUrl}
              galPhotographyLocation={item.galPhotographyLocation}
              key={item.galContentId}
          />
      )
      setTags(tm);
  },[tdata])

    const handleClick = ((e)=>{
        e.preventDefault();
        let kw = encodeURI(inRef.current.value);
        getData(kw);
    })

    return (
        <div className='flex flex-col w-full h-full grow'>
          <form className="flex items-center justify-center w-full m-5 ">
            <input type="text" id="txt1"
                   ref={inRef}
                   className="p-5 mr-3 text-lg text-white bg-blue-700 rounded" />
            <button onClick={handleClick}
                    className="p-5 text-lg text-white bg-blue-700 rounded">
              확인
            </button>
          </form>
          <div className='grid grid-cols-1 gap-4 text-black md:grid-cols-3'>
            {tags}
          </div>
        </div>
      )
}
