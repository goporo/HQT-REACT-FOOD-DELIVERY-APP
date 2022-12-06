import React, { useState } from "react";
import { useSelector } from "react-redux";


const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <div>
      <div>
        <div >
          <h6 className="mb-4">Shipping Address</h6>
          <form className="checkout__form" onSubmit={submitHandler}>
            <div className="form__group">
              <input
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => setEnterName(e.target.value)}
              />
            </div>

            <div className="form__group">
              <input
                type="email"
                placeholder="Enter your email"
                required
                onChange={(e) => setEnterEmail(e.target.value)}
              />
            </div>
            <div className="form__group">
              <input
                type="number"
                placeholder="Phone number"
                required
                onChange={(e) => setEnterNumber(e.target.value)}
              />
            </div>
            <div className="form__group">
              <input
                type="text"
                placeholder="Country"
                required
                onChange={(e) => setEnterCountry(e.target.value)}
              />
            </div>
            <div className="form__group">
              <input
                type="text"
                placeholder="City"
                required
                onChange={(e) => setEnterCity(e.target.value)}
              />
            </div>

            <hr />

            <div >
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </div>


            <button type="submit" className="py-3 px-14 text-white bg-red-500 rounded-lg hover:opacity-80">
              Buy
            </button>
          </form>
        </div>


      </div>
    </div >
  );
};

export default Checkout;
