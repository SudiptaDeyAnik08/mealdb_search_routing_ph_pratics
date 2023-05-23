import React from 'react'

import { useLoaderData } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import Cards from './Card/Cards';

import './Home.css';

function Home() {

    const data = useLoaderData();

    console.log(data);

  return (
    <div className='p1'>
        <h1>Home Page</h1>
        <h3>Explore The Category</h3>
     
           <div className=' parentdiv'>
           {
                data.categories.map(res =><Cards data={res} key={res.idCategory
                }></Cards>)
            }
           </div>
   
    </div>
  )
}

export default Home;