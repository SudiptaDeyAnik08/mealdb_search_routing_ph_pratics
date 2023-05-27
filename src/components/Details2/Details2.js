import React from 'react';

import { useLoaderData } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube';


import '../Details2/Details2.css'

function Details2() {
    const data = useLoaderData();
    console.log(data.meals[0].idMeal);


    const { idMeal, strArea, strCategory, strInstructions, strMeal, strMealThumb, strSource, strYoutube } = data.meals[0];


    const strIngredient = [data.meals[0].strIngredient1,data.meals[0].strIngredient2,data.meals[0].strIngredient3,data.meals[0].strIngredient4,data.meals[0].strIngredient5,data.meals[0].strIngredient6,data.meals[0].strIngredient7,data.meals[0].strIngredient8,data.meals[0].strIngredient9,data.meals[0].strIngredient10,data.meals[0].strIngredient11,data.meals[0].strIngredient12,data.meals[0].strIngredient13,data.meals[0].strIngredient14,data.meals[0].strIngredient15,data.meals[0].strIngredient16,data.meals[0].strIngredient17,data.meals[0].strIngredient18,data.meals[0].strIngredient19,data.meals[0].strIngredient20];

    const strMeasure = [
        data.meals[0].strMeasure1,
        data.meals[0].strMeasure2,
        data.meals[0].strMeasure3,
        data.meals[0].strMeasure4,
        data.meals[0].strMeasure5,
        data.meals[0].strMeasure6,
        data.meals[0].strMeasure7,
        data.meals[0].strMeasure8,
        data.meals[0].strMeasure9,
        data.meals[0].strMeasure10,
        data.meals[0].strMeasure11,
        data.meals[0].strMeasure12,
        data.meals[0].strMeasure13,
        data.meals[0].strMeasure14,
        data.meals[0].strMeasure15,
        data.meals[0].strMeasure16,
        data.meals[0].strMeasure17,
        data.meals[0].strMeasure18,
        data.meals[0].strMeasure19,
        data.meals[0].strMeasure20,
    ]

    return (
        <div className='bacground'>
            
            <div>

                <div className='parentDiv'>
                    <div className='image'>
                        <img  src={strMealThumb} alt={strMealThumb} />
                        
                    </div>
                    <div className='childDiv2'>
                      <h2>Recipe: {strMeal}</h2>
                      <h4>Food Type: {strArea}</h4>
                     
                      <div className='preparingInstruction'> <p><small style={{fontWeight:"bolder", }}>Preparing Instuction:</small> {strInstructions}</p></div>
                     
                      <p className='d-flex'><small style={{fontWeight:"bolder", }}> Ingredient List: </small> {strIngredient.map(res=> <p>{res},</p>)}</p>

                      <p className='d-flex'><small style={{fontWeight:"bolder", }}> Measure: </small> {strMeasure.map(res=> <p>{res},</p>)}</p>

                    </div>
                   


                </div>


                <div className='youtube'>
                    <p>Helping Video Link</p>
                    <ReactPlayer url={strYoutube} />
                </div>
            </div>

        </div>
    )
}

export default Details2