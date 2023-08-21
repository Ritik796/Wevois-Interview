import { get, ref, update } from "firebase/database";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database } from "../FIrebase/Firebase";
import Common from "../Services/Common";
const Register = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [UserName, setUserName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Gender, setGender] = useState("");
  const navigate = useNavigate()
  let LastKey = 1;

  const HandleSignUpButton = async (e) => {
    e.preventDefault();
    if (FullName === "") {
      toast.error("Please enter a Full Name");
      return;
    }
    if (UserName === "") {
      toast.error("Please enter a User Name");
      return;
    }
    if (Email === "") {
      toast.error("Please enter a Email");
      return;
    }

    if (Phone === "") {
      toast.error("Please enter a Phone Number");
      return;
    }
    if (Password === "") {
      toast.error("Please enter a Password");
      return;
    }
    if (ConfirmPassword === "") {
      toast.error("Please enter a Confirm Password");
      return;
    }
    if (Gender === "") {
      toast.error("Please select a Gender");
      return;
    }
    if (Password !== ConfirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      await get(ref(database, "RegisterUser/LastKey")).then((snapshot) => {
        const data = snapshot.val();
        LastKey = data + 1
      });
      await update(ref(database, "RegisterUser/" + LastKey), {
        FullName: FullName,
        UserName: UserName,
        Email: Email,
        Phone: Phone,
        Password: Password,
        ConfirmPassword: ConfirmPassword,
        Gender: Gender,
      });
      await update(ref(database, "RegisterUser/"), {
        LastKey: LastKey,
      });
      toast.success("Registered successfully");
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUserName("");
      setPhone("");
      setGender("");
      setTimeout(() => {
        navigate("/login")
      }, 2100);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        theme="light"
        transition={Slide}
        newestOnTop={false}
      />
      <Common />
      <div className="grid grid-cols-4 lg:grid-cols-2 " style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <div className="bg-white p-20 rounded shadow-md w-106">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <hr className="mb-6 border-t-2 border-gray-300"></hr>
          <form>
            <div className="flex">
              <div className="mr-10">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-1"
                    htmlFor="full Name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 "
                    type="text"
                    name="full Name"
                    id="full Name"
                    value={FullName}
                    required
                    placeholder="Enter your full name"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-1"
                  htmlFor="userName"
                >
                  UserName
                </label>
                <input
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  type="text"
                  name="userName"
                  id="userName"
                  required
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your userName"
                />
              </div>
            </div>

            <div className="flex">
              <div className="mr-10">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    type="text"
                    required
                    id="email"
                    name="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-1"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  maxLength={10}
                  required
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phoneNumber"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-10">
                <div className="mb-4">
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
                    required
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-1"
                  htmlFor="Confirmpassword"
                >
                  Confirm password
                </label>
                <input
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  type="password"
                  id="Confirmpassword"
                  name="Confirmpassword"
                  required
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter your Confirm password"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Gender
              </label>
              <div className="flex justify-evenly">
                <input
                  name="gender"
                  id="Male"
                  type="radio"
                  value="Male"
                  required
                  checked={Gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="Male">Male</label>
                <input
                  id="Feamle"
                  name="gender"
                  value="Female"
                  checked={Gender === "Female"}
                  type="radio"
                  required
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="Feamle">Female</label>
                <input
                  id="Others"
                  name="gender"
                  type="radio"
                  value="Other"
                  required
                  checked={Gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="Others">Others</label>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button
                className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
                onClick={HandleSignUpButton}
              >
                SignUp
              </button>
            </div>
            <h3 className="mt-3">
              Already have an account?<Link to="/login">Login</Link>
            </h3>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
