import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import RegisterImage from "../assets/images/register.jpg";
import RegisterSignal from "../assets/images/signup.jpg";

const Register = () => {
  const signupLastameRef = useRef();
  const signupFirstnameRef = useRef();
  const signupEmailRef = useRef();
  const signupPhoneRef = useRef();
  const signupIDRef = useRef();
  const signupCityRef = useRef();
  const signupNoteRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Helmet title="Register">
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12" className="m-auto flex justify-between">
                <form className="form ml-5 md:space-y-3 lg:space-y-5 shadow-lg shadow-neutral-600 mr-6 " onSubmit={submitHandler}>
                  <div className="flex flex-row-reverse  font-semibold text-4xl mr-7 pt-2">Tài xế<div className="text-orange-600">ABC.</div></div>
                  <div className="flex space-x-2 ml-5 pb-1">
                    <span className="text-start font-medium text-4xl">Điền thông tin để <br/>đăng kí tài xế</span>
                    <div><img src={RegisterSignal} width="70px" alt="iconSignUp"/></div>
                  </div>
                  <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-60 pb-1 mr-7">
                    <div>
                      <label className="">Họ và tên đệm:</label><br/>
                      <input type="lastname" className="border-2 border-black rounded-lg h-8 w-36 md:w-52 lg:w-72" required ref={signupLastameRef}
                      />
                    </div>
                    <div>
                    <label className="">Tên:</label><br/>
                      <input type="firstname" className="border-2 border-black rounded-lg h-8 w-36 md:w-52 lg:w-72" required ref={signupFirstnameRef} />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-60 pb-1 mr-7">
                  <div>
                    <label className="">Email:</label><br/>
                    <input type="email" className="border-2 border-black rounded-lg h-8 w-36 md:w-52 lg:w-72" required ref={signupEmailRef} />
                  </div>
                  <div>
                    <label className="">Số điện thoại:</label><br/>
                    <input type="phone" className="border-2 border-black rounded-lg h-8 w-36 md:w-52 lg:w-72" required ref={signupPhoneRef} />
                  </div>
                  </div>
                  <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-60 mr-7">
                    <div>
                      <label className="">Số CMND/ Căn cước:</label><br/>
                      <input type="ID" className="border-2 border-black rounded-lg h-8 w-36 md:w-52 lg:w-72" required ref={signupIDRef}/>
                    </div>
                    <div>
                      <label className="">Tỉnh/ Thành Phố:</label><br/>
                      <input type="city" className="border-2 border-black rounded-lg h-8 w-36 md:w-52 lg:w-72" required ref={signupCityRef} />
                    </div>
                  </div>
                  <div className="mr-7">
                    <label className="">Ghi chú:</label><br/>
                    <textarea type="note" className="border-2 border-gray-700 rounded-lg h-36 w-36 md:w-52 lg:w-full" required ref={signupNoteRef} />
                  </div>
                  <div className="pl-11 pt-10">
                    <button type="submit" className="bg-orange-500 rounded-lg text-white w-48 h-10">
                      Đăng ký
                    </button>
                  </div>
                  <div className="text-center pt-2">
                    <Link to="./login">Bạn đã có tài khoản? Đăng nhập</Link>
                  </div>
                </form>
                <img src={RegisterImage} alt="register" width="40%"/>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  );
};

export default Register;
