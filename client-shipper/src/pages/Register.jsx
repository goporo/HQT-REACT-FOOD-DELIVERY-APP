import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import RegisterImage from "../assets/images/register.jpg";
import RegisterSignal from "../assets/images/signup.jpg";

const Register = () => {
  const signupUsernameRef = useRef();
  const signupPasswordRef = useRef();
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupPhoneRef = useRef();
  const signupIDRef = useRef();
  const signupLicensePlateRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Register">
      <section>
        <div className="m-auto flex justify-between">
          <form className="form ml-5 md:space-y-3 lg:space-y-5 shadow-lg shadow-neutral-600 mr-6 " onSubmit={submitHandler}>
            <div className="flex flex-row-reverse  font-semibold text-4xl mr-7 pt-2">Shipper<div className="text-orange-600">ABC.</div></div>
            <div className="flex space-x-2 ml-5 pb-8">
              <span className="text-start font-medium text-4xl">Fill in information <br />to sign up</span>
              <div><img src={RegisterSignal} width="70px" alt="iconSignUp" /></div>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-32 pb-5 mr-20">
              <div>
                <label className="ml-16">Username:</label><br />
                <input type="username" className="border-2 border-black rounded-lg ml-16 h-8 w-36 md:w-52 lg:w-72" required ref={signupUsernameRef}
                />
              </div>
              <div>
                <label className="">Password:</label><br />
                <input type="password" className="border-2 border-black rounded-lg h-8 w-36 md:w-52 lg:w-72" required ref={signupPasswordRef} />
              </div>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-32 pb-5 mr-20">
              <div>
                <label className="ml-16">Email:</label><br />
                <input type="email" className="border-2 border-black rounded-lg ml-16 h-8 w-36 md:w-52 lg:w-72" required ref={signupEmailRef} />
              </div>
              <div>
                <label className="">Fullname:</label><br />
                <input type="name" className="border-2 border-black rounded-lg h-8 w-36 md:w-52 lg:w-72" required ref={signupNameRef} />
              </div>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-32 pb-5 mr-20">
              <div>
                <label className="ml-16">ID:</label><br />
                <input type="ID" className="border-2 border-black rounded-lg ml-16 h-8 w-36 md:w-52 lg:w-72" required ref={signupIDRef} />
              </div>
              <div>
                <label className="">License plate:</label><br />
                <input type="licensePlate" className="border-2 border-black rounded-lg h-8 w-36 md:w-52 lg:w-72" required ref={signupLicensePlateRef} />
              </div>
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-32 pb-5 mr-20">
              <div>
                <label className="ml-16">Phone:</label><br />
                <input type="phone" className="border-2 border-black rounded-lg ml-16 h-8 w-36 md:w-52 lg:w-72" required ref={signupPhoneRef} />
              </div>
            </div>
            <div className="pl-28 pt-10">
              <button type="submit" className="bg-orange-500 rounded-lg text-white w-48 h-10">
                Sign up
              </button>
            </div>
            <div className="text-center pt-5 pb-5">
              <div>Already have an account? <Link to="/login" className="text-orange-600"> Sign in</Link></div>
            </div>
          </form>
          <img src={RegisterImage} alt="register" width="40%" />
        </div>
      </section>
    </Helmet>
  );
};

export default Register;