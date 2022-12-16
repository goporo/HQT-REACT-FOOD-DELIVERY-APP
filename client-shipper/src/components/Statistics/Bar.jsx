import React from "react";

const nonCurrentDayClasses = `
  w-3
  sm:w-[15px]
  bg-red-600
  rounded-sm
`;

const currentDayClasses = `
  w-3
  sm:w-[15px]
  bg-blue-600
  rounded-sm
`;

const Bar = ({ height, isCurrentDay }) => {
  return (
    <div
      className={isCurrentDay ? currentDayClasses : nonCurrentDayClasses}
      style={{ height: `${height}px`}}></div>
  );
};

export default Bar;
