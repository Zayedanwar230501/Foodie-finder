import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import { CDN_URL, DISH_URL } from "../utils/constants";
import { GoStarFill } from "react-icons/go";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResturantMenu=()=>{
 const {resId}=useParams();

  const resInfo = useResturantMenu(resId);
  const [showIndex,setShowIndex]=useState(null);
  
if (resInfo===null) return <Shimmer/>

   const {name,avgRating,areaName,locality,costForTwoMessage,cuisines,cloudinaryImageId}=resInfo?.cards[2]?.card?.card?.info
  
  //  const { itemCards } =
  //  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

     const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>  c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") 
        
        
        return(
        <div>

<div className="w-full max-w-4xl mx-auto my-8 border border-gray-300 rounded-lg shadow-xl flex flex-col md:flex-row bg-white">
  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
    <img 
      className="w-full h-56 object-cover rounded-lg shadow-md"
      src={CDN_URL + cloudinaryImageId}
      alt={name}
    />
  </div>
  <div className="flex flex-col justify-between p-6 w-full">
    <div>
      <h1 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2">{name}</h1>
      <h3 className="text-base md:text-lg text-gray-700 mb-4">{cuisines.join(", ")}</h3>
    </div>
    <div>
      <h3 className="text-base md:text-lg text-gray-700 flex items-center mb-2">
        <span className="flex items-center text-gray-800 font-semibold">
          {avgRating} 
          <GoStarFill className="text-yellow-500 text-lg ml-1" />
        </span>
        <span className="mx-2 text-gray-500">|</span>
        <span className="text-gray-800 font-semibold">{costForTwoMessage}</span>
      </h3>
      <h3 className="text-base md:text-lg text-gray-700 mb-1 font-semibold">Outlet - {areaName}</h3>
      <h3 className="text-base md:text-lg text-gray-600">{locality}</h3>
    </div>
  </div>
</div>

<div>
    {/* Body of the Resturant Menu Accordian */}
    {categories.map((category,index) => 
    <RestaurantCategory key={category?.card?.card.title}
     data={category?.card?.card}
     ShowItems={index === showIndex?true:false}
     ShowIndex={()=>setShowIndex(index === showIndex ? null : index)}
     />
     )}
</div>
        </div>
    )
}

export default ResturantMenu;






