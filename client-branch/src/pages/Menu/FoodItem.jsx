import { Link } from "react-router-dom";

import LazyLoad from 'react-lazy-load';
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react";
import { formatVND } from "../../utils/currencyFormatter";

const FoodItem = ({ f }) => {
  const [food, setFood] = useState(f);

  return (
    <div className="h-120">
      <div className="cursor-pointer relative h-80 overflow-hidden rounded-xl">
        {/* {loading && <Skeleton height={192} />} */}
        <Link to={`/menu/${food.MAMONAN}`}>
          <LazyLoad className="h-full w-full">
            <img src={`https://statics.vinpearl.com/com-tam-ngon-o-sai-gon-0_1630563211.jpg`} alt={food.TENMONAN}
              className="h-full w-full object-cover hover:scale-110 transition duration-200"
            />
          </LazyLoad>
        </Link>
      </div>
      <div className="flex justify-between items-center px-2 mt-4 capitalize">
        <h1 className="cursor-pointer font-semibold text-md">
          <Link to={`/menu/${food.MAMONAN}`}>{food.TENMONAN}</Link>
        </h1>

        <div className="bg-[#ffede6] text-[#ff4f00] text-2xs font-semibold px-4 py-1 rounded-md whitespace-nowrap">
          {formatVND(food.GIA)}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
