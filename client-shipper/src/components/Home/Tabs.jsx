import { useState } from "react";
import "../../styles/tabs.css";
import FoodOrder from "./FoodOrder";
import StateOrder from "./StateOrder";
import foods from "../../assets/fake-data/foods.js";
import orders from "../../assets/fake-data/orders.js";

function Tabs() {
  var count1 = 0;

  var count2 = 0;

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="container">
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
            Delivering
          </button>
          <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
            Successful
          </button>
          <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
            Cancelled
          </button>
        </div>

        <div className="content-tabs">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <div className="flex flex-col mr-6">
                
                <div className="Restaurant py-3">
                  <div className="text-2xl font-semibold pb-3">Infomation of Restaurant:</div>
                  <div className="px-10 space-y-5 text-xl">
                      <div className="space-x-10">
                          <span className="font-semibold">ID Order:</span>
                          <span>DH0001</span>
                      </div>
                      <div className="space-x-10">
                          <span className="font-semibold">Name of Restaurant:</span>
                          <span>The Coffee House</span>
                      </div>
                      <div className="space-x-10">
                          <span className="font-semibold">Address:</span>
                          <span>Somewhere in city</span>
                      </div>
                  </div>
                </div>
                
                <div className="inline-block self-center w-8/12 border-t-4 border-orange-400"></div>
                <div className="Customer py-3">
                  <div className="text-2xl font-semibold pb-3">Information of Customer:</div>
                  <div className="px-10 space-y-5 text-xl">
                      <div className="space-x-10">
                          <span className="font-semibold">ID Order:</span>
                          <span>DH0001</span>
                      </div>
                      <div className="space-x-10">
                          <span className="font-semibold">Name of Customer:</span>
                          <span>Vy</span>
                      </div>
                      <div className="space-x-10">
                          <span className="font-semibold">Address:</span>
                          <span>HoChiMinh City</span>
                      </div>
                      <div className="space-x-10">
                          <span className="font-semibold">Phone:</span>
                          <span>0xxxxxxxxx</span>
                      </div>
                  </div>
                </div>

                <div className="inline-block self-center w-8/12 border-t-4 border-orange-400"></div>
                <div className="Order py-3">
                  <div className="text-2xl font-semibold pb-3">Information of Order:</div>
                  <div className="px-10 space-y-5 text-xl">
                      <div className="space-x-10">
                          <span className="font-semibold">ID Order:</span>
                          <span>DH0001</span>
                      </div>
                      <div className="space-x-10">
                          <span className="font-semibold">Date:</span>
                          <span>12/04/2022</span>
                      </div>
                      <div className="space-x-10">
                          <span className="font-semibold">Payments:</span>
                          <span>Transfer</span>
                      </div>
                      <div className="Food flex flex-col">
                          <span className="font-semibold">Foods:</span>
                          <table className="table-fixed w-full h-36 ml-10">
                          {foods.map((items) => (
                              <FoodOrder key={items.id} f={items}/>
                          ))}
                          </table>
                          <div className="inline-block my-5 md:ml-40 lg:ml-60 w-96 border-t-4 border-orange-400"></div>
                          <span className="font-semibold">Payment Summary:</span> 
                          <table className="table-fixed w-full h-36 ml-10">
                            <tr>
                              <td>Product fee</td>
                              <td>&nbsp;</td>
                              <td className="text-center">100.000</td>
                            </tr>
                            <tr>
                              <td>Shipping fee</td>
                              <td>&nbsp;</td>
                              <td className="text-center">50.000</td>
                            </tr>
                          </table>
                          <div className="inline-block my-5 md:ml-40 lg:ml-60 w-96 border-t-4 border-orange-400"></div>
                          <table className="table-fixed w-full h-14 ml-10">
                            <tr>
                              <td>Summary:</td>
                              <td>&nbsp;</td>
                              <td className="text-center">300.000</td>
                            </tr>
                          </table>
                      </div>
                  </div>
                </div>
                <div className="UpdateOrder flex justify-end m-10 font-semibold text-xl space-x-10">
                  <button className="w-36 h-10 text-white bg-orange-400 rounded-xl hover:bg-orange-600 hover:text-black">Finish</button>
                  <button className="w-36 h-10 text-white bg-orange-400 rounded-xl hover:bg-orange-600 hover:text-black">Cancel</button>
                </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <table className="table-auto  w-full h-28 text-center">
              <thead>
                <tr>
                  <th className="border-collapse border border-black">&nbsp;</th>
                  <th className="border-separate border border-black text-lg h-10">ID Order</th>
                  <th className="border-separate border border-black text-lg h-10">Datetime</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((items, index) => {
                  if(items.state === 1)
                    return <StateOrder key={items.id} s={items} index = {index - count1 + 1}/>
                  
                  else
                    count1 = count1 + 1;
                    return null;
                })}
              </tbody>
            </table>
          </div>

          <div className={toggleState === 3 ? "content  active-content" : "content"}>
            <table className="table-auto  w-full h-28 text-center">
              <thead>
                <tr>
                  <th className="border-collapse border border-black">&nbsp;</th>
                  <th className="border-separate border border-black text-lg h-10">ID Order</th>
                  <th className="border-separate border border-black text-lg h-10">Datetime</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((items, index) => {
                  if(items.state === 0)
                    return <StateOrder key={items.id} s={items} index = {index - count2 + 1}/>
                  
                  else
                    count2 = count2 + 1;
                    return null;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;