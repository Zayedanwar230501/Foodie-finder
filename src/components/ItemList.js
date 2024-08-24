import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) => {
    console.log({items})
    return(
        <div>
        {items.map(item =>
             <div key={item.card.info.id} className=" p-4 m-2 border-gray-300 border-b-2 flex justify-between">
               <div>
               <div className="py-3">
               <span> {item.card.info.name} </span>
               <br></br>
               <span> ₹ {item.card.info.price/100} </span>
                  </div>
                  <p className="text-xs">{item.card.info.description}</p>
                 </div>
              <img src={CDN_URL + item.card.info.imageId} className="w-56"></img>
                 </div>
              )}
       </div>
    )
}

export default ItemList;