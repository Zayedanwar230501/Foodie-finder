import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body2 from "./components/Body2";
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const App = () => {
  return (
    <div >
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter=createBrowserRouter([{
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body2/>,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/resturants/:resId",
        element:<ResturantMenu/>
      }
    ]  
}])

const root = ReactDOM.createRoot(document.getElementById("container"));

root.render(<RouterProvider router={appRouter}/>);
