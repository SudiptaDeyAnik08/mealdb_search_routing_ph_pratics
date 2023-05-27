import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Search from './components/Search/Search';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Details2 from './components/Details2/Details2';
 


function App() {

  const restaurant   = createBrowserRouter([
    {path:"/",element:<Main></Main>,children:[
      {path:'/home',
      loader: async()=>{
        return fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      },
      element:<Home></Home>},
      
      {path:'/about',element:<About></About>},
      {path:'/search',element:<Search></Search>},
      {
        path:'/FoodDetails/:category',
        loader:async({params})=>{
          return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.category}`)
        },
        element:<FoodDetails></FoodDetails>
      },
      {
        path:'/Details2/:idMeal',
        loader:async({params})=>{
          return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
        },
        element:<Details2></Details2>
      }
   
    ]},


    {path:'*',element: <div>Page Not found....!!!!!!!!!! Error 404!!!</div>}
  ])

  return (
    <div className="App">
        <RouterProvider router={restaurant }></RouterProvider>
    </div>
  );
}

export default App;
