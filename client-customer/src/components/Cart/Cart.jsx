import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BsFillTrashFill } from 'react-icons/bs';
import Select from 'react-select'
import Modal from 'react-modal';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import LazyLoad from "react-lazy-load";
import axios from "axios";

const makh = '1'

const formatCurrency = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ'
}

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);


  return (
    <section>
      <div>
        <div>
          <div className="p-10 relative w-11/12">
            {cartItems.length === 0 ? (
              <div >
                <div className="text-center text-lg mb-5">Your cart is empty
                  <a
                    href="/"
                    className="text-orange-500 hover:underline ml-2"
                  >Order Now</a>
                </div>

              </div>
            ) : (
              <table className="table-fixed w-full">
                <thead >
                  <tr className="text-lg">
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <Tr item={item} key={item.id} />
                  ))}
                </tbody>
              </table>
            )}
            {cartItems.length === 0 ?
              null :
              <>
                <hr />
                <div className="mt-5 flex flex-col right-14 absolute text-center">
                  <h6>
                    Total:
                    <span className="text-orange-400"> {formatCurrency(totalAmount)}</span>
                  </h6>
                  <div className="mt-4">
                    <button
                      onClick={() => setShowModal(true)}
                      className="px-10 py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            }

          </div>
        </div>
      </div>
      {/* modal */}
      <Modal
        ariaHideApp={false}
        isOpen={showModal}
        className="bg-white border-solid border-2 border-slate-300 p-10 top-1/2 left-1/2 fixed w-5/12 shadow-md rounded-xl"
        style={{
          content: {
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <div className="w-full flex justify-center p-5">
          <Checkout cartItems={cartItems} />
          <button
            className="fixed top-0 right-0 bg-red-500 text-white text-center py-3 px-4 font-bold rounded-lg"
            onClick={() => setShowModal(false)}>X</button>

        </div>
      </Modal>
    </section>
  );
};

const Tr = (props) => {
  const { id,
    title,
    price,
    rating,
    image,
    supplier,
    quantity
  } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr className="text-center">
      <td className="flex justify-center my-6">
        <LazyLoad height={64}>
          <img className='w-[64px] h-[64px] rounded-lg' src={image} alt="" />
        </LazyLoad>
      </td>
      <td >
        <h1 className="font-semibold text-lg capitalize">{title}</h1>
      </td>
      <td >
        <p className="text-orange-500 text-md">{formatCurrency(price)}</p>
      </td>
      <td >
        <div className="flex flex-row justify-center">
          <button className='cursor-pointer hover:opacity-80 rounded-lg bg-red-600 text-white text-md font-semibold py-1 px-3'>-</button>
          <p className="px-4 mt-1">{quantity}</p>
          <button className='cursor-pointer hover:opacity-80 rounded-lg bg-red-600 text-white text-md font-semibold py-1 px-3'>+</button>

        </div>
      </td>
      <td>
        <button onClick={() => deleteItem()}>
          <BsFillTrashFill size={25} className="cursor-pointer hover:opacity-80 mt-1" />
        </button>
      </td>
    </tr >
  );
};

export default Cart;


// MODAL
const Checkout = (props) => {
  const cartItems = props.cartItems;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 10000;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const handleCheckout = (e) => {
    const foods = cartItems.map(item => {
      return {
        MAMONAN: item.id,
        SOLUONG: item.quantity
      }
    });
    e.preventDefault();
    // console.log(e.target[0].value)
    try {
      axios.post(`/order/place-order`, {
        "MAKH": makh,
        "MACN": "1",
        "HINHTHUCTT": "VI",
        "MADCGH": null,
        "foods": foods
      })
      //xoa thuc an khoi cart
      foods.forEach((item) => {
        dispatch(cartActions.deleteItem(item.MAMONAN));
      })

      navigate("/order")

    } catch (error) {
      alert(error);
    }

  };

  return (
    <div>
      <h6 className="mb-4">Shipping Information</h6>
      <form onSubmit={handleCheckout}>
        <FormControl >
          <TextField id="outlined-basic" label="Name" variant="outlined" margin="normal" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" margin="normal" />
          <TextField id="outlined-basic" label="Address" variant="outlined" margin="normal" />
          <FormLabel id="demo-radio-buttons-group-label">Payment method</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="vi"
            name="radio-buttons-group"
          >
            <FormControlLabel value="vi" control={<Radio />} label="Cash On Delivery" />
            <FormControlLabel value="cc" control={<Radio />} label="Credit Card" />
            <FormControlLabel value="mm" control={<Radio />} label="Momo" />
          </RadioGroup>

          <div className="my-4">
            <h6 className="flex items-center justify-between mb-4">
              Subtotal: <span className="text-orange-400">{formatCurrency(cartTotalAmount)}</span>
            </h6>
            <h6 className="flex items-center justify-between mb-4">
              Shipping: <span className="text-orange-400">{formatCurrency(shippingCost)}</span>
            </h6>
            <hr />
            <div className="mt-4">
              <h5 className="flex items-center justify-between font-semibold">
                Total: <span className="text-orange-400">{formatCurrency(totalAmount)}</span>
              </h5>
            </div>
          </div>
        </FormControl>
        <button
          type="submit"
          className="py-3 px-14 text-white bg-red-500 rounded-lg hover:opacity-80">
          Buy
        </button>
      </form>
    </div>
  );
};