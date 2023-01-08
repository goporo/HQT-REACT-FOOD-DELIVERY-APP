import { Rating } from '@mui/material'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { FaRegHandPointRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/shopping-cart/cartSlice';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


const formatCurrency = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ'
}


const category =
    [
        "Fried Chicken",
        "Drinks",
        "Grilled Meat",
        "Hamburger",
        "Hotdog"
    ]

export default function SupplierPage() {
    const { supplierId } = useParams()

    const [supplier, setSupplier] = useState([]);
    const [foods, setFoods] = useState([]);


    useEffect(() => {
        const getData = () => {

            axios.get(`/supplier/${supplierId}`, {
            })
                .then(function (res) {

                    let temp = res.data.data.supplier;
                    let temp2 = res.data.data.foods;
                    console.log(res.data.data);


                    temp = temp.map(item => {
                        return {
                            name: item.TENCH,
                            location: "Burger King - Fast Food",
                            logo: item.DIACHIHINHANHND ? item.DIACHIHINHANHND : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
                        }
                    });
                    temp2 = temp2.map(item => {
                        return {
                            MACN: item.MACN,
                            id: item.MAMONAN,
                            title: item.TENMONAN,
                            image: item.DIACHIHINHANHTD ? item.DIACHIHINHANHTD : "http://yummyverse.net/images/default.png",
                            price: item.GIA,
                            TINHTRANG: item.TINHTRANG.trim()

                        }
                    });


                    setSupplier(temp[0]);
                    setFoods(temp2.filter(item => item.TINHTRANG != "DELETED"));

                })
                .catch(function (e) {
                    console.log(e);
                });
        };
        getData();
    }, [])



    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch(
            cartActions.addItem(
                item
            )
        );
        alert("Add successful!")
    };

    return (
        <>
            <div className="flex flex-row w-11/12 mx-auto space-x-5 my-10 bg-white p-5 rounded-lg shadow-sm">
                <img className="w-40 mr-8" src={supplier?.logo} alt="logo" />
                <div className="flex flex-col ">
                    <h1 className="font-semibold text-xl mb-3">{supplier?.name}</h1>
                    <p className="text-gray-500 text-sm mb-3">{supplier?.location}</p>
                    <Rating className='mb-3' name="read-only" value={5} readOnly precision={.5} />
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
                        category.map((item, index) =>
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
                                <img className='object-cover w-[64px] h-[64px] rounded-lg' src={item.image} alt="" />
                                <div className='w-8/12'>
                                    <h1 className="font-semibold text-xl mb-3">{item.title.toUpperCase()}</h1>
                                    <p className="text-gray-500 text-sm mb-3">Lorem ipsum dolor sit amet, bo corrupti doloribus eum delectus voluptatibus magni rerum, voluptas recusandae illo.</p>
                                </div>
                                <div className='flex flex-row items-center'>
                                    <p className="text-orange-500 text-sm mr-3">{formatCurrency(item.price)}</p>
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

