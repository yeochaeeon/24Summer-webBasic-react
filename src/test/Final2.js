import { useState, useEffect,useRef } from "react"
import FinalCard from './FinalCard'
export default function Final() {
    const [tdata,setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    const inRef = useRef();

    const handleSetDt = (e) => {
        e.preventDefault();
        getData();
    }

    const getData = () => {
        let tmDt = inRef.current.value.replaceAll('-','');
        let url = 'https://apis.data.go.kr/6260000/DailyWaterQualityService/cleanWaterQualityDetail?'
        url = url + `serviceKey=${process.env.REACT_APP_TEST}`;
        // url = url + 'serviceKey=w31c4c4b0nx%2FWZoQWorAwlhLks4P02npIhVY%2Bp9U%2FHx%2FglkheJ346G2IvGFVuLp7KGBDy97DswqoAuzQh0l1zg%3D%3D';
        url = url + '&pageNo=1&numOfRows=12' 
        url = url + `&argDate=${tmDt}`;
        // url = url + `&argDate=20240716`;
        url = url + `&resultType=json`;
        
        console.log(url);
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.cleanWaterQualityDetail.body.items.item)); //cleanWaterQualityDetail.
        ;
    }
    useEffect(()=>{
        if (tdata.length == 0) return;
    
        let tm = tdata.map(item =>
          <FinalCard
            cwGroupNm={item.cwGroupNm}
            inspIemNm1={item.inspIemNm1}
            inspWqbs={item.inspWqbs}
            mjValue={item.mjValue}
            buValue={item.buValue}
            hmValue={item.mjValue}
            dsValue={item.dsValue}
            // key={}
          />
        );
        setTags(tm);
      },[tdata]);

    return (
        <div class="flex flex-col w-8/10 overflow-y-auto mt-auto mb-4">
            <form className="flex items-center justify-end mt-2 mb-2 text-lg rounded-sm">
              <label htmlFor="dt" className="mr-5 font-bold text-m text-slate-950">
                날짜선택
              </label>
              <input type='date' id='dt' ref={inRef}
                onChange={handleSetDt}
                className="bg-gray-50 border mr-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block focus:border-blue-500 ps-10 p-2.5"/>
            </form>
            <div className='grid grid-cols-1 gap-4 text-black w-6/10 lg:grid-cols-3 md:grid-cols-2'>
                {tags}
            </div>
        </div>

    )
}
