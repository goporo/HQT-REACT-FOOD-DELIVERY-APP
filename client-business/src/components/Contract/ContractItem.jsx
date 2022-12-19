import { Link } from "react-router-dom";

import LazyLoad from 'react-lazy-load';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

import { BsFillTrashFill } from "react-icons/bs";
import { TiTick, TiTimes } from "react-icons/ti";



const id = "the-alley"

const ContractItem = (props) => {
    const deleteItem = () => {

    }

    const {
        idhopdong,
        ngaydk,
        ngaykt,
        pthh,
        iddoitac,
    } = props.item;
    return (
        <>
            <Link to={`/contract/${idhopdong}`}
                className="text-lg flex flex-row text-center items-center bg-white rounded-lg shadow-sm p-3 hover:opacity-80">
                <div className="w-2/12 flex justify-center my-6">
                    <AiOutlineUser size={48} />
                </div>
                <div className="w-2/12">
                    <h1 className="capitalize">{idhopdong}</h1>
                </div>
                <div className="w-2/12">
                    <p className="text-green-500 ">{ngaydk}</p>
                </div>
                <div className="w-2/12">
                    <p className="text-red-500  px-4 mt-1">{ngaykt}</p>
                </div>
                <div className="w-2/12">
                    <p className="">{pthh}%</p>
                </div>
                <div className="w-2/12">
                    <h1 className=" capitalize">{iddoitac}</h1>
                </div>

            </Link >
            <hr />
        </>

    );
};

export default ContractItem;
