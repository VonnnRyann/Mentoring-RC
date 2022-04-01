import React from 'react'
import { Navigate } from 'react-router'

export default function ProtectRoute({children}) {
    let user = null;
  if(user){
    return children
  }else{
      return (<Navigate to="/"/>)
  }
}
