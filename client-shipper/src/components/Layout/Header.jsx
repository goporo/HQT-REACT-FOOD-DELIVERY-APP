import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <header className="w-11/12 mx-auto flex flex-col flex-wrap md:flex-nowrap md:justify-between items-center md:flex-row gap-6">
            <div className="md:mt-10 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Homepage
                </h1>

                <div className="text-xs md:text-sm whitespace-nowrap text-gray-500 mt-1 tracking-normal">
                    Hello YeonJi!
                </div>
            </div>

            <div className="mt-10 md:mt-6 space-x-1 max-w-xl">
                <div className="flex justify-around items-center w-full">
                    <div className="md:flex items-center space-x-3">

                        <div className="rounded-full overflow-hidden h-10 xl:h-12  w-10 xl:w-12">
                            <img
                                src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-vui-nhon.jpg"
                                className="object-cover h-full w-full"
                            />
                        </div>
                        <NavLink to='/login'>
                            <button className="w-20 rounded-md text-lg bg-orange-600 text-white">Log out</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
