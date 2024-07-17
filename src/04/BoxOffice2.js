import { useState, useEffect,useRef } from "react"

export default function BoxOffice2() {
    const [tdata,setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    const [selMv, setSelMv] = useState('');
    const inRef = useRef();

    const handleSetDt = (e) => {
        e.preventDefault();
        getData();
    }

    const getData = () => {
        let tmDt = inRef.current.value.replaceAll('-','');
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        url = url + `key=${process.env.REACT_APP_MV}`;
        url = url + `&targetDt=${tmDt}`;
        
        console.log(url);
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList));
        ;
    }
    useEffect(()=>{
        let tm = tdata.map( item => 
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 hover:cursor-pointer"
          key={item.movieCd} onClick={ ()=>{handleSelMv(item)}}  >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.rank}
                </th>
                <td className="px-6 py-2">
                  {item.movieNm}
                </td>
                <td className="px-6 py-4">
                  {parseInt(item.salesAmt).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  {parseInt(item.audiCnt).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                {parseInt(item.rankInten) > 0 ? <span className="text-red-600">▲</span>
                  : parseInt(item.rankInten) < 0 ? <span className="text-blue-600">▼</span> : '-'}
                  {parseInt(item.rankInten) !=0 && Math.abs(item.rankInten)}
                </td>
          </tr>
        )
        setTags(tm);
    },[tdata]);
    const handleSelMv = (mv) => {
        let tm = 
        <>
            <span>{mv.movieNm}</span>
            <span>개봉일:{mv.openDt}</span>
            <span>누적 관객 수:{parseInt(mv.audiAcc).toLocaleString()}</span>  
        </>

        setSelMv(tm);
    }

    return (
        <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg">
            <form className="flex items-center justify-end mt-2 text-lg rounded-sm bg-slate-700">
              <label htmlFor="dt" className="mr-5 font-bold text-m text-slate-200">
                날짜선택
              </label>
              <input type='date' id='dt' ref={inRef}
                onChange={handleSetDt}
                className="bg-gray-50 border mr-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block focus:border-blue-500 ps-10 p-2.5"/>
            </form>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            순위
                        </th>
                        <th scope="col" class="px-6 py-3">
                            영화명
                        </th>
                        <th scope="col" class="px-6 py-3">
                            매출액
                        </th>
                        <th scope="col" class="px-6 py-3">
                            관객수
                        </th>
                        <th scope="col" class="px-6 py-3">
                            증감율
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tags}
                </tbody>
            </table>
            <div className="flex items-center justify-center px-6 py-2 text-lg font-bold text-yellow-500 bg-black">
              {selMv == '' ? "영화정보" : selMv}
              {/* {selMv} */}
            </div>
        </div>

    )
}
