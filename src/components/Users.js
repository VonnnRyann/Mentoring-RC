import React, { useEffect,useState } from 'react'
import { Link,Outlet } from 'react-router-dom';


export default function Users() {


    const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div> 
      <h1>Users Page</h1>
      
      {users.map(user => <p key={user.id}><Link to={`/users/${user.name}`} state={user}>{user.name}</Link></p>)}
   
   <Outlet/>
    
    </div>
  )
  
}
