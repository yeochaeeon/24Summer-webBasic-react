import clock from './clock.png';
import './MyCom.css' ;

function MyCom () {
    const mycomDiv = {
        width : '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
    return (
        <div style={mycomDiv}>
            <p>
                <img src={clock} alt='시계' style={{'width':'400px'}} />
            </p>
            <p>
                현재 시간 : {new Date().toLocaleTimeString()}
            </p>
        </div>
    );
}
export default MyCom;