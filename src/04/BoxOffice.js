import { useState,useEffect } from "react";
export default function BoxOffice() {
    //json data 저장변수
    const [tdata,setTdata] = useState([]);
    const [tags, setTags] = useState([]);
    
    // 컴포넌트 생성 시 
    useEffect(()=>{
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        url = url + `key=${process.env.REACT_APP_MV}`;
        url = url + `&targetDt=20240710`;
        console.log(url);

        //fetch함수를 이용해 오픈 api데이터 불러오기 (비동기 방식)
        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList));
        ;
        // 원래 (( )=> { return   }) 이런 방식으로 call 

    },[]);
    //tdata 변경 될 때 실행
    useEffect(()=>{
        if ( tdata.length == 0) return ;
        console.log(tdata)

        let tm = tdata.map( item =>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
        <div className="relative w-10/12 overflow-x-auto shadow-md text-slate-700 sm:rounded-lg">
          
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
                {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">
                    Silver
                  </td>
                  <td className="px-6 py-4">
                    Laptop
                  </td>
                  <td className="px-6 py-4">
                    $2999
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
      )
}
