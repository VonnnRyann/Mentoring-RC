import React, { useState,useReducer } from 'react'

import { initialState,reducer } from './reducer/Reducer';

export default function About() {

  const [state, dispatch] = useReducer(reducer, initialState);

/*   const [counter,setCounter]=useState(0);


  const increment=()=>{
    setCounter(counter+1);
  }
  const decrement=()=>{
    setCounter(counter-1);
  }
  const reset=()=>{
    setCounter(0);
  }
 */
  return (
    <div><h1>About Page</h1>
    <h2>{state.counter}</h2>
    <button onClick={()=>dispatch({type:"increment my counter", payload:5})}>increment</button>
    <button onClick={()=>dispatch({type:"decrement my counter", payload:5})}>decrement</button>
    <button onClick={()=>dispatch({type:"reset my counter", payload:100})}>reset</button>
   <button onClick={()=>dispatch({type:"add new user", payload: {name:"naqvi"}})}>add user</button>
    </div>
  )
}
