import React from 'react';
import { useParams } from 'react-router-dom';
import foods from '../../assets/fake-data/foods';

const MenuDetailPage = () => {
  const { id } = useParams();
  const food = foods.find((food) => food.id === id);

  if (!food) {
    return <div>404 Not Found</div>;
  }

  return (
    <div>
      <h1>Menu Detail Page</h1>
      <p>
        {JSON.stringify(food)}
      </p>
    </div>
  )
}

export default MenuDetailPage