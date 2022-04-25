import Menue from "./bages/Menue"
import Cart from "./components/menue/Cart";
import Navbar from "./components/navbar/Navbar"
import React, { useState } from 'react'
import OverLay from "./components/glopalComponent/OverLay";
import { Routes, Route, BrowserRouter } from "react-router-dom";




function App() {
  //show and hide cart
  const [show , setShow] = useState(false)
  const HandelHide = () =>{
    setShow(false)
  }
  const HandelShow = () =>{
    setShow(true)
  }

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
