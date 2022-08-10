import { Container } from '@mui/material'
import React from 'react'
import "./TopHeader.scss"
import pizzabg from "../../../img/home/1.png"
import fotter1 from "../../../img/menue/pizza3.png"
import fotter2 from "../../../img/home/12.png"
import fotter3 from "../../../img/home/2.png"
import ButtonOrder from '../../glopalComponent/ButtonOrder'
import { TypeAnimation } from 'react-type-animation';



const TopHeader = () => {
  return (
    <div className='main-top-header'>
     <Container maxWidth="lg" className='container'>
      <div className='content-top-header'>
       <img src={pizzabg} />
       <TypeAnimation
              cursor={true}
              sequence={["MODERNIZING THE TRADITIONAL ITALIAN PIZZA" ,1000 , "Celebrating 100 Years of Cheesy Pizza"]}
              wrapper="h1"
              speed={150}
            />

       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
       <ButtonOrder item={`/menu`} title="MENU" />
      </div>
      <div className='photos-fotter'>

      <img src={fotter3} />
      <img src={fotter1} />
      <img src={fotter2} />

      </div>
     </Container>
     </div>
  )
}

export default TopHeader