import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Search from './components/Search/Search';
 


function App() {

  const restaurant   = createBrowserRouter([
    {path:"/",element:<Main></Main>,children:[
      {path:'/home',element:<Home></Home>},
      {path:'/about',element:<About></About>},
      {path:'/search',element:<Search></Search>}
   
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
