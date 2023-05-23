import React from 'react'
import { useLoaderData } from 'react-router-dom'

function FoodDetails() {
   const data = useLoaderData();
   console.log(data)
  return (
    <div>FoodDetails</div>
  )
}

export default FoodDetails;