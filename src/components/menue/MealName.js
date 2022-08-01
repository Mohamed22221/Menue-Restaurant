import React , {useState , useEffect} from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom'
import DataMenue from '../menue/DataMenue';
import { useDispatch } from 'react-redux';
import { AddToCart} from '../../store/SliceCart';
import { useToasts } from 'react-toast-notifications';
import { motion } from "framer-motion"
import { FiHeart } from 'react-icons/fi'
import HeaderMeal from './HeaderMeal';
import { FaShopify } from 'react-icons/fa';


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
  //active and inactive size
  const [sizeState ,  setSizeState] = useState({
    activeSize : null ,
    sizeId : [{id:1 ,size:"11"},{id:2,size:"16"},{id:3,size:"22"}]
  })

  const HandelIndex = (index) =>{
    setSizeState(
     {...sizeState ,activeSize:sizeState.sizeId[index] }
     
    )
    console.log(sizeState)
  }
  const HandelClassName = (index) =>{
    if(sizeState.sizeId[index] === sizeState.activeSize){
      return "size active"
    }else{
      return "size inactive"
    }

  }
// when app to start
useEffect(() => {
  setSizeState(
    {...sizeState ,activeSize:sizeState.sizeId[0] }
   )
}, [setSizeState])

  

  return (
    <StyleMealName  as={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <HeaderMeal />
      { DataMenue.filter(((item , index) => item.id === ParamsId)).map((item , index) =>{
    return (
      <Container key={index} >
      <StyleItemMeal key={index} >
        <LeftMeal>
          <img src={item.img} />
        </LeftMeal>
        <RightMeal>
          <Title >
          <h1>{item.name}</h1>
          <FiHeart className='heart-icon' />
          </Title>
          <Rating >
          <span>{item.rating}</span>
          <span>(24 ratings)</span>
          </Rating> 
          <About >
          <h3>${item.price}</h3>
          <p>{item.allDisciption}</p>
          <h4>
            Size :{sizeState.sizeId.map((item , index)=>{
              return (
                <span className={HandelClassName(index)} key={index} onClick={()=>HandelIndex(index)}>{item.size}</span>
              )
            })} 
          </h4>
          <button className='button-order'  onClick={ ()=> HandelOrder(item) }>Order<span><FaShopify className='shop'/></span></button>
          </About> 
      </RightMeal>
      
      
      </StyleItemMeal>
      </Container>
       )
     })}
    </StyleMealName>
  )
}
const StyleMealName = styled.div`

`
const StyleItemMeal= styled.div`
margin: 60px 0;
@media (max-width:886px ) {
margin: 30px 0;
}
display: flex;
@media (max-width:886px ) {
flex-direction: column;
justify-content: center;
align-items: center;
}
`
const LeftMeal= styled.div`
flex: 1;
img{
  width: 250px;
}
@media (max-width:886px ) {
  padding-bottom: 20px;
  img{
  width: 220px;
}

}
`

const RightMeal= styled.div`
flex: 2;

`
const Title= styled.div`

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

`
const Rating= styled.div`
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

`
const About= styled.div`

  h3 , h4 , p{
    padding: 10px 0;
  }
  h3{
    font-weight: bold;
  }
  p{
    color: var(--text-color);
    width: 70%;
    @media (max-width:886px ) {
      width: 100%; 
      padding: 14px 0;
}
  }
  h4{
    margin: 5px 0px 20px;
    .size{
      padding: 9px 8px;
      cursor: pointer;
      margin: 15px 4px;
  }

   .inactive {
      background-color: white;
    }
    .active {
      background-color: var(--red-color);
      color: white;

    }
  
}
.button-order{
  
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90px;
  padding: 6px 20px;
  background-color: var(--red-color);
  color: white;
  border-radius: 4px;
  transition: 0.5s;
  cursor: pointer;
  .shop{
    transition: 0.5s;

  }
  &:hover{
        transition: 0.5s;
        opacity: 0.6;
    }


}


`

export default MealName