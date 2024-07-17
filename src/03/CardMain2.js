import Card2 from "./Card2";
import cardData from "./CardData.json";
import React from 'react'

export default function CardMain2() {
    const cards = cardData.map( item => <Card2 imgSrc={item.imgUrl} 
                                            title={item.title} 
                                            content={item.content} />);
    return (
        <div className="grid w-10/12 grid-cols-1 gap-4 p-8 md:grid-cols-2">
            {cards}
        </div>
    )
}
