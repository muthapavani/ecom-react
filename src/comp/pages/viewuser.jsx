import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getusersdata } from "../servicelayer/api"
import Card from "./card.jsx"

const Viewuser=()=>{ 
    const[card,setCard]=useState(null)
  const {id}= useParams()
  console.log(id)
  useEffect(()=>{
    getusersdata().then((data)=>{
        const singlecard =data.data.find((user,idx)=>user.id ==(id))
        setCard(singlecard)
    })

  },[id])
    return(<>
    user
    {card &&<>
    <Card user ={card}/>
    </>}
    
    </>)
}
export default Viewuser