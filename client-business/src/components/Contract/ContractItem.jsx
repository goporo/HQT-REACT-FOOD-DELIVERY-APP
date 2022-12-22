import { Link } from "react-router-dom";

import LazyLoad from 'react-lazy-load';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

import { useParams } from "react-router-dom";




const id = "the-alley"

const ContractItem = (props) => {
    const { contractId } = useParams()

    const deleteItem = () => {

    }

    const {
        idhopdong,
        ngaydk,
        ngaykt,
        thoihan,
        pthh,
        iddoitac,
        idnhanvien
    } = props.item;
    return (
        <>
            <div
                className="text-lg flex flex-row text-center items-center bg-white rounded-lg shadow-sm p-3">
                <div className="w-2/12 flex justify-center my-6">
                    <AiOutlineUser size={48} />
                </div>
                <div className="w-2/12">
                    <h1 className="capitalize">HD{idhopdong}</h1>
                </div>
                <div className="w-2/12">
                    <p className="text-green-500 ">{ngaydk}</p>
                </div>
                <div className="w-2/12">
                    <p className="text-red-500  px-4 mt-1">{thoihan} Month(s)</p>
                </div>
                <div className="w-2/12">
                    <p className="">{pthh}%</p>
                </div>
                <div className="w-2/12">
                    {
                        idnhanvien ?
                            <button className='w-[125px] text-center py-2 px-3 bg-green-500 text-white cursor-default rounded-md'>Active</button>
                            : <button className='text-center py-2 px-3 bg-orange-500 text-white cursor-default rounded-md'>Processing</button>

                    }
                </div>

            </div >
            <hr />
        </>

    );
};

export default ContractItem;
