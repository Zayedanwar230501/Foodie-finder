import { GoStarFill } from "react-icons/go";
import { CDN_URL } from "../utils/constants";

const Resturantcard = (props) => {
  const { resData } = props;
  return (
      <div className="m-4 p-4 w-64 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-95 transition-shadow duration-300 ease-in-out">
          <img
              className="w-full h-36 object-cover rounded-t-lg"
              alt="restaurant"
              src={CDN_URL + resData.info.cloudinaryImageId}
          />
          <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 truncate">{resData.info.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{resData.info.cuisines.join(", ")}</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                      <span className="text-yellow-500 text-lg font-bold mr-1">{resData.info.avgRating}</span>
                      <GoStarFill className="text-yellow-500 text-lg" />
                  </div>
                  <span className="text-gray-500">Delivery: {resData.info.sla.deliveryTime} mins</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>{resData.info.costForTwo} for two</span>
                  <span className="bg-green-100 text-green-600 py-2 px-1 rounded-md text-xs">Free Delivery</span>
              </div>
          </div>
      </div>
  );
};

export default Resturantcard;