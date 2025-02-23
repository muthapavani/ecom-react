import "./card.css"
const Card =({user ,handleclick})=>{
    return(<>
    <div className="container" key={user.id} onClick={()=>handleclick(user.id)}>
         <h3 className="user-name">Name:{user.name}</h3>   
         <p className="user-info">phone No:{user.phno}</p>
         <p className="user-info">email:{user.email}</p>
     
        <div  className="company-info">
            <h3>company:{user.company.name}</h3>
            <h3>address:{user.address.city}</h3>
        </div>
        </div>
    </>)
}
export default Card