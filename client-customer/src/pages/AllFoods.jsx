import React, { useState } from "react";

import foods from "../assets/fake-data/foods";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

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
    <section>
      <div className="m-14">

        <div className="mb-5">
          <div className="sorting__widget text-end">
            <select className="w-50">
              <option>Default</option>
              <option value="ascending">Alphabetically, A-Z</option>
              <option value="descending">Alphabetically, Z-A</option>
              <option value="high-price">High Price</option>
              <option value="low-price">Low Price</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8">
          {displayPage.map((item) => (
            <div key={item.id} className="">
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
