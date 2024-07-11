import logo from './logo.svg';
import './App.css';
import { FaHome } from "react-icons/fa";
import Hello from './01/Hello';//.js 생략 
import MyDiv from './02/MyDiv';
import CardMain from './03/CardMain';
import BoxOffice from './04/BoxOffice';

function App() {
  return (
    <div className='App-header'>
    <main className='flex flex-col items-center justify-center w-full h-full md:w-4/5'>
      <header className='flex justify-between w-full h-16 p-5 text-slate-800 bg-slate-200'>
        <h1 className="text-xl font-bold">리액트 실습</h1>
        <div><FaHome /></div>
      </header>
      <div className="flex flex-col items-center justify-center w-full grow ">
        {/* <Hello /> */}
        {/* <MyDiv /> */}
        {/* <CardMain /> */}
        <BoxOffice />
      </div>
      <footer className='flex items-center justify-center w-full h-16 bg-black text-slate-200'>
        <p className='text-sm font-bold'>2024 여름계절학기 소프트웨어융합기초1</p>
      </footer>
    </main>
    </div>
  );
}

export default App;
