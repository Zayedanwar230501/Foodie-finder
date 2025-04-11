
import { CDN_URL,DISH_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="p-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-6 m-2 border-gray-300 border-b-2 flex justify-between items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className=" flex-1 pr-4">
            <div className="py-2">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.card.info.name}
              </h3>
              <p className="text-green-600 font-medium">₹ {item.card.info.price / 100}</p>
            </div>
            <p className="text-gray-600 text-sm">{item.card.info.description}</p>
          </div>
          <div className="relative">
            {item.card.info.imageId ? (
                <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className=" w-36 h-36 object-cover rounded-lg"
              />
            ):(
              <img
              src={DISH_URL}
              alt="Default"
              className="w-36 h-36 object-cover rounded-lg"
               />
            )}
          <button className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 py-2 px-4 bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg text-sm font-semibold text-green-600">
            Add +</button>
         </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList