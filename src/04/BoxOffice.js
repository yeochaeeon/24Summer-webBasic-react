import { useState,useEffect,useRef } from "react";
export default function BoxOffice() {
    //json data 저장변수
    const [tdata,setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    const [selMv,setSelMv] = useState('');
    const inRef = useRef();

    //data가져오기
    const getData = () => {
      let tmDt = inRef.current.value.replaceAll('-','');
      let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        url = url + `key=${process.env.REACT_APP_MV}`;
        url = url + `&targetDt=${tmDt}`;
        console.log(url);
        //fetch함수를 이용해 오픈 api데이터 불러오기 (비동기 방식)
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList));
        ;
        // 원래 (( )=> { return   }) 이런 방식으로 call 
    }
    
    //날짜가 선택되었을 때
    const handleSetDt = (e) => {
      e.preventDefault();
      
      // 값을 가져오려면 current.value 를 사용해야 함.
      console.log(inRef.current.value); 
      getData();
    }
    //영화가 선택되었을 때
    const handleSelMv = (mv) => {
      console.log(mv);
      let tm = <>
                <span className="mr-2">{mv.movieNm} - </span>
                <span className="mr-2">개봉일:{mv.openDt}</span>
                <span className="mr-2">누적 관객 수:{parseInt(mv.audiAcc).toLocaleString()}</span>
               </>;
      setSelMv(tm);
    }
    
    // 컴포넌트 생성 시 
    useEffect(()=>{
        // let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        // url = url + `key=${process.env.REACT_APP_MV}`;
        // url = url + `&targetDt=20240710`;
        // console.log(url);

        // //fetch함수를 이용해 오픈 api데이터 불러오기 (비동기 방식)
        // fetch(url)
        // .then(resp => resp.json())
        // .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList));
        // ;
        // // 원래 (( )=> { return   }) 이런 방식으로 call 

    },[]);
    
    //tdata 변경 될 때 실행
    useEffect(()=>{
        if ( tdata.length == 0) return ;
        console.log(tdata)

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
        );
        setTags(tm);
    },[tdata]);

    return (
        <div className="relative w-10/12 overflow-x-auto shadow-md bg-slate-600 text-slate-700 sm:rounded-lg">
            <form className="flex items-center justify-end mt-2 mb-2 text-lg ">
              <label htmlFor="dt" className="mr-5 font-bold text-m text-slate-200">
                날짜선택
              </label>
              <input type='date' id='dt' ref={inRef}
                onChange={handleSetDt}
                className="bg-gray-50 border mr-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block focus:border-blue-500 ps-10 p-2.5"/>
            </form>
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr> 
                  <th scope="col" className="px-6 py-3">
                    순위
                  </th>
                  <th scope="col" className="px-6 py-3">
                    영화명
                  </th>
                  <th scope="col" className="px-6 py-3">
                    매출액
                  </th>
                  <th scope="col" className="px-6 py-3">
                    관객 수 
                  </th>
                  <th scope="col" className="px-6 py-3">
                    증감 
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
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
