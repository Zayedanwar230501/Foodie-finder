import { IoSearch } from "react-icons/io5";
import Resturantcard from "./Resturantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body2 = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1); // Page number state
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if more data is available

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchData = async (pageNumber) => {
   if (loading) return; // Prevent multiple simultaneous fetches

    setLoading(true);
    try {
      const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&page=${pageNumber}`);
      const json = await data.json();
      
      const newRestaurants = json.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants || [];
      
      if (newRestaurants.length === 0) {
        setHasMore(false); // No more data to load
      } else {
        setRestaurantList((prevList) => [...prevList, ...newRestaurants]);
        setFilteredList((prevList) => [...prevList, ...newRestaurants]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading || !hasMore) {
      return;
    }
    if(page < 10)
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);


  if(onlineStatus === false)
    return <h1>Your Internet Is Off</h1>

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-[85vw] mx-auto ">
      
      <div className="flex flex-col md:flex-row items-center mt-5 space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex items-center w-full md:w-auto ">
    <input
      type="text"
      placeholder="Search for restaurants and food"
      value={searchText}
      onChange={(e) => {
        const searchValue = e.target.value;
        setSearchText(searchValue);
        const filteredRestaurant = restaurantList.filter((res) =>
          res.info.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredList(filteredRestaurant);
      }}
      className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  <div className="flex justify-center md:justify-end w-full md:w-auto">
    <button
      className="bg-customRed text-white py-2 px-6 rounded-lg border-0 shadow-md hover:bg-orange-500 hover:shadow-lg transition-transform transform hover:scale-105"
      onClick={() => {
        const filteredList = restaurantList.filter((res) => res.info.avgRating > 4.3);
        setFilteredList(filteredList);
      }}
    >
      Top Rated Restaurants
    </button>
  </div>
</div>

      <div className=" p-3 mt-8 flex flex-wrap justify-evenly items-center" >
        {filteredList.map((resturant) => (
          <Link  key={resturant?.info?.id} to={"/resturants/" + resturant?.info?.id}>
            <Resturantcard resData={resturant} />
          </Link>
        ))}
      </div>
      {loading && <Shimmer />} {/* Show shimmer while loading more data */}
    </div>
  );
};

export default Body2;













{/* <div className="flex items-center mt-5">
        <div className="flex items-center mx-auto" >
          <IoSearch
            onClick={() => {
              const filteredRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredRestaurant);
            }}
          />
          <input
            type="text"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div >
          <button
          className="bg-customRed text-white py-2 px-6 rounded-lg border-0 shadow-md hover:bg-orange-500 hover:shadow-lg transition-transform transform hover:scale-105" 
          
            onClick={() => {
              const filteredList = restaurantList.filter((res) => res.info.avgRating > 4.3);
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div> */}