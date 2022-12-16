import { NavLink } from "react-router-dom";


const SidebarRow = ({ display, to, Icon, badge, isActivea }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? " text-orange-500 font-semibold" : "text-gray-600"}
        >
            <div className="flex space-x-2 text-md items-center py-3 relative hover:text-orange-400">
                <span className="text-2xl">
                    <Icon />
                </span>
                <span>{display}</span>
                {badge && (
                    <span className="absolute right-0 bg-[#f25e35] text-white h-6 w-6 flex justify-center items-center p-1 text-sm rounded-full">
                        {badge}
                    </span>
                )}
            </div>

        </NavLink>
    );
};

export default SidebarRow;
