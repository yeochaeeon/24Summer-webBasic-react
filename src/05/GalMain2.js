import React from 'react'
import GalCard from './GalCard'
import { useState, useRef, useEffect } from 'react'
export default function GalMain2() {

    const inRef = useRef();
    const [tags,setTags] = useState([]);
    const [tdata,setTdata] = useState([]);
    const getData = ((kw) => {
        console.log(kw);
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?';
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}`;
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
        url = url + `&keyword=${kw}&_type=json`;
        console.log(url);

        fetch(url).then(resp => resp.json())
        .then(data => setTdata(data.response.body.items.item));
    })
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
    const handleClick = ((e) => {
        e.preventDefault();
        let kw = encodeURI(inRef.current.value);
        getData(kw);
    })

    return (
        <div className='flex flex-col'>
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
