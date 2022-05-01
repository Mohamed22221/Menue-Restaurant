import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom'
import DataMenue from '../menue/DataMenue';
import { useDispatch } from 'react-redux';
import { AddToCart} from '../../store/SliceCart';
import { useToasts } from 'react-toast-notifications';
import { motion } from "framer-motion"
import { FiHeart } from 'react-icons/fi'

const MealName = ({MenuFilter}) => {
  // params id 
  const Params = useParams()
  const ParamsId = `${Params.mealId}`
  //add item to cart
  const Despatch = useDispatch()
  const { addToast } = useToasts();
  const HandelOrder = (item) =>{
      Despatch(AddToCart(item))
      addToast(`${item.name} Added To Cart`, { appearance: 'success' });
  }
  return (
    <StyleMealName  as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      { DataMenue.filter((item => item.name === ParamsId)).map((item) =>{
    return (
      <Container key={item.id}>
      <StyleItemMeal >
        <LeftMeal>
          <img src={item.img} />
        </LeftMeal>
        <RightMeal>
          <div className='title'>
          <h1>{item.name}</h1>
          <FiHeart className='heart-icon' />
          </div>
          <div className='rating'>
          <span>{item.rating}</span>
          <span>(24 ratings)</span>
          </div> 
          <div className='about'>
          <h3>${item.price}</h3>
          <p>${item.discription}</p>
          <h4>
            Size : 
          
          </h4>

          </div> 
      </RightMeal>
      </StyleItemMeal>
      </Container>
       )
     })}
    </StyleMealName>
  )
}
const StyleMealName = styled.div`
margin: 60px 0;
`
const StyleItemMeal= styled.div`
display: flex;
`
const LeftMeal= styled.div`
flex: 1;
img{
  width: 250px;
}
`
const RightMeal= styled.div`
flex: 2;
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
  font-weight: bold;
  letter-spacing: -1px;
  font-size: 30px;
}
.heart-icon{
  border: 1px solid var(--text-color);
  font-size: 30px;
  padding: 6px;
  border-radius: 50%;
  opacity: 0.5;
  transition: 0.4s;
  cursor: pointer;
  &:hover{
    border: 1px solid var(--red-color);
    color:var(--red-color) ;
    opacity: 1;
  }
}
}

.rating{
  display: flex;
  align-items: center;
   svg{
    color: var(--gold-color);
    font-size: 17px;
    margin: 6px 0;
    
  }
  span{
    font-size: 11px;
    margin:0 3px;
    color: var(--text-color);
  }
}

.about{
  h3 , h4 , p{
    padding: 10px 0;
  }
  p{
    color: var(--text-color);
    width: 70%;
  }
}

`

export default MealName