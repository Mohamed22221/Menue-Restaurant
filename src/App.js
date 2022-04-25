import Menue from "./bages/Menue"
import Cart from "./components/menue/Cart";
import Navbar from "./components/navbar/Navbar"
import React, { useState ,useEffect } from 'react'
import OverLay from "./components/glopalComponent/OverLay";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TotalAmount } from "./store/SliceCart";

function App() {
  const [show , setShow] = useState(false)
  const MyItemSelector = useSelector((state) =>state.SliceCart.cartItem )
  const Despatch = useDispatch()
//show and hide cart
  const HandelHide = () =>{
    setShow(false)
  }
  const HandelShow = () =>{
    setShow(true)
  }
// onchange redux store
  useEffect(() => {
    Despatch(TotalAmount())
    }, [MyItemSelector ])
  return (
    <>
    <BrowserRouter>
      {show && <Cart HandelHide={HandelHide}/>}
      {show &&<OverLay HandelHide={HandelHide} />}
      <Navbar HandelShow={HandelShow} />
      <Routes>
      <Route path="/" element={<Menue/> } />
      <Route path="Menue-Restaurant" element={<Menue/>} />
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
