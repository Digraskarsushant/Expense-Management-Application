import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { useCookies } from "react-cookie"

function Login() {

  const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cookies, setCookie] = useCookies(['user'])

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    setCookie('user', { email, password }, { path: '/' });
                    history("/services",{state:{id:email}})
                    
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
                
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" onClick={submit} className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">
        Create New Account..! <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
}

export default Login;