
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

import { useParams } from "react-router-dom";
import axios from 'axios';




const manv = '1'

const ContractItem = (props) => {
    const { contractId } = useParams()
    const [needRefresh, setNeedRefresh] = useState(false)
    const handleAccept = (mahd) => {
        try {
            axios.post(`/contract/accept`, {
                "MAHD": mahd,
                "STT": 1,
                "MANHANVIEN": manv
            })
            //tai lai trang
            window.location.reload(true);
        } catch (error) {
            alert(error)
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
                <div className="w-1/12">
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
                <div className="w-3/12">
                    <button
                        onClick={() => handleAccept(idhopdong)}
                        className='mr-2 text-center py-2 px-3 bg-green-500 text-white hover:opacity-80 rounded-md'>Accept</button>
                    <button className='text-center py-2 px-3 bg-red-500 text-white hover:opacity-80 rounded-md'>Decline</button>
                </div>

            </div >
            <hr />
        </>

    );
};

export default ContractItem;
