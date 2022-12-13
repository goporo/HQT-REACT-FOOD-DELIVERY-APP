import { FiPieChart, FiBookmark } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import SidebarRow from "./SidebarRow";
import imageSidebar from "../../assets/images/undraw_On_the_way_re_swjt.svg";

const nav__links = [
    {
        display: "Home",
        to: "/home",
        Icon: BsGrid,
    },
    {
        display: "Received Order",
        to: "/order",
        Icon: FiBookmark,
    },
    {
        display: "Statistics",
        to: "/statistics",
        Icon: FiPieChart,
    },
    {
        display: "Settings",
        to: "/setting",
        Icon: IoSettingsOutline,
    },
];

const Sidebar = () => {
    return (
        <div className="hidden xl:block w-72 min-w-[288px] bg-white border-r border-gray-200">
            <div className="sticky top-0 pt-8">
                <div className="flex items-center space-x-3 mb-10 ml-10">
                    <a href="/">
                        <h1 className="flex font-semibold tracking-wide text-2xl pb-1 text-gray-800">
                            <div className="text-orange-500">ABC.</div> Shipper
                        </h1>
                    </a>
                </div>

                <div className="mx-10 mt-4">
                    <div className="mb-4">
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

                    <hr />

                    <div className="mt-12">
                        <div className="px-4">
                            <img
                                src={imageSidebar}
                                alt=""
                            />
                        </div>
                        <div className="bg-purple-50 p-4 rounded-xl flex flex-col items-center">
                            <h4 className="text-sm font-semibold text-purple-900 mt-4 mb-2">
                                Fastest Delivery Service
                            </h4>
                            <div className="text-xs text-center text-gray-400">
                                Free delivery service in first order & every
                                purchase of ₹1500.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
