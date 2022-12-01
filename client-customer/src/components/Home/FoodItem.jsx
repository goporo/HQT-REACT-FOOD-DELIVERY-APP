
const FoodItem = ({ f }) => {
    return (
        <div className="">
            <div className="cursor-pointer relative h-48 w-full overflow-hidden rounded-xl">
                <img src={f.image} alt={f.title}
                    className="object-cover bg-gray-100 hover:scale-110 transition duration-200"
                />
            </div>
            <div className="flex justify-between items-center px-2 mt-4 capitalize">
                <h1 className="cursor-pointer font-semibold text-md">{f.title}</h1>
                <div className="bg-[#ffede6] text-[#ff4f00] text-xs font-semibold px-4 py-1 rounded-md whitespace-nowrap">
                    ₹ {f.price}
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
