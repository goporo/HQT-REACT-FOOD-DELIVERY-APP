
import { BiChevronDown } from "react-icons/bi";
import FoodItem from "./FoodItem";

const foods = [
    {
        id: "food_1",
        title: "chicken burger",
        price: 80.0,
        rating: 4.3,
        image: "/images/chicken_burger.jpg",
        supplier: "the-alley",
    },
    {
        id: "food_2",
        title: "chicken deluxe fry",
        price: 150.0,
        rating: 4.3,
        image: "/images/chicken_deluxe_fry.jpg",
        supplier: "the-alley",
    },
    {
        id: "food_3",
        title: "chicken malai gravy",
        price: 200.0,
        rating: 4.3,
        image: "/images/chicken_malai_gravy.jpg",
        supplier: "the-alley",
    },
    {
        id: "food_4",
        title: "chicken pizza",
        price: 400.0,
        rating: 4.3,
        image: "/images/chicken_pizza.jpg",
        supplier: "the-alley",
    },
    {
        id: "food_5",
        title: "chicken sate",
        price: 100.0,
        rating: 4.3,
        image: "/images/chicken_sate.jpg",
        supplier: "the-alley",
    },
    {
        id: "food_6",
        title: "fried rice",
        price: 150.0,
        rating: 4.3,
        image: "/images/fried_rice.jpg",
        supplier: "the-alley",
    },
    {
        id: "food_7",
        title: "nachos galore",
        price: 120.0,
        rating: 4.3,
        image: "/images/nachos_galore.jpg",
        supplier: "the-alley",
    },
    {
        id: "food_8",
        title: "pasta",
        price: 120.0,
        rating: 4.3,
        image: "/images/pasta.jpg",
        supplier: "the-alley",
    },
    {
        id: "food_9",
        title: "ramen",
        price: 80.0,
        rating: 4.3,
        image: "/images/ramen.jpg",
        supplier: "the-alley",
    },
    {
        id: "food_10",
        title: "noodles",
        price: 70.0,
        rating: 4.3,
        image: "/images/noodles.jpg",
        supplier: "the-alley",
    },
]


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
        </div>
    );
}

