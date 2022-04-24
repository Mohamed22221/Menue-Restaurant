import Menue from "./bages/Menue"
import Cart from "./components/menue/Cart";
import Navbar from "./components/navbar/Navbar"
import React, { useState } from 'react'
import OverLay from "./components/glopalComponent/OverLay";
import styled from 'styled-components'
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
    
    <MainApp>
      {show && <Cart HandelHide={HandelHide}/>}
      {show &&<OverLay HandelHide={HandelHide} />}
      <Navbar HandelShow={HandelShow} />
      <Menue/>
    </MainApp>

  );
}
const MainApp = styled.div`

`
export default App;
