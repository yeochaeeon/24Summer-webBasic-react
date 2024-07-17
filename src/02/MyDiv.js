import MyDiv2 from "./MyDiv2";
function MyDiv(){
    const n1 = 'MyDiv1';
    const n2 = 'MyDiv2';
    const n3 = 'MyDiv3';
    return(
        <div className="flex flex-col items-center justify-start w-3/5 p-2 text-xl text-teal-100 h-3/5 bg-cyan-700 ">
            <p className="w-full h-4 p-2 mb-4 text-left">
                {n1}
            </p>
            <MyDiv2 d1={n1} d2={n2} d3={n3} />
        </div> 
    );
}
export default MyDiv;