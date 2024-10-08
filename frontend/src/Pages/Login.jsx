import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:8000/signin", {
      emailId : email, 
      password: password,
    }).then((response)=>{
      if(response.status===200){
        navigate("/");
      }
    }).catch((error)=>{
      console.log("Error", error);
    })
  }

  return (
    <div className="flex items-center justify-center h-screen bg-blue">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <div>
          <h1 className="text-[2.5rem] font-bold py-3 text-center">Sign In</h1>
          <p className="pb-2">
            <span className="font-bold">Role: </span>Admin
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <div className="text-[0.8rem] mb-3">
              Don't have an account?{" "}
              <span
                className="text-blue-500 hover:underline hover:text-blue-700 cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </div>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Sign in
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
