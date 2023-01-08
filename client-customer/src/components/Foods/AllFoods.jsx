import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';

import "./AllFoods.css";
import ProductCard from "./ProductCard";

const AllFoods = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sl, setSl] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [foods, setFoods] = useState([]);

    const getFoods = () => {
        axios.put('/food/price', {
            "SL": 100,
            "THUTU": "INCREASE"
        })
            .then(function (res) {
                let items = res.data.foods.map((item) => {
                    return {
                        title: item.TENMONAN,
                        supplier: item.MACN,
                        price: item.GIA,
                        image: item.DIACHIHINHANHTD ? item.DIACHIHINHANHTD : "http://yummyverse.net/images/default.png",
                        TINHTRANG: item.TINHTRANG.trim()

                    }
                });
                setFoods(items.filter(item => item.TINHTRANG !== "DELETED"));
                setSl(res.data.SL[0].SOLUONG)
            })
            .catch(function (e) {
                console.log(e);
            });
    }
    useEffect(() => {
        getFoods();
    }, [])



    const searchedFood = foods.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        } else {
            return console.log("not found");
        }
    });

    const productPerPage = 12;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedFood.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(searchedFood.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        0 ?
            <div className="text-center mt-10 text-lg">No foods yet!</div> :
            <section>
                <div className="m-14">

                    <div className="mb-5">
                        <div className="sorting__widget text-end">
                            <select className="w-50"
                                onChange={() => console.log(this.value)}
                            >
                                <option value="most-sold">Most Sold</option>
                                {/* <option value="ascending">Alphabetically, A-Z</option>
                                <option value="descending">Alphabetically, Z-A</option> */}
                                <option value="high-price">High Price</option>
                                <option value="low-price">Low Price</option>
                            </select>
                        </div>
                        <h2 className="ml-4 text-gray-500">Showing {sl} results</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8">
                        {displayPage.map((item, idx) => (
                            <div key={idx} className="">
                                <ProductCard item={item} />
                            </div>
                        ))}
                    </div>

                    <div>
                        <ReactPaginate
                            pageCount={pageCount}
                            onPageChange={changePage}
                            previousLabel={"Prev"}
                            nextLabel={"Next"}
                            containerClassName=" paginationBttns "
                        />
                    </div>
                </div>
            </section>
    );
};

export default AllFoods;
