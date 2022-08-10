import { Container } from '@mui/material'
import React from 'react'
import "./Delever.scss"
import calory from "../../../img/glopal/calorie.png"
import order from "../../../img/glopal/order.png"
import deliver from "../../../img/glopal/tracking.png"
import enjoy from "../../../img/glopal/romantic-dinner.png"
import ButtonOrder from '../../glopalComponent/ButtonOrder'




const Delever = () => {
  return (
    <div className='main-delever'>
     <Container maxWidth="lg" className='container' >
     <div className='header-delever'>
     <h4>How We Do It</h4>
     <h1>We Deliver Your Food In 4 Steps</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
     </div>
     <div className='icons-delever'>
     <div className='item-icon-delever'>
       <img src={order} />   
       <h2>Order</h2>
       <p>There are many variations of passages of Lorem Ipsum available</p>
      </div>
      <div className='item-icon-delever'>
       <img src={calory} />   
       <h2>Cook</h2>
       <p>There are many variations of passages of Lorem Ipsum available</p>
      </div>
      <div className='item-icon-delever'>
       <img src={deliver} />   
       <h2>Deliver</h2>
       <p>There are many variations of passages of Lorem Ipsum available</p>
      </div>      <div className='item-icon-delever'>
       <img src={enjoy} />   
       <h2>Enjoy</h2>
       <p>There are many variations of passages of Lorem Ipsum available</p>
      </div>

     </div>
     <ButtonOrder item={`/menu`} title="ORDER ONLINE" />

     </Container>
    </div>
  )
}

export default Delever