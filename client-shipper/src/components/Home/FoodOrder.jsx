const FoodOrder = ({ f }) => {
    return (
        <tr>
            <td>{f.title}</td>
            <td className="text-center">{f.number}</td>
            <td className="text-center">{f.price}</td>
        </tr>
    );
};

export default FoodOrder;