import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const macn = 1;

const formatCurrency = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ'
}

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [needRefresh, setNeedRefresh] = useState(false);

  const updateOrder = (status, madh) => {
    // /order/:userType
    axios.post(`http://localhost:5000/order/3`, {
      "MAND": macn,
      "TRANGTHAIDH": status,
      "MADH": madh,
    })
    setNeedRefresh(!needRefresh)
  }
  const orderStatus = (status, orderID) => {
    status = status.replace(/\s/g, '').toLowerCase();
    if (status === "available") return <button
      onClick={() => updateOrder("PROCESSING", orderID)}
      className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
      Accept
    </button>
    if (status === "canceled") return <button
      className="w-[150px] py-3 bg-gray-500 cursor-not-allowed text-white rounded-md">
      Canceled
    </button>
    if (status === "delivering") return <button
      className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
      Received
    </button>
    if (status === "received") return <button
      className="w-[150px] py-3 bg-gray-500 cursor-not-allowed text-white rounded-md">
      Received
    </button>
    return <button
      className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
      Received
    </button>
  }

  useEffect(() => {
    const getData = async () => {
      axios.put(`http://localhost:5000/order/branch`, {
        "MACN": macn,
        "TRANGTHAIDH": "ALL",
        "TGBD": "2020-01-01",
        "TGKT": "2030-01-01"
      })
        .then(function (res) {
          let temp = res.data.data.Orders;
          temp = temp.map((item) => {
            return {
              orderID: item.MADH,
              shipper: item.TEN,
              status: item.TRANGTHAIDH,
              total: item.PHISP
            }
          });
          setOrders(temp.sort((a, b) => {
            if (a.status[2] > b.status[2]) return 1
            return -1
          }));
        })
        .catch(function (e) {
          console.log(e);
        });
    };
    getData();
  }, [needRefresh])



  return (
    <div className="p-10 relative w-11/12">
      {orders.length === 0 ? (
        <h5 className="text-center">No order yet!</h5>
      ) : (
        <div className="">
          {orders.map((item, index) => (
            <div key={index} className="mb-10 bg-white p-5 shadow-sm rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold bg-orange-400 text-white text-sm w-fit rounded-md py-2 px-3">ORDER: {item.orderID}</div>
                <div className={`flex flex-row justify-center text-white text-sm py-1 px-2 rounded-md ${(item.status.replace(/\s/g, '') === "AVAILABLE" || item.status.replace(/\s/g, '') === "DELIVERED") ? "bg-green-500" : "bg-orange-400"}`}>
                  {item.status}
                </div>
              </div>
              <Tr key={index} item={item} madh={item.orderID} />
              <hr className="my-2" />
              <div className="flex items-end flex-col space-y-2">
                <div className="">Total: {formatCurrency(item.total)}</div>
                {item.shipper ?
                  <div className="text-lg">Người giao hàng: <span className="text-orange-400">{item.shipper}</span></div>
                  :
                  null
                }
                {
                  orderStatus(item.status, item.orderID)
                }
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const Tr = (props) => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const getDetails = (madh) => {
      return axios.put(`http://localhost:5000/order/orderdetails`, {
        "MAKH": macn,
        "MADH": madh,
        "USER_TYPE": "3"
      })
        .then(function (res) {
          let temp = res.data.data;
          temp = temp.map(item => {
            return {
              id: item.MAMONAN,
              title: item.TENMONAN,
              price: item.GIA,
              sl: item.SOLUONG
            }
          });
          setOrderDetails(temp);

        })
        .catch(function (e) {
          console.log(e);
        });
    };
    getDetails(macn, props.madh);
  }, [])

  return (
    orderDetails.length ?
      orderDetails.map((item, index) => (
        <div key={index} className="flex flex-row space-y-2">
          <div className="w-3/12 text-lg capitalize">ID: {item.id}</div>
          <div className="w-6/12 text-lg capitalize">{item.title}</div>
          <p className="w-2/12 text-orange-500 text-md">{formatCurrency(item.price)}</p> <span>x{item.sl}</span>
        </div >
      )) : null
  )
}



export default Order;
