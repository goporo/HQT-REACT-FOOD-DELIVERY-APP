import React from "react";
import { useEffect, useState } from 'react';
import moment from 'moment';

const orders = [
  {
    orderID: "001",
    items: [
      {
        id: "food_1",
        title: "Nạm Gân",
        price: 40000,
      },
      {
        id: "food_2",
        title: "Tái ",
        price: 35000,
      }
    ],
    status: "waiting",
  },
  {
    orderID: "002",
    items: [
      {
        id: "food_3",
        title: "Tái Nạm",
        price: 40000,
      },
      {
        id: "food_4",
        title: "Thập Cẩm",
        price: 45000,
      }
    ],
    status: "success",
    shipper: "Ngin Phan",
  },
  {
    orderID: "003",
    items: [
      {
        id: "food_5",
        title: "Đặc biệt",
        price: 50000,
      },
      {
        id: "food_6",
        title: "Nạm",
        price: 35000,
      }
    ],
    status: "doing",
  },
  {
    orderID: "004",
    items: [
      {
        id: "food_7",
        title: "Trà gừng",
        price: 20000,
      },
      {
        id: "food_8",
        title: "Thập cẩm",
        price: 45000,
      }
    ],
    status: "shipping",
    shipper: "Nguyen Phan",
  },
  {
    orderID: "005",
    items: [
      {
        id: "food_9",
        title: "Đặc biệt",
        price: 50000,
      },
      {
        id: "food_10",
        title: "Nạm",
        price: 35000,
      }
    ],
    status: "cancel",
  },
  {
    orderID: "006",
    items: [
      {
        id: "food_11",
        title: "Nạm Gân",
        price: 40000,
      },
      {
        id: "food_12",
        title: "Nạm",
        price: 35000,
      }
    ],
    status: "shipping",
    shipper: "Minh Tei",
  },
]

const OrdersPage = () => {
  useEffect(() => {
    console.log(JSON.stringify({
      MACN: '1         ',
      TGBD: moment().subtract(1, 'years').format('YYYY-MM-DD'),
      TGKT: moment().format('YYYY-MM-DD'),
    }));

    fetch('http://localhost:5000/order/branch', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        MACN: '1',
        TGBD: moment().subtract(1, 'years').format('YYYY-MM-DD'),
        TGKT: moment().format('YYYY-MM-DD'),
        TRANGTHAIDH: 'ALL',
      })
    }).then(res => res.json()).then(data => {
      console.log(data);
    })
  }, []);

  return (
    <section>
      <div>
        <div>
          <div className="p-10 relative w-12/12">
            {orders.length === 0 ? (
              <h5 className="text-center">Your cart is empty</h5>
            ) : (
              <div className="">
                {orders.map((item, index) => (
                  <Tr key={index} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


const Tr = (props) => {
  const vnCurrencyFormatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
  const {
    orderID,
    items,
    // { id,
    //   title,
    //   price,
    //   rating,
    //   image,
    //   supplier },
    shipper,
    status
  } = props.item;

  return (
    <div className="mb-10 bg-white p-5 shadow-sm rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold bg-orange-400 text-white text-2sm w-fit rounded-md py-2 px-3">ORDER: {orderID}</div>
        <div className={`flex flex-row justify-center text-white text-2sm py-1 px-2 rounded-md ${status === "Delivered" ? "bg-green-500" : "bg-orange-400"}`}>
          {status}
        </div>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex flex-row mx-5 space-y-2 space-x-2">
          <div className="w-3/12 text-2lg capitalize">{item.id}</div>
          <div className="w-4/12 text-2lg capitalize">{item.title}</div>
          <p className="w-2/12 text-orange-500 text-lg">{vnCurrencyFormatter.format(item.price)}</p>
        </div >
      ))}
      <hr className="my-2" />
      <div className="flex items-end flex-col space-y-2">
        {
          status !== 'cancel' && (
            <div className="text-lg">
              Tài xế: <span className="text-orange-400">{shipper || 'Đang tìm...'}</span>
            </div>
          )
        }

        <div className="flex items-end flex-col-2 space-x-3 space-y-2">
          {
            status === 'waiting' && (
              <>
                <button
                  className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
                  {'Cancel'}
                </button>
                <button
                  className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
                  {'Receive'}
                </button>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};


export default OrdersPage;
