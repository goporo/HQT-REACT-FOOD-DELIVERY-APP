const History = ({ h}) => {
     const money = h.bill.toLocaleString('en-US');
    return (
        <tr>
            <td className="h-10">{h.title}</td>
            <td className="h-10">{money}</td>
            <td className="h-10">{h.restaurant}</td>
            <td className="w-20 pl-5 "><button className="bg-orange-400 rounded-lg font-semibold w-20 text-white hover:bg-orange-600 hover:text-lg hover:text-black">View</button></td> 
        </tr>
    );
};

export default History;