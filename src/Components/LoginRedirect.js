import React from 'react'
import { Navigate } from 'react-router-dom';
import { useLocalState } from '../utilities/UtilityMethods'
 const LoginRedirect = (children) => {
  const[jwt,setJwt]=useLocalState("",""); 
  return jwt?children:<Navigate to="\login"></Navigate>
}
