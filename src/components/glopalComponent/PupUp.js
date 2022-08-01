import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import OverLay from './OverLay'


const PupUp = (props) => {
 const PopUpShow = useSelector((state) => state.ShowAndHide.value.popup)
  return (
   
    <StyledPupUp PopUpShow={PopUpShow} >
      <OverLay />
      <div className='main-popUp'>
        {props.children}
      </div>
     </StyledPupUp>
  )
}
const StyledPupUp = styled.div`
.main-popUp{
padding: 20px;
z-index: 1000;
width: 550px;
height: 580px;
position: fixed;
transition: 0.4s;
top: ${(props) => props.PopUpShow === false ? "-70% ": "50%"};
left: 50%;
transform: translate(-50% , -50%);
background-color: white;
border-radius: 15px;
box-shadow: 0px 0px 15px 0px rgba(135,135,135,0.75);
-webkit-box-shadow: 0px 0px 15px 0px rgba(135,135,135,0.75);
-moz-box-shadow: 0px 0px 15px 0px rgba(135,135,135,0.75);
color: black;
@media (max-width: 680px) {
  width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border-radius: 0px;
}
}

`

export default PupUp