import Menue from "./bages/Menue"
import Cart from "./components/menue/Cart";
import Navbar from "./components/navbar/Navbar"
import React, { useState ,useEffect } from 'react'
import OverLay from "./components/glopalComponent/OverLay";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TotalAmount } from "./store/SliceCart";
import { ToastProvider } from 'react-toast-notifications';
import Fotter from "./components/fotter/Fotter";
import MealName from "./components/menue/MealName";
import PupUp from "./components/glopalComponent/PupUp";
import { Hide, ShowPopUp } from "./store/StateSlice";
import Loading from "./components/glopalComponent/Loading";
import Home from "./bages/Home";


function App() {
  const MyItemSelector = useSelector((state) =>state.SliceCart.cartItem )
  const Despatch = useDispatch()
// onchange redux store
  useEffect(() => {
    Despatch(TotalAmount())
    }, [MyItemSelector ])

    const [loader, setLoader] = useState(true);
    useEffect(()=>{
      setTimeout(() => {
        setLoader(false);
      }, 4500);
    },[])
  return (
    
    <>
    {/* {loader && <Loading/>}*/}
     <PupUp />
    <ToastProvider 
    autoDismiss
    autoDismissTimeout={4000}
    placement="bottom-right" >
    <BrowserRouter>
      <Cart />
      <OverLay  />
      <Navbar  />
      <Routes>
      <Route path="/" element={<Menue/> } />
      <Route path="Menue-Restaurant" element={<Menue/>} />
      <Route path="home" element={<Home/>} />

      <Route path="/meal" element={<MealName />} >
      <Route path=":mealId" element={<MealName/>} />
      </Route>
      </Routes>
      <Fotter />
    </BrowserRouter>
    </ToastProvider>
    </>

  );
}

export default App;
