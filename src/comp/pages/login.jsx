import { useState } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"

const Login =()=>{
    const[formdata,setformdata]=useState({
        name:"",
        email:"",
        password:""
    })
    const[userd,setuserd]=useState(null)
    const navigate = useNavigate()
    const handlechange =(e)=>{
        const{name,value}=e.target;
        setformdata({...formdata,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const{name,email,password}=formdata
     setuserd({name,email,password})
        navigate("/")
    }
console.log(userd)
    return(
        <form className="form" onSubmit={handleSubmit}>
             <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" placeholder="enter name" onChange={handlechange}/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="enter email" onChange={handlechange}/>
            <label htmlFor="password">password</label>
            <input type="password" id="password" name="password" placeholder="enter password " onChange={handlechange}/>
            <button type="submit">Login</button>
        </form>
    )
}
export default Login