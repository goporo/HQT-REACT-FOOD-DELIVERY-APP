import { Rating } from '@mui/material'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { FaRegHandPointRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';


const supplier = {
    id: "res_4",
    name: "Burger King - Fast Food",
    logo: "/images/restaurant-logo/burger-king.png",
    location: "1041/62/128 Trần Xuân Soạn, P. Tân Hưng, Quận 7, TP. HCM",
    rating: 4,
    distance: 4.3,
    offer: "Free Delivery",
    deliveryFree: true,
    category:
        [
            "Fried Chicken",
            "Drinks",
            "Grilled Meat",
            "Hamburger",
            "Hotdog"
        ]


}

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

export default function SupplierPage({ }) {
    const dispatch = useDispatch();
    const addToCart = (item) => {
        console.log(item);
        dispatch(
            cartActions.addItem(
                item
            )
        );
    };

    return (
        <>
            <div className="flex flex-row w-11/12 mx-auto space-x-5 my-10 bg-white p-5 rounded-lg shadow-sm">
                <img className="w-40 mr-8" src={supplier.logo} alt="" />
                <div className="flex flex-col ">
                    <h1 className="font-semibold text-xl mb-3">{supplier.name}</h1>
                    <p className="text-gray-500 text-sm mb-3">{supplier.location}</p>
                    <Rating className='mb-3' name="read-only" value={supplier.rating} readOnly precision={.5} />
                    <div className="flex-row flex items-center mb-3">
                        <span className="text-green-400 text-mdfont-semibold mr-2">Open</span>
                        <AiOutlineClockCircle className=' mr-2' />
                        <span>10:30 - 21:45</span>
                    </div>
                    <div className='bg-green-500 text-white text-sm font-semibold px-3 py-1 w-fit'>Freeship</div>
                </div>
            </div>

            <div className="flex flex-row justify-between w-11/12 mx-auto space-x-5 my-10">
                <div className="w-3/12 bg-white p-5 rounded-lg shadow-sm h-fit">
                    <div className='bg-gray-400 text-white text-sm font-semibold px-3 py-1 w-fit rounded-md mb-3 ml-1'>DISCOUNT</div>
                    <p className='text-orange-500 font-bold text-lg ml-4'>MENU</p>
                    {
                        supplier.category.map((item, index) =>
                            <div key={index} className='flex flex-row m-5 cursor-pointer hover:opacity-80'>
                                <FaRegHandPointRight className='mr-5' />
                                <div className=''>{item}</div>
                            </div>
                        )
                    }
                </div>
                <div className="w-8/12 bg-white p-5 rounded-lg shadow-sm">
                    <form className="flex items-center mb-3">
                        <label className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        </div>
                        <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                    <div>
                        {foods.map((item, index) =>

                            <div key={index} className='flex flex-row justify-between mb-3 items-center'>
                                <img className='w-[64px] h-[64px] rounded-lg' src={item.image} alt="" />
                                <div className='w-8/12'>
                                    <h1 className="font-semibold text-xl mb-3">{item.title.toUpperCase()}</h1>
                                    <p className="text-gray-500 text-sm mb-3">Lorem ipsum dolor sit amet, bo corrupti doloribus eum delectus voluptatibus magni rerum, voluptas recusandae illo.</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <p className="text-blue-500 text-sm mr-3">${item.price}</p>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className='cursor-pointer hover:opacity-80 rounded-lg bg-red-600 text-white text-md font-semibold py-1 px-3'>+</button>
                                </div>
                            </div>



                        )}
                    </div>
                </div>
            </div>
        </>

    );
}

