import { Container } from '@mui/material'
import React from 'react'
import "./About.scss"
import Auth from "../../../img/home/auth.jpg"
import Signature from "../../../img/home/signature.png"
import ButtonOrder from '../../glopalComponent/ButtonOrder'

const About = () => {
 return (
  <div>
   <Container maxWidth="lg"  >
    <div className='sec2-main-about'>
    <div className='left'>
     <img src={Auth} />
     <div className='dotted'></div>
    </div>
    <div className='right'>
     <h4>Sir Slice's Heritage</h4>
     <h1>Serving Pizzas By The Slice Since 1987</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
      <img src={Signature} />
      <ButtonOrder item={`/Menue-Restaurant`} title="CHECK OUR MENU" />
    </div>
    </div>
   </Container>
  </div>
 )
}

export default About