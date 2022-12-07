import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import { useParams } from 'react-router-dom';

const business = {
    tendt: "The Alley",
    sdt: "09123214212",
    emaildt: "thealley@gmail.com",
    slcn: 5,
    ngaydk: "20-11-2022",
    stk: "01223312334"
}

const Business = () => {
    const deleteItem = () => { }
    const { businessId } = useParams()
    const { tendt, sdt, emaildt, slcn, ngaydk, stk } = business
    return (
        <div className="bg-white w-10/12 rounded-xl shadow-sm p-8 m-10 space-y-3">
            <h2 className="text-xl font-semibold">{tendt}</h2>
            <img
                className='w-1/4'
                src="https://media.foody.vn/res/g103/1024324/prof/s/foody-upload-api-foody-mobile-image4-200519171814.jpg" alt="" />
            <p>SDT: {sdt}</p>
            <p>EMAIL: {emaildt}</p>
            <p>SOLUONGCHINHANH: {slcn}</p>
            <p>NGAY DANG KY: {ngaydk}</p>
            <p>STK: {stk}</p>
            <div className="">
                <button
                    className="py-3 w-[140px] mr-3 bg-red-500 text-white rounded-lg cursor-pointer hover:opacity-80 mt-1"
                    onClick={() => deleteItem()}>
                    Deny
                </button>
                <button
                    className='py-3 w-[140px] bg-green-500 text-white rounded-lg cursor-pointer hover:opacity-80 mt-1'
                    onClick={() => deleteItem()}>
                    Accept
                </button>
            </div>
        </div>
    )
}

export default Business