// css 불러오기 
import './Hello.css'
import MyCom from './MyCom';

//hello component 생성 
function Hello(){
    const name = "PNU";
    //return 문을 가져야하고 return 문 안에는 태그 하나만 들어가야한다.
    return (
        //묶어주기위한 태그.. 태그하나만 들어가야하기 때문에 묶는 용도로만 씀.
        <div> 
            <div className="hellodiv">
                {name}님 안녕하세요!
            </div>
            <div>
                <MyCom />
            </div> 
        </div>
    );
}

export default Hello;