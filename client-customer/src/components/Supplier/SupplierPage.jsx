
const supplier = {
    id: "res_4",
    name: "Burger King",
    logo: "/images/restaurant-logo/burger-king.png",
    rating: 4.8,
    distance: 4.3,
    offer: "Free Delivery",
    deliveryFree: true,
}

export default function SupplierPage({ }) {
    return (
        <div className="flex w-11/12 mx-auto space-x-5 my-10 bg-white">
            <img className="w-48" src={supplier.logo} alt="" />
        </div>
    );
}

