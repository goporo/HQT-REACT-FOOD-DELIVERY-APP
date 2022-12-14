const StateOrder = ({ s , index}) => {
    return (
        <tr>
            <td className="border-collapse border border-black h-10">{index}</td>
            <td className="border-collapse border border-black h-10">{s.title}</td>
            <td className="border-collapse border border-black h-10">{s.date}</td>
            <td className="w-20 pl-5 "><button className="bg-orange-400 rounded-lg font-semibold w-20 text-white hover:bg-orange-600 hover:text-lg hover:text-black">View</button></td> 
        </tr>
    );
};

export default StateOrder;