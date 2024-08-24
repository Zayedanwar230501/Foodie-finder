
import React from "react"

class Userclass extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
        userInfo:[{
            name:"Dummy",
            location:"default",
        },]
        }
        // console.log("Child Constructor");
    }
    
    async componentDidMount(){
        const usernames = ["zayedanwar230501","zaibreyaz","poulami1111"]
        const fetchUserData = async (username)=>{
            const data = await fetch("https://api.github.com/users/"+username);
            const json = await data.json();
            return json;
        }
        const userPromises = usernames.map(name => fetchUserData(name));
        const usersData = await Promise.all(userPromises);
        this.setState({
            userInfo:usersData
        })
        console.log(usersData);
        // console.log("Child DidMount")
        }

    render(){
        // console.log("Child Render");
    // const {name,location,avatar_url}=this.state.userInfo;
    const {userInfo} = this.state;
return (
    <div >
        {userInfo.map((user) => (
            <div key={user.id} className="user-card">
                <img src={user.avatar_url} alt={user.name} />
                <h1>Name: {user.name}</h1>
                <h2>Location: {user.location}</h2>
                <h3>Profession: Web Developer</h3>
            </div>
        ))}
    </div>
);
}
}

export default Userclass;
