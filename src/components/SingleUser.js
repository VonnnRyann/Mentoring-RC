import React from 'react'
import { useParams,useLocation} from 'react-router-dom' 

export default function SingleUser() {

    const {name}= useParams();
    const {state} =useLocation()
 
  return (
    <div><h1>Hello , {name}</h1>
       {state &&<div>
        <h2>{state.name}</h2>
        <h2>{state.email}</h2>
        <h3>{state.username}</h3>
    </div> }
    </div>
  )
}
