import { useEffect, useState } from "react"
import { getusersdata } from "../servicelayer/api"
import { useNavigate } from "react-router-dom"
import Card from "./card"


const Home =()=>{
    const[users,setUsers]=useState([])
   
    useEffect(()=>{
        getusersdata().then((data)=>setUsers(data.data))
      
    },[])
    const navigate= useNavigate()
    console.log(users)
    const handleclick=(id)=>{
        navigate(`/viewuser/${id}`)
    }
return(
   
    <div style={{display:"flex", flexWrap:"wrap"}}>
        {
       users.map((user,idx)=>(
        <>
        <Card key={user.id} user={user}  handleclick={handleclick}/>
       
        </>

        )
        )}
        </div>
       
)
}
export default Home