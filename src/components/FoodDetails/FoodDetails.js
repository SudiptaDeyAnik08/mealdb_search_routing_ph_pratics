import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card2 from './Card2/Card2';

function FoodDetails() {
  const data = useLoaderData();
  console.log(data);


  return (
    <div>
      <div className=' parentdiv'>
        {
          data.meals.map(res => <Card2 key={res.idMeal} data={res}></Card2>)
        }
      </div>

    </div>
  )
}

export default FoodDetails;