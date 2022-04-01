import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Profile() {
   
let user = {name:"Naqvi"};
         return (
    <div>
        <h1>Profile Page</h1>
        <h1>{user.name}</h1>
    </div>
  )
   
 
}
