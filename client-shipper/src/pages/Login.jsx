import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../assets/images/login.jpg";
import axios from "axios";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      axios.post(`/user/login/4`, {
        "TENTK": e.target[0].value,
        "MATKHAUTK": e.target[1].value
      }).then(res => {
        localStorage.setItem("MATX", res.data.data[0].MATX);
        navigate("/");
      })
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <div className="m-auto flex">
          <img src={LoginImage} alt="Login" width="53%" height="100%" />
          <div className="w-full">
            <form className="form " onSubmit={submitHandler}>
              <div className="flex justify-center font-semibold text-5xl ml-10 mb-16 mt-20"><div className="text-orange-600">ABC.</div>Shipper</div>
              <div>
                <div className="pl-52 pt-4 pb-4 pr-5">
                  <label className="">Username:</label><br />
                  <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </span>
                    <input type="username" className="w-96 bg-white placeholder:font-italitc border border-slate-500 rounded-full py-2 pl-10 pr-4 focus:outline-none" ref={loginNameRef} />
                  </label>
                </div>
                <div className="pl-52 pt-4 pb-4 pr-5">
                  <label>Password:</label><br />
                  <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </span>
                    <input type="password" className="w-96 bg-white placeholder:font-italitc border border-slate-500 rounded-full py-2 pl-10 pr-4 focus:outline-none" ref={loginPasswordRef} />
                  </label>
                </div>
                <a href="" className="flex justify-end pr-32"> <u>Forgot password?</u></a>
                <div className="flex justify-center ml-20 pt-7 pb-4">
                  <button type="submit" className="bg-orange-500 rounded-lg text-white w-96 h-10">
                    Sign in
                  </button>
                </div>
                <p className="flex justify-center pt-10 ml-20 pb-10 text-gray-500">--OR--</p>
                <Link to="/register">
                  <div className="flex justify-center ml-20 pt-7 pb-4">
                    <button type="submit" className="bg-white rounded-lg font-semibold text-orange-500 w-96 h-10 border border-orange-400">
                      Sign up
                    </button>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default Login;
