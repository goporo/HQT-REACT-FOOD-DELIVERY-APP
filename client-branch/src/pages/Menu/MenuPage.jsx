import foods from "../../assets/fake-data/foods";
import FoodItem from "./FoodItem";

const MenuPage = () => {
  return (
    <div className="flex w-12/12 space-x-5">
      <div className="bg-white w-full rounded-xl shadow-sm my-10 pb-10">
        <div className="flex justify-between items-center w-11/12 mt-10 mb-8 mx-auto">
          <h2 className="text-3xl font-semibold">Today Menu</h2>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-16">
            {foods.map((food, index) => (
              <FoodItem key={index} f={food} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
