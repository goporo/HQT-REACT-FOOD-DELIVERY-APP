import { BiBell, BiShoppingBag } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";



const Header = () => {
    const navigate = useNavigate();
    const onSearchHandler = (e) => {
        e.preventDefault();
        navigate(`/foods`);
        ///`/foodskeyword=${e.target[0].value}`
        e.target[0].value = "";

    };

    return (
        <header className="w-11/12 mx-auto flex flex-col-reverse md:justify-between items-center md:flex-row gap-6">
            <div className="md:mt-10 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Explore
                </h1>

                <div className="text-xs md:text-sm whitespace-nowrap text-gray-500 mt-1 tracking-normal">
                    Hello world, Welcome back!
                </div>
            </div>

            <div className="mt-10 md:mt-6 space-x-1 w-full max-w-2xl">
                <div className="flex items-center space-x-3 w-full">
                    <form
                        className="bg-white items-center px-4 py-2 w-full rounded-3xl space-x-3 shadow-sm flex"
                        onSubmit={onSearchHandler}
                    >
                        <span>
                            <FiSearch className="text-lg" />
                        </span>
                        <input
                            type="text"
                            className="bg-transparent border-none outline-none flex-1 text-gray-700 text-sm min-w-0"
                        />

                    </form>

                    {
                        localStorage.getItem("MAKH") ?
                            <>
                                <Link
                                    onClick={() => {
                                        localStorage.removeItem("MAKH")
                                    }}
                                    to="/login" type="button" className="bg-red-500 text-white px-5 py-2 rounded-md">
                                    LogOut
                                </Link>
                                <div className="hidden md:flex items-center space-x-3">
                                    <button className="rounded-full overflow-hidden h-10 xl:h-12  w-10 xl:w-12 shadow-md">
                                        <img
                                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                            className="object-cover h-full w-full"
                                            alt="ava"
                                        />
                                    </button>
                                    <p className="text-md font-semibold">MAKH:{localStorage.getItem("MAKH")}</p>

                                </div>
                            </> : <Link to="/login" type="button" className="bg-red-500 text-white px-5 py-2 rounded-md">
                                LogIn
                            </Link>
                    }

                </div>
            </div>
        </header>
    );
};

export default Header;
