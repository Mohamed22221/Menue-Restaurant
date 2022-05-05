import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material';
import background from "../../img/glopal/subheader.jpg"
import StarIcon from '@mui/icons-material/Star';
import {  Link } from "react-router-dom";

const HeaderMeal = () => {
  return (
    <MenueHederStyle>
        <MainHeader>
      <Container maxWidth="lg">
          <h1><span>Menu Item </span> v1</h1>
            <p><Link  to='/Menue-Restaurant' >Menu</Link> <span>/ Menu Item v1</span></p> 
          <div className='icon-star'>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>   
          </div>
      </Container>
      </MainHeader>
    </MenueHederStyle>
  )
}
const MenueHederStyle = styled.div`


`
const MainHeader = styled.div`
     background-image: url(${background} );
     height: 340px;
     background-size:cover;
     background-position: center center;
     background-repeat: no-repeat;
     position: relative;
     &::after{
         content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #00000073;
        width: 100%;
        height: 100%;
        z-index: 1;
     }

        h1 ,.icon-star{
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translate(-50%);
        color: white;
        z-index:2 ;
        font-size: 50px;
        @media (max-width:700px) {
        left: 10%;
        top: 20%; 
        transform: translate(-10%);
        font-size: 40px;
        }
        }
        .icon-star{
         top: 35%;
         color: gold;
         font-size: 39px;
        }
        
        h1 span{
            
                color: var(--gold-color);
            
        }
        p{
        position: absolute;
        left: 35%;
        top: 80%;
        transform: translate(-50%);
        z-index:2 ;
        font-size: 15px;
        @media (max-width:700px) {
        left: 10%;
        top: 80%; 
        transform: translate(-10%);
        font-size: 15px;
        }
        a , span{
            color: white;
        }  
        }

`
export default HeaderMeal