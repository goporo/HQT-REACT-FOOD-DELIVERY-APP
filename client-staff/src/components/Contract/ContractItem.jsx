
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

import { useParams } from "react-router-dom";
import axios from 'axios';



const ContractItem = (props) => {
    const { contractId } = useParams()

    const handleExtend = (mahd, madt) => {
        // try {
        //     axios.post(`/contract/extend`, {
        //         "MAHD": mahd,
        //         "THOIHAN": 6,
        //         "MADT": madt
        //     }).then(res => {
        //         //   localStorage.setItem("MAKH", res.data.data[0].MAKH);
        //         alert("Extend Successful!")
        //     })
        // } catch (error) {
        //     console.log(error)
    }
}

const {
    idhopdong,
    ngaydk,
    ngaykt,
    thoihan,
    pthh,
    iddoitac,
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
                <button
                    onClick={() => handleExtend(idhopdong, iddoitac)}
                    className='text-center py-2 px-3 bg-red-500 text-white hover:opacity-80 rounded-md'>Extend</button>
            </div>

        </div >
        <hr />
    </>

);
};

export default ContractItem;
