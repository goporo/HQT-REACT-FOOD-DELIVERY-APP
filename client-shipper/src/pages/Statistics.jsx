import React  from "react";
import BarChart from "../components/Statistics/BarChart";
import "../styles/statistic.css";
import History from "../components/Statistics/History";
import statistics from "../assets/fake-data/statistics";
import boxIcon from "../assets/images/box.png";
import ratingIcon from "../assets/images/rating.png";
import moneyIcon from "../assets/images/money-bag.png";
import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";

const Statistics = () => {
  var keys = Object.keys(statistics);
  const sumOfOrder = keys.length;

  function getMoney(){
    var money = 0;
    for (let i in statistics) {
      money += statistics[i].bill;
    }
    return money;
  } 

  const money = getMoney().toLocaleString('en-US');

  function getRating(){
    var rating = 0;
    for (let i in statistics) {
      rating += statistics[i].rate;
    }
    return +(Math.round((rating / sumOfOrder)+ "e+1")+ "e-1");
  } 

  const rating = getRating();

  return (
    <main className="flex min-h-screen">
      <Sidebar />
      <div className="w-full bg-gray-50">
        <section>
          <Header title = "Statistic"/>
          <div className="w-11/12">
            <div className=" mt-5 bg-white w-auto rounded-xl shadow-sm ml-20 px-5">
              <div className="pt-5 sorting__widget text-end ">
                  <select className="w-52 text-center bg-orange-100 font-semibold">
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
              </div>
              <div className="text-3xl font-semibold"> Today</div>

              <div className="mt-5 -mx-3 flex flex-wrap font-semibold">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label for="date" className="mb-3 block text-base text-black">
                      Month / Day / Year
                    </label>
                    <input type="date" name="date" id="date"
                      className="w-52 rounded-md border border-black bg-white py-3 px-6 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label for="time"className="mb-3 block text-base text-black">
                      Time
                    </label>
                    <input type="time" name="time" id="time"
                      className="w-52 rounded-md border border-black bg-white py-3 px-6 text-base text-black outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="w-auto mt-5 ml-20">
              <div className="flex flex-col md:flex-row md:space-x-20 lg:space-x-20 font-semibold">
                <div className="w-80 bg-white rounded-xl shadow-sm">
                  <div className="px-5 py-2 text-xl">Number of Orders</div>
                  <div className="flex flex-row px-5 py-2 justify-between lg:text-4xl mt-5 ml-3">
                    <div>{sumOfOrder}</div>
                    <div>
                      <img src={boxIcon} className="w-6 h-6 lg:w-20 lg:h-20" alt="boxIcon"/>
                    </div>  
                  </div>
                </div>
                <div className="w-80 bg-white rounded-xl shadow-sm ">
                  <div className="px-5 py-2 text-xl">Revenue</div>
                  <div className="flex flex-row px-5 py-2 justify-between lg:text-4xl mt-5 ml-3">
                    <div>{money}</div>
                    <div>
                      <img src={moneyIcon} className="w-6 h-6 lg:w-20 lg:h-20" alt="moneyIcon"/>
                    </div>
                  </div>
                </div>
                <div className="w-80 bg-white rounded-xl shadow-sm">
                  <div className="px-5 py-2 text-xl">Rating</div>
                  <div className="flex flex-row px-5 py-2 justify-between lg:text-4xl mt-5 ml-3">
                    <div>{rating}</div>
                    <div>
                      <img src={ratingIcon} className="w-6 h-6 lg:w-20 lg:h-20" alt="ratingIcon"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
              <div className="ml-20 w-full flex flex-col lg:flex-row pt-16">
                <div className="flex flex-col">
                  <div className="flex justify-center items-cente h-auto w-64 pb-10">
                    <div className="w-[343px] sm:w-[540px] bg-transparent flex flex-col gap-4">
                      <div className="text-black bg-white shadow-sm rounded-[10px] sm:rounded-[20px] px-5 py-6">
                        <h3 className="text-dark-brown font-bold text-base sm:text-lg">
                          Rate Order
                        </h3>
                        <BarChart />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-cente h-auto w-64">
                    <div className="w-[343px] sm:w-[540px] bg-transparent flex flex-col gap-4">
                      <div className="text-black bg-white shadow-sm rounded-[10px] sm:rounded-[20px] px-5 py-6">
                        <h3 className="text-dark-brown font-bold text-base sm:text-lg">
                          Rate Revenue
                        </h3>
                        <BarChart />
                      </div>
                    </div>
                  </div>

                </div>
              
              <div className=" bg-white w-full rounded-xl shadow-sm ml-10 mr-20">
                <div className="flex flex-col px-5 py-5">
                  <table className="table-auto h-5 text-center ">
                    <thead>
                      <tr className="border border-b-black">
                        <th className="text-sm h-5 font-medium text-black">Number</th>
                        <th className="text-sm h-5 font-medium text-black">Total</th>
                        <th className="text-sm h-5 font-medium text-black">Branch</th>
                      </tr>
                    </thead>
                    <tbody>
                    {statistics.map((items) => (
                        <History h={items}/>
                    ))}
                    </tbody>
                  </table>
                  <div className="flex justify-center mt-3 ">
                    <nav aria-label="Page navigation example">
                      <ul className="flex list-style-none space-x-3">
                        <li className="page-item"><a
                            className="page-link relative block px-3 rounded border border-orange-500 bg-transparent outline-none transition-all duration-300  text-orange-500 hover:text-orange-500 focus:shadow-none"
                            href="#0">Previous</a></li>
                        <li className="page-item"><a
                            className="page-link relative block px-3 rounded border border-orange-500 bg-transparent outline-none transition-all duration-300  text-orange-500 hover:text-orange-500 hover:bg-gray-200 focus:shadow-none"
                            href="#1">1</a></li>
                        <li className="page-item"><a
                            className="page-link relative block px-3 rounded border border-orange-500 bg-transparent outline-none transition-all duration-300 text-orange-500 hover:text-orange-500 hover:bg-gray-200 focus:shadow-none"
                            href="#2">2</a></li>
                        <li className="page-item"><a
                            className="page-link relative block px-3 rounded border border-orange-500 bg-transparent outline-none transition-all duration-300 text-orange-500 hover:text-orange-500 hover:bg-gray-200 focus:shadow-none"
                            href="#3">3</a></li>
                        <li className="page-item"><a
                            className="page-link relative block px-3 rounded border border-orange-500 bg-transparent outline-none transition-all duration-300  text-orange-500 hover:text-orange-500 hover:bg-gray-200 focus:shadow-none"
                            href="#4">Next</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Statistics;