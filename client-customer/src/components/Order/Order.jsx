import React from "react";
import LazyLoad from "react-lazy-load";

const orders = [
  {
    id: "food_1",
    title: "chicken burger",
    price: 80.0,
    rating: 4.3,
    image: "/images/chicken_burger.jpg",
    supplier: "the-alley",
    status: "Validating"
  },
  {
    id: "food_2",
    title: "chicken deluxe fry",
    price: 150.0,
    rating: 4.3,
    image: "/images/chicken_deluxe_fry.jpg",
    supplier: "the-alley",
    status: "Delivering",
  },
  {
    id: "food_3",
    title: "Pasta",
    price: 70.0,
    rating: 4.3,
    image: "/images/pasta.jpg",
    supplier: "the-alley",
    status: "Delivered",
  },
]

const Order = () => {
  return (
    <section>
      <div>
        <div>
          <div className="p-10 relative w-11/12">
            {orders.length === 0 ? (
              <h5 className="text-center">Your cart is empty</h5>
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
                  {orders.map((item, index) => (
                    <Tr key={index} item={item} />
                  ))}
                </tbody>
              </table>
            )}
            <hr />
            <div className="mt-5 flex flex-col right-14 absolute text-center">


            </div>
          </div>
        </div>
      </div>
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
    status
  } = props.item;
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
        <p className="text-orange-500 text-lg">${price}</p>
      </td>
      <td >
        <div className={`flex flex-row justify-center ${status === "Delivered" ? "text-green-500" : "text-yellow-400"}`}>
          {status}
        </div>
      </td>
      <td>
        {
          status === "Validating" ?
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
      </td>

    </tr >
  );
};

export default Order;
