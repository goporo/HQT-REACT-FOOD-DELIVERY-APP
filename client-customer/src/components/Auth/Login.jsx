import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const navigate = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();
    try {
      axios.post(`/user/login/5`, {
        "TENTK": e.target[0].value,
        "MATKHAUTK": e.target[1].value
      }).then(res => {
        localStorage.setItem("MAKH", res.data.data[0].MAKH);
        navigate("/");
      })
    } catch (error) {
      alert(error)
    }

  };

  return (
    <div className="block p-10 rounded-lg shadow-lg bg-white max-w-lg m-auto mt-10">
      <p className="text-center font-semibold text-xl text-red-500 mb-6 -mt-4">Please sign in to continue</p>
      < form onSubmit={submitHandler}>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Username</label>
          <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                              border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
          <input type="password" className="form-control block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2" placeholder="Password" />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input type="checkbox" className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck2" />
            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
          </div>
          <a href="#!" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
            password?</a>
        </div>
        <button type="submit" className="
    w-full
    px-6
    py-2.5
    bg-blue-600
    text-white
    font-medium
    text-xs
    leading-tight
    uppercase
    rounded
    shadow-md
    hover:bg-blue-700 hover:shadow-lg
    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg
    transition
    duration-150
    ease-in-out">Sign in</button>
        <p className="text-gray-800 mt-6 text-center">Not a member? <a href="/register" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
        </p>
      </form >
    </div >
  );
}
  ;

export default Login;
