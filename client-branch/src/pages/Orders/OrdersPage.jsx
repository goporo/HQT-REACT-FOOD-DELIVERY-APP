import React from "react";

const orders = [
  {
    orderID: "001",
    items: [
      {
        id: "food_1",
        title: "Nạm Gân",
        price: 40000,
        image: "/images/NamGan.jpg",

      },
      {
        id: "food_2",
        title: "Tái ",
        price: 35000,
        image: "/images/TaiCha.jpg",
      }
    ],
    shipper: "Nguyen Hoai An",
  },
  {
    orderID: "O002",
    items: [
      {
        id: "food_3",
        title: "chicken deluxe fry",
        price: 150.0,
        image: "/images/chicken_deluxe_fry.jpg",
      },
      {
        id: "food_4",
        title: "Pasta",
        price: 70.0,
        image: "/images/pasta.jpg",
      }
    ],
    shipper: "Nguyen Hoai An",
  },
  {
    orderID: "O003",
    items: [
      {
        id: "food_11",
        title: "chicken deluxe fry",
        price: 150.0,
        image: "/images/chicken_deluxe_fry.jpg",

      },
      {
        id: "food_9",
        title: "Pasta",
        price: 70.0,
        image: "/images/pasta.jpg",
      }
    ],
    shipper: "Nguyen Hoai An",
  },
  {
    orderID: "O004",
    items: [
      {
        id: "food",
        title: "chicken deluxe fry",
        price: 150.0,
        image: "/images/chicken_deluxe_fry.jpg",

      },
      {
        id: "food_2",
        title: "Pasta",
        price: 70.0,
        image: "/images/pasta.jpg",
      }
    ],
    shipper: "Nguyen Hoai An",
  },
  {
    orderID: "O005",
    items: [
      {
        id: "food_11",
        title: "chicken deluxe fry",
        price: 150.0,
        image: "/images/chicken_deluxe_fry.jpg",
      },
      {
        id: "food_9",
        title: "Pasta",
        price: 70.0,
        image: "/images/pasta.jpg",
      }
    ],
    shipper: "Nguyen Hoai An",
  },
  {
    orderID: "O006",
    items: [
      {
        id: "food",
        title: "chicken deluxe fry",
        price: 150.0,
        image: "/images/chicken_deluxe_fry.jpg",

      },
      {
        id: "food_2",
        title: "Pasta",
        price: 70.0,
        rating: 4.3,
        image: "/images/pasta.jpg",
      }
    ],
    shipper: "Nguyen Hoai An",
  },
]

const OrdersPage = () => {
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
        <div className="text-lg">Tình trạng đơn: <span className="text-orange-400">{shipper}</span></div>
        <div className="flex items-end flex-col-2 space-x-3 space-y-2">
          <button
            className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
            {'Cancel'}
          </button>
          <button
            className="w-[150px] py-3 bg-red-500 text-white cursor-pointer hover:opacity-80 rounded-md">
            {'Receive'}
          </button>
        </div>
      </div>
    </div>
  );
};


export default OrdersPage;
