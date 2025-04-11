
import { SlArrowDown } from "react-icons/sl";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data,ShowItems,ShowIndex}) => {
    console.log(data);
    
    const handleClick=()=>{
        ShowIndex();
    }
return(
    <div className="w-7/12 my-4 mx-auto bg-gray-50 shadow-lg p-6 ">
     
     <div className="flex justify-between cursor-pointer" onClick={handleClick} >
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length}) </span>
        <span className="items-center">  <SlArrowDown /> </span>       
     </div>
        
        <div> {ShowItems && <ItemList items={data.itemCards} />} </div>
     
    </div>
)
}

export default RestaurantCategory;