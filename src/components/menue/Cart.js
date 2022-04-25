
import styled from 'styled-components'
import { motion } from "framer-motion"
import CloseIcon from '@mui/icons-material/Close';
import ItemCart from './ItemCart';
import {  useDispatch, useSelector } from 'react-redux';
import React ,{useEffect} from 'react'
import { TotalAmount } from '../../store/SliceCart';

const Cart = ({HandelHide}) => {
  const Despatch = useDispatch()
  const SelectorTotalAmount = useSelector((state) =>state.SliceCart.cartTotalAmount)

  return (
    <StyleMainCart  as={motion.div} animate={{ opacity: 4 }}>
      <MainCart  >
        <div className='header-cart'>
          <h1>YOUR CART</h1>
          <CloseIcon className='CloseIcon' onClick={HandelHide}/>
        </div>
        <ItemCart HandelHide={HandelHide}/>
        <div className='fotter-cart'>
          <div className='right-cart'>
            <h1>Total: <span >${SelectorTotalAmount.toFixed(2)}</span></h1>
          </div>
          <button>CHECKOUT</button>
        </div>
      </MainCart>
    </StyleMainCart>
  )
}
const StyleMainCart = styled.div`

transition :0.4s;
position: fixed;
top: 0;
bottom: 0;
right: 0px;
width: 600px;
background-color: white;
z-index: 1000;
opacity: 0;

@media (max-width:700px) {
  width: 100%;
}
`
const MainCart = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;

.header-cart{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  h1{
    font-size: 25px;
    font-weight: 800;
  }
  .CloseIcon{
    font-size: 40px;
    cursor: pointer;
  }
}
.fotter-cart{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  button{
      all: unset;
      cursor: pointer;
      padding: 10px 20px;
      background-color: var(--red-color);
      color: white;
      border-radius: 20px;
    }
  .right-cart{
    h1{
      font-size: 18px;
      span{
        font-size: 25px;
      }
    }
  }
}

`

export default Cart