import 'react-loading-skeleton/dist/skeleton.css'
import { AiOutlineUser } from "react-icons/ai";



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
            <div className="text-lg flex flex-row text-center items-center bg-white rounded-lg shadow-sm p-3">
                <div className="w-1/12 flex justify-center my-6">
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
                <div className="w-2/12">
                    <button
                        className="py-3 px-4 rounded-md bg-red-500 text-white text-sm hover:opacity-80"
                        onClick={() => deleteItem()}>
                        Extend 1 Year
                    </button>
                </div>
            </div >
            <hr />
        </>

    );
};

export default ContractItem;
