import React from "react";
import { useEffect, useState } from 'react';
import moment from 'moment';

// const orders = [
//   {
//     orderID: "001",
//     items: [
//       {
//         id: "food_1",
//         title: "Nạm Gân",
//         price: 40000,
//       },
//       {
//         id: "food_2",
//         title: "Tái ",
//         price: 35000,
//       }
//     ],
//     status: "waiting",
//   },
//   {
//     orderID: "002",
//     items: [
//       {
//         id: "food_3",
//         title: "Tái Nạm",
//         price: 40000,
//       },
//       {
//         id: "food_4",
//         title: "Thập Cẩm",
//         price: 45000,
//       }
//     ],
//     status: "success",
//     shipper: "Ngin Phan",
//   },
//   {
//     orderID: "003",
//     items: [
//       {
//         id: "food_5",
//         title: "Đặc biệt",
//         price: 50000,
//       },
//       {
//         id: "food_6",
//         title: "Nạm",
//         price: 35000,
//       }
//     ],
//     status: "doing",
//   },
//   {
//     orderID: "004",
//     items: [
//       {
//         id: "food_7",
//         title: "Trà gừng",
//         price: 20000,
//       },
//       {
//         id: "food_8",
//         title: "Thập cẩm",
//         price: 45000,
//       }
//     ],
//     status: "shipping",
//     shipper: "Nguyen Phan",
//   },
//   {
//     orderID: "005",
//     items: [
//       {
//         id: "food_9",
//         title: "Đặc biệt",
//         price: 50000,
//       },
//       {
//         id: "food_10",
//         title: "Nạm",
//         price: 35000,
//       }
//     ],
//     status: "cancel",
//   },
//   {
//     orderID: "006",
//     items: [
//       {
//         id: "food_11",
//         title: "Nạm Gân",
//         price: 40000,
//       },
//       {
//         id: "food_12",
//         title: "Nạm",
//         price: 35000,
//       }
//     ],
//     status: "shipping",
//     shipper: "Minh Tei",
//   },
// ]

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
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
      const orders = data.data.Orders;

      Promise.all(orders.map(order => {
        return fetch('http://localhost:5000/order/orderdetails', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              MADH: order.MADH,
              MAKH: order.MAKH,
            })
            }).then(res => res.json()).then(data => {
              return data.data;
            })
          })).then(foods => {
            setOrders(orders.map((order, index) => {
              return {
                ...order,
                DSMONAN: foods[index]
              }
            }))
          })
    })
  }, [setOrders]);

  return (
    <section>
      <div>
        <div>
          <div className="p-10 relative w-12/12">
            {orders.length === 0 ? (
              <h5 className="text-center"></h5>
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
    MADH,
    DSMONAN,
    TENTX,
    TRANGTHAIDH
  } = props.item;

  return (
    <div className="mb-10 bg-white p-5 shadow-sm rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold bg-orange-400 text-white text-2sm w-fit rounded-md py-2 px-3">ORDER: {MADH}</div>
        <div className={`flex flex-row justify-center text-white text-2sm py-1 px-2 rounded-md ${TRANGTHAIDH.trim() === "DELIVERED" ? "bg-green-500" : "bg-orange-400"}`}>
          {TRANGTHAIDH}
        </div>
      </div>
      {DSMONAN.map((MONAN, index) => (
        <div key={index} className="flex flex-row mx-5 space-y-2 space-x-2">
          <div className="w-3/12 text-2lg capitalize">{MONAN.MAMONAN}</div>
          <div className="w-4/12 text-2lg capitalize">{MONAN.TENMONAN}</div>
          <p className="w-2/12 text-orange-500 text-lg">{vnCurrencyFormatter.format(MONAN.GIA)}</p>
        </div >
      ))}
      <hr className="my-2" />
      <div className="flex items-end flex-col space-y-2">
        {
          TRANGTHAIDH.trim() !== 'CANCEL' && (
            <div className="text-lg">
              Tài xế: <span className="text-orange-400">{TENTX || 'Đang tìm...'}</span>
            </div>
          )
        }

        <div className="flex items-end flex-col-2 space-x-3 space-y-2">
          {
            TRANGTHAIDH?.trim() === 'WAITING' && (
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
