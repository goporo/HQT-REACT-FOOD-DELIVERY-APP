import ContractItem from "./ContractItem";


const newContracts = [
    {
        idhopdong: "HD003",
        ngaydk: "12-10-2022",
        ngaykt: "21-12-2023",
        pthh: 14.3,
        iddoitac: "DT007",
    },
    {
        idhopdong: "HD004",
        ngaydk: "11-1-2022",
        ngaykt: "15-12-2023",
        pthh: 14.3,
        iddoitac: "DT002",
    },
]


export default function Contract({ }) {
    return (
        <section>
            <div>
                <div>
                    <div className="p-10 relative w-11/12">
                        {newContracts.length === 0 ? (
                            <h5 className="text-center">No new contracts found</h5>
                        ) :
                            <div>
                                <div className="font-semibold flex flex-row text-center items-center bg-white rounded-lg shadow-sm p-3">
                                    <div className="w-2/12 flex justify-center my-6">

                                    </div>
                                    <div className="w-2/12 ">
                                        Contract ID
                                    </div>
                                    <div className="w-2/12">
                                        Start Date
                                    </div>
                                    <div className="w-2/12">
                                        End Date
                                    </div>
                                    <div className="w-2/12">
                                        Transaction Fee %
                                    </div>
                                    <div className="w-2/12">
                                        User ID
                                    </div>

                                </div >
                                <hr />
                                {newContracts.map((item, index) => (
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
