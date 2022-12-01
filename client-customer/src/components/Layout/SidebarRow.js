import { Link, NavLink } from "react-router-dom";


const SidebarRow = ({ display, to, Icon, badge, isActive }) => {
    return (
        <NavLink
            to={to}
            className="flex space-x-2 text-gray-600 text-md items-center py-3 relative"
        >
            <span className="text-2xl">
                <Icon />
            </span>
            <span>{display}</span>
            {badge && (
                <span className="absolute right-0 bg-[#f25e35] text-white h-6 w-6 flex justify-center items-center p-1 text-sm rounded-full">
                    {badge}
                </span>
            )}

        </NavLink>
    );
};

export default SidebarRow;
