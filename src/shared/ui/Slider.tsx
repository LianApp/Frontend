import React from "react"; 
import Slider from "react-slick"; 

 
interface SliderProps {
    options: Object,
    items: any[]
}

export default function Slide({ options, items }: SliderProps) { 
    console.log(items);
    
    return ( 
        <div>
            <Slider {...options}> 
                {items.map(el => <div>{el.title}</div>)} 
            </Slider> 
        </div>
    ); 
}