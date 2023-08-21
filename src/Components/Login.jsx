import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "../FIrebase/Firebase";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Common from "../Services/Common";
import slider1 from  "../assets/slider-1.jpg"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const HandleLoginForm = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error(" Please enter Email address");
      return;
    }
    if (password === "") {
      toast.error(" Please enter Password");
      return;
    }
    await get(ref(database, "RegisterUser/")).then((snapshot) => {
      const data = snapshot.val();
      const key = Object.keys(data);
      for (let index = 0; index < key.length; index++) {
        const keyArray = key[index];
        if (keyArray !== "LastKey") {
          const Email = data[keyArray]["Email"];
          const Password = data[keyArray]["Password"];
          if (Email === email && Password === password) {
            toast.success("Login Successfully");
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } else {
            toast.warning("Invalid Email or Password");
            setEmail("");
            setPassword("");
            return;
          }
          localStorage.setItem("Email", email);
          localStorage.setItem("Password", password);
        }
      }
    });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1900} />
      <Common />
      <div className="grid grid-cols-4 lg:grid-cols-2" style={{alignItems:'center',justifyContent:'center',display:'flex',height:'85vh'}}>
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-1"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                type="text"
                id="username"
                name="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <button
              className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
              onClick={HandleLoginForm}
             
            >
              Login
            </button>
            </div>
            <h3 className="mt-3">
              Don't have an account?<Link to="/register">Register</Link>
            </h3>
          </form>
        </div>
      </div>
    
    </>
  );
};

export default Login;
