import React from "react";
import data from "../../assets/fake-data/data/data.json";
import Bar from "./Bar";

const BarChart = () => {
  const currentDayInt = new Date().getDay();
  const weekday = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  const currentDay = weekday[currentDayInt];
  return (
    <div className="flex justify-between items-end pt-16">
      {data.map((data) => (
        <div
          key={data.day}
          className="flex flex-col items-center gap-3 sm:gap-2 group cursor-pointer relative">
          <div className="bg-orange-900 text-white p-2 rounded-[5px] font-bold group-hover:opacity-100 opacity-0  absolute -top-12 transition-opacity">
            {data.amount}
          </div>
          <Bar
            height={parseInt(data.amount) * 1.5}
            isCurrentDay={currentDay === data.day}
          />
          <span>{data.day}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
