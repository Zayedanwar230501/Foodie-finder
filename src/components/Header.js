import { FaShoppingCart } from "react-icons/fa";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"



const Header = () => {
  const[btnName,setbtnName]=useState("Login");
 const onlineStatus = useOnlineStatus();

    return (
      <nav className="bg-gray-800 text-white font-bold p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-4 md:mb-0" >
          <img
           className="w-16 h-16 rounded-full bg-gradient-to-r  flex items-center justify-center shadow-lg border-4 border-white transition-transform transform hover:scale-110"
            alt="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div >
          <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <li className="text-xl">
              <span>Online: {onlineStatus?"✅":"🔴"}</span> </li>
            <li><Link to="./" className="text-white text-xl hover:text-orange-300 hover:underline font-semibold transition-all duration-300">Home</Link></li>
            <li> <Link to="./about" className="text-white text-xl hover:text-orange-300 hover:underline font-semibold transition-all duration-300">About</Link> </li>
            <li><Link to="./contact" className="text-white text-xl hover:text-orange-300 hover:underline font-semibold transition-all duration-300">Contact</Link></li>
            <li className="p-3">
              <FaShoppingCart
               className="text-xl hover:text-orange-300 hover:scale-125  duration-300 shadow-lg " 
              />
            </li>
            <button  onClick={
          ()=>{(btnName==="Login")?setbtnName("Logout"):setbtnName("Login")}}
          className="bg-customRed text-white py-2 px-6 rounded-lg border-0 shadow-md hover:bg-orange-500 hover:shadow-lg transition-transform transform hover:scale-105"
          >{btnName}</button>
          </ul>
        </div>
        
      </nav>
    );
  };


  export default Header;