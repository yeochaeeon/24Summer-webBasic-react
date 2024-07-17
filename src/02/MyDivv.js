import MyDivv2 from "./MyDivv2";

export default function MyDivv() {
    const n1 = "div1"
    const n2 = "div2"
    const n3 = "div3"
    return (
    <div className="flex flex-col items-center w-4/5 flex- bg-cyan-700">
      <p className="w-full p-2 text-left">{n1}</p>
      <MyDivv2 d1={n1} d2={n2} d3={n3} />
    </div>
  );
}