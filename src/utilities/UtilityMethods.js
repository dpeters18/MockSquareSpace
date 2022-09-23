import { useEffect, useState } from "react";

function useLocalState (defaultVaule,key) {
const [value,setValue]=useState(()=>{
    const localStorageItem=localStorage.getItem(key);
    return localStorageItem !==null?JSON.parse(localStorageItem):value;
})

useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value));
},[key,value]);

return [value,setValue];
}
export {useLocalState}