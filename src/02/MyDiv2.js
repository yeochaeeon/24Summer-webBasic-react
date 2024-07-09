import MyDiv3 from "./MyDiv3";
// function MyDiv2(probs) {
function MyDiv2({d1,d2,d3}) {
    return (
        <div className="flex flex-col items-center justify-start w-4/5 p-5 text-xl text-teal-100 h-4/5 bg-cyan-600 ">
            <p className="w-full h-4 mb-4 text-left">
                {/* 속성의 이름(d1,d2)이 중요 */} 
                {/* {probs.d1} > {probs.d2} */}
                {d1} &gt; {d2} &gt; {d3}
            </p>
            {/* <MyDiv3 dd1={probs.d1} dd2={probs.d2} dd3={probs.d3} /> */}
            <MyDiv3 dd1={d1} dd2={d2} dd3={d3} />
        </div>
    );
}

export default MyDiv2;