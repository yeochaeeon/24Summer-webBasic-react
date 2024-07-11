import clock from './clock.png';
import './MyCom.css' ;
import { useState, useEffect } from 'react';

function MyCom () {
    //상태변수 선언
    const [time,setTime] = useState(new Date());
    const mycomDiv = {
        width : '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
    //컴포넌트 생성시 한 번 실행
    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime(new Date())
        },1000);
        return (()=>{
            clearInterval(timer);
        });
    },[]);
    
    return (
        <div style={mycomDiv}>
            <p className='mycomP'>
                <img src={clock} alt='시계' style={{'width':'400px'}} />
            </p>
            <p className='p-5 text-lg font-bold text-white bg-blue-800'>
                현재 시간 : {time.toLocaleTimeString()}
            </p>
        </div>
    );
}
export default MyCom;