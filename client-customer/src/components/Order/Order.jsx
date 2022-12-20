import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LazyLoad from "react-lazy-load";

const orders = [
  {
    orderID: "O001",
    items: [
      {
        id: "food_1",
        title: "chicken deluxe fry",
        price: 150.0,
        rating: 4.3,
        image: "/images/chicken_deluxe_fry.jpg",
        supplier: "the-alley",

      },
      {
        id: "food_2",
        title: "Pasta",
        price: 70.0,
        rating: 4.3,
        image: "/images/pasta.jpg",
        supplier: "the-alley",
        status: "Delivered",
      }
    ],
    shipper: "Nguyen Hoai An",
    status: "Validating",
  },
  {
    orderID: "O002",
    items: [
      {
        id: "food_1",
        title: "chicken deluxe fry",
        price: 150.0,
        rating: 4.3,
        image: "/images/chicken_deluxe_fry.jpg",
        supplier: "the-alley",

      },
      {
        id: "food_2",
        title: "Pasta",
        price: 70.0,
        rating: 4.3,
        image: "/images/pasta.jpg",
        supplier: "the-alley",
        status: "Delivered",
      }
    ],
    shipper: "Nguyen Hoai An",
    status: "Delivered",
  },
]



const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getData = () => {

      axios.put(`/order/customer`, {

        "MAKH": "1",

      })
        .then(function (res) {
          let temp = res.data.data.orders;
          let temp2 = res.data.data.orders_details;

          temp2 = temp2.map(item => {
            return {
              id: item.MAMONAN,
              title: item.TENMONAN,
              price: item.GIA
            }
          });
          temp = temp.map((item, index) => {
            return {
              orderID: item.MADH,
              items: temp2[index],
              shipper: item.TEN,
              status: item.TRANGTHAIDH
            }
          });
          console.log(temp2);

          setOrders(temp);
        })
        .catch(function (e) {
          console.log(e);
        });
    };
    getData();
  }, [])


  return (
    <section>
      <div>
        <div>
          <div className="p-10 relative w-11/12">
            {orders.length === 0 ? (
              <h5 className="text-center">Your cart is empty</h5>
            ) : (
              <div className="">
                {orders.map((item, index) => (
                  <div key={index} className="mb-10 bg-white p-5 shadow-sm rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold bg-orange-400 text-white text-sm w-fit rounded-md py-2 px-3">ORDER: {item.orderID}</div>
                      <div className={`flex flex-row justify-center text-white text-sm py-1 px-2 rounded-md ${item.status === "Delivered" ? "bg-green-500" : "bg-orange-400"}`}>
                        {item.status}
                      </div>
                    </div>
                    {orders.items.map((item, index) => (
                      orders.items.length ?
                        <div key={index} className="flex flex-row space-y-2">
                          <div className="w-3/12 text-lg capitalize">{item.id}</div>
                          <div className="w-4/12 text-lg capitalize">{item.title}</div>
                          <p className="w-2/12 text-orange-500 text-lg">{item.price}đ</p>
                        </div >
                        : null
                    ))}
                    <hr className="my-2" />
                    <div className="flex items-end flex-col space-y-2">
                      <div className="text-lg">Người giao hàng: <span className="text-orange-400">{item.shipper}</span></div>
                      {
                        item.status === "Validating" ?
                          <button
                            className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
                            Cancel
                          </button>
                          :
                          <button
                            className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
                            Received
                          </button>
                      }
                    </div>
                  </div>

                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Order;
