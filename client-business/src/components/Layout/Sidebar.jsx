

import { FiHome } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { RiHeart2Line, RiFileList3Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import SidebarRow from "./SidebarRow";
import { Link } from "react-router-dom";

const nav__links = [
    // {
    //     display: "Home",
    //     to: "/",
    //     Icon: FiHome,
    // },

    {
        display: "Contract",
        to: "/contract",
        Icon: RiFileList3Line,
        badge: 3,
    },
    {
        display: "Profile",
        to: "/profile",
        Icon: AiOutlineUser,
    },
];

const Sidebar = () => {
    return (
        <div className="hidden xl:block w-72 min-w-[288px] bg-white border-r border-gray-200">
            <div className="sticky top-0 pt-8">
                <div className="flex items-center space-x-3 mb-10 ml-10">
                    <span className="">
                        <img src="/images/logo.png" alt="logo"
                            className="h-[22px] w-[35px] object-fill mb-[6.4px]"
                        />
                        {/* <Image
                            src="/images/logo.png"
                            alt="logo"
                            layout="fixed"
                            height={22}
                            width={35}
                            objectFit="fill"
                        /> */}
                    </span>
                    <a href="/">
                        <h1 className="font-bold tracking-wide text-2xl pb-1 text-gray-800">
                            Foody
                        </h1>
                    </a>
                </div>
                <div className="mx-10 mt-4">



                    <div className="mb-4">
                        <div className="font-normal text-gray-600 text-sm mb-4">
                            Main Menu
                        </div>

                        <ul className="ml-1">
                            {nav__links.map((item, index) => (
                                <SidebarRow
                                    key={index}
                                    display={item.display}
                                    to={item.to}
                                    Icon={item.Icon}
                                    badge={item.badge}
                                    isActive={false}
                                />
                            ))}
                        </ul>
                    </div>




                    <div className="mt-12">
                        <div className="px-4">
                            <img
                                src="/images/undraw_On_the_way_re_swjt.svg"
                                alt=""
                            />
                        </div>
                        <div className="bg-purple-50 p-4 rounded-xl flex flex-col items-center">
                            <h4 className="text-sm font-semibold text-purple-900 mt-4 mb-2">
                                Fastest Delivery Service
                            </h4>
                            <div className="text-xs text-center text-gray-400">
                                Free delivery service in first order & every
                                purchase of ???1500.
                            </div>
                            <Link to="/login" className="mt-4 mb-2 text-sm font-semibold bg-purple-600 text-white px-3 py-2 rounded-lg">
                                Order Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
