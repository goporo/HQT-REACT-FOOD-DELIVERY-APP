import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ContractItem from "./ContractItem";



export default function Contract({ }) {
    const [contracts, setContracts] = useState([]);


    useEffect(() => {
        const getData = async () => {
            axios.put(`/contract/employee/new`, {
            })
                .then(function (res) {
                    let temp = res.data.data;
                    temp = temp.map((item) => {
                        return {
                            idhopdong: item.MAHD[0],
                            thoihan: item.THOIHAN,
                            ngaydk: item.TGBD?.slice(0, 10),
                            ngaykt: item.TGHH?.slice(0, 10),
                            pthh: item.PTHH ?? 10,
                            iddoitac: item.MADOITAC

                        }
                    });
                    setContracts(temp);
                })
                .catch(function (e) {
                    console.log(e);
                });
        };
        getData();
    }, [])


    return (
        <section>
            <div>
                <div>
                    <div className="p-10 relative w-11/12">
                        {contracts.length === 0 ? (
                            <h5 className="text-center">No new contracts found</h5>
                        ) :
                            <div>
                                <div className="font-semibold flex flex-row text-center items-center bg-white rounded-lg shadow-sm p-3">
                                    <div className="w-2/12 flex justify-center my-6">

                                    </div>
                                    <div className="w-1/12 ">
                                        Contract ID
                                    </div>
                                    <div className="w-2/12">
                                        Start Date
                                    </div>
                                    <div className="w-2/12">
                                        Duration
                                    </div>
                                    <div className="w-2/12">
                                        Transaction Fee %
                                    </div>
                                    <div className="w-3/12">
                                    </div>

                                </div >
                                <hr />
                                {contracts.map((item, index) => (
                                    <ContractItem item={item} key={index} />
                                ))}
                            </div>
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

