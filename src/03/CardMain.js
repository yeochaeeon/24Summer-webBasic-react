// rfc치고 + tab 
import Card from "./Card";
import CData from "./CardData.json";
export default function CardMain() {
  
  // const imgSrc = './img/html.png';
  // const title = 'HTML';
  // const content = 'HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용';

  console.log(CData);
  const tags = CData.map( item => <Card imgSrc={item.imgUrl} 
                                        title={item.title} 
                                        content={item.content} /> 
                        );
  return (
    <div className="grid w-10/12 grid-cols-1 gap-4 md:grid-cols-2">
      {/* <Card imgSrc={imgSrc} title={title} content={content} /> */}
      {tags}
    </div>
  )
}