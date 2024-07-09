// function MyDiv3(probs) {
function MyDiv3({dd1,dd2,dd3}) {
    return (
        <div className="flex flex-col items-center justify-start w-4/5 p-5 text-xl text-slate-50 h-4/5 bg-cyan-500 ">
            <p className="w-full h-4 mb-4 text-left">
            {/* {probs.dd1} > {probs.dd2} > {probs.dd3} */}
            {dd1} &gt; {dd2} &gt; {dd3}
            </p>
        </div>
    );
}

export default MyDiv3;