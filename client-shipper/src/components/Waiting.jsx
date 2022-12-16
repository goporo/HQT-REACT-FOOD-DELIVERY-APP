const Wating = ({ w}) => {
    return (
        <div className="flex flex-row justify-between w-auto py-5 bg-white rounded-xl shadow-sm mt-5 mx-20">
            <div className="flex flex-row ml-5">
                <img src={w.image}
                    className="object-cover w-12 rounded-3xl mr-5" alt="avatar"/>
                <div className="mt-3 w-12">{w.nameCustomer}</div>
            </div>
            <div className="flex flex-row ml-12">
                <div className="mt-3 w-40">{w.nameRestaurant}</div>
                <div className="mt-3 ml-5 w-64">{w.addressRestaurant}</div>
                <div className="mt-3 ml-5 w-64">{w.addressCustomer}</div>
            </div>
            <button className="bg-orange-400 rounded-lg h-8 w-20 text-white hover:bg-orange-600 hover:text-lg hover:text-black mr-5 mt-2">Accept</button>
        </div>
    );
};

export default Wating;