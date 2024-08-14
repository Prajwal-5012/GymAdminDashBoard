import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");

    axios.post("http://localhost:8000/signup", {
      fullname: name,
      emailId: email,
      mobileNumber: mobileNumber,
      address:address,
      role: role,
      password: password,
    }).then((response)=>{
      if(response.status===200){
        navigate("/login");
      }

    }).catch((error)=>console.log("Error", error));
  };

  return (
    <div className="flex items-center justify-center bg-blue">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[28rem] m-4">
        <div>
          <h1 className="text-[2.5rem] font-bold py-3 text-center">Sign Up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Role</Form.Label>
              <Form.Control
                value={role}
                onChange={(e) => setRole(e.target.value)}
                type="text"
                placeholder="admin / employee"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="John Doe"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="johndoe@gmail.com"
              />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                type="text"
                placeholder="123-456-7890"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="123 Main St, Anytown, USA"
              />
            </Form.Group>

            <div className="text-[0.8rem] mb-3">
              Already have an account?{" "}
              <span className="text-blue-500 hover:underline hover:text-blue-700 cursor-pointer" onClick={()=>navigate("/login")}>
                Sign in
              </span>
            </div>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
