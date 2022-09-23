import { createContext } from "react";
import Cookies from "js-cookie";
import { useContext } from "react";
import { useState } from "react";

const Context=createContext();
function UserContainer({children}){

const[jwt,setJwt]=useState(Cookies.get("jwt"));
const jwtTuple={jwt,setJwt};
return <Context.Provider value={jwtTuple}>{children}</Context.Provider>;
}
function useUser(){
    const context=useContext(Context);
    // if(context===undefined){
    //     throw new Error("")
    // }
    return context;
}
//function modifyJWT
export {UserContainer,useUser}