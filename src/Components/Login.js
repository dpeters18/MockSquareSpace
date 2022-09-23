import React, { useEffect } from "react";
import '../Login.css'
import {useState} from 'react';
import axios from 'axios';
import { useLocalState } from "../utilities/UtilityMethods";
import { useUser } from "../UserContainer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Login() {
    const [state, setState] = React.useState({
        username: "", 
        password: ""
      }); 
    const navigate=useNavigate();
    const[post,getPost]=useState(null);
    const user=useUser();
    const[userErr,setUserErr]=useState('');
    const [passErr,setPassErr]=useState('');
      function handleChange(event) {
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value,
        });
        validateFields(state.username);
        validateFields(state.password);
      }
      function validateFields(event){
        const val=event;
        switch(event)
        {
            case 'username':
                {
                    const username_valid = val.length>=8;
                    if (!username_valid)
                    {
                        setUsernameErr(' is invalid');
                    }
                    else 
                    {
                        setUsernameErr('');
                    }
                    break;
                }
            case 'password':
                {
                    // min length is 8 and there must be at least one number.
                    const password_valid = val.length >7&&val.match(/([a-z][A-Z]+[0-9])|([0-9]+[a-z][A-Z])/);
                    if (!password_valid)
                    {
                        setPasswordErr(' is invalid');
                    }
                    else
                    {
                        setPasswordErr('');
                    }
                    break;
                }
            default: {break;}
        }
      }
      function setPasswordErr(word){
        if(word.length>0)
           setPassErr("Password must have at least 8 characters and one number.");
      }
      function setUsernameErr(word){
        if(word.length>0)
        setUserErr("Username must have at least 8 characters.");
      }
      function loginRequest(){
        var token;
        var request={
            method:"post",
            url:"http://localhost:9080/api/auth/login",
            withCredentials:true,                  //this request gets the jwt
            headers:{
                'Content-Type':'application/json'
            },
            data:state
        };
        axios(request)
        .then(()=>  {user.setJwt(Cookies.get("jwt"));
        console.log(user.jwt);
        console.log(Cookies.get("jwt"));
     }, [user.jwt]).finally(function (response)
     {
         if(user.jwt)
         {
             navigate("/profile");
         }
     });
        };
    return (

        <div className="lParent">
            <div className="center">

                <h1>Login</h1>

                <form>
                    <div className="txt_field">
                        <input type="text" name="username" value={state.username} onChange={handleChange}/>
                        <label>Username</label>
                    </div>
                    <div className="txt_field">
                        <input type="password"  name="password" value={state.password} onChange={handleChange}/>
                        <label>Password</label>
                    </div>
                    <div>
                        <input type="button" value="Login" onClick={loginRequest}/>
                    </div>
                </form>     
            </div>
        </div>
    )
}

export default Login