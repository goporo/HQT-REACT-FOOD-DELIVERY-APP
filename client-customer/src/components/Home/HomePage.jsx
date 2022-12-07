
import { BiChevronDown } from "react-icons/bi";
import foods from "../../assets/fake-data/foods";
import restaurants from "../../assets/fake-data/restaurants";
import FoodItem from "./FoodItem";
import NearbyResaurant from "./NearbyResaurant";





export default function HomePage({ }) {
    return (
        <div className="flex w-11/12 mx-auto space-x-5 my-10">
            <div className="bg-white w-full rounded-xl shadow-sm my-10 pb-10">
                <div className="flex justify-between items-center w-11/12 mt-10 mb-8 mx-auto">
                    <h2 className="text-xl font-semibold">Popular Food</h2>
                    <div className="flex items-center space-x-1 text-sm bg-gray-100 rounded-lg px-2.5 py-2">
                        <span>This week</span>
                        <span>
                            <BiChevronDown className="text-xl" />
                        </span>
                    </div>
                </div>

                <div className="w-11/12 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-16">
                        {foods.map((food) => (
                            <FoodItem key={food.id} f={food} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="hidden 2xl:block">
                <NearbyResaurant restaurants={restaurants} />
            </div>
        </div>
    );
}

