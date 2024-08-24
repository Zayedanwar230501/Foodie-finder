
import { useState } from "react";
const User=(props)=>{
    const [count]=useState(0);
    const [count1]=useState(1);
    const {name,location}=props;
return(
    <div >
        <h1>Count:{count}</h1>
        <h1>Count1:{count1}</h1>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Profession: Web Developer</h3>
    </div>
)
}

export default User;