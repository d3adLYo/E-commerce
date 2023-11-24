import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import { setProducts } from "./store/productsSlice";
import { useEffect } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
      fetch('http://localhost:3004/products')
      .then(resp => resp.json())
      .then(json => dispatch(setProducts(json)))
      .catch(error => console.log(error))
  },[]);

  const Root = ()=>{
    return(
        <>
          <Header/>
          <Outlet/>
          <Footer/>
          <ScrollRestoration/>
        </>
    )
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<Main dataMain='HeroProductsPage'/>}/>
            <Route path="/product/:productId" loader={loader} element={<Main dataMain='productId'/>} errorElement={<ErrorPage/>}/>
            <Route path='/checkout' element={<Main dataMain='checkout'/>}/>
            <Route path='/checkout/success' element={<Main dataMain='success'/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
  );

  async function loader({params}){
    let products = await fetch(`http://localhost:3004/products?url=${params.productId}`)
    .then(resp => resp.json());
    return products[0]
  }
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;