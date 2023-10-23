import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{
const[email,setEmail]=React.useState('');
const[password,setPassword]=React.useState('');
const navigate=useNavigate();
useEffect(()=>{
    constauth=localStorage.grtItem('user');
    if(auth){
        navigate('/')   
    }
})

const handleLogin=async()=>{
    console.warn(email,password)
    let result=await fetch('htt[://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result= await result.json();
    console.warn(result)
    if(result.auth){
localStorage.setItem("user",JSON.stringify(result.user));
localStorage.setItem("tokrn",JSON.stringify(result.auth));
navigate('/')
    }else{
        alert("please enter currect details")
    }

}

    return(
        <div className="login">
            <input type="text" className="inputBox" placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <input type="password" className="inputBox" placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button onClick={handleLogin} className="appButton" type="button">Login</button>

        </div>
    )
}
export default Login;