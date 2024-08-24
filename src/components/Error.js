

import { useRouteError } from "react-router-dom"

const Error=()=>{
    const error=useRouteError();
    return(
        <div >
      <img src="https://st5.depositphotos.com/3848923/66828/i/450/depositphotos_668284672-stock-photo-illustration-cute-cartoon-chef.jpg" alt="Chef Cartoon" className="chef-image" />
      <h1>Oops!!!</h1>
      <h2 >Something Went Wrong</h2>
      <h3>{error.status}: {error.statusText}</h3>
      <p>We're sorry for the inconvenience. Please try again later or contact support.</p>
    </div>
    )
}

export default Error