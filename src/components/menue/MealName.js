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
      { DataMenue.filter((item => item.name === ParamsId)).map((item , index) =>{
    return (
      <Container key={item.id} >
      <StyleItemMeal key={item.id} >
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
margin: 60px 0;
@media (max-width:886px ) {
margin: 30px 0;
}
`
const StyleItemMeal= styled.div`
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
  p{
    color: var(--text-color);
    width: 70%;
  }
  h4{
    .size{
      padding: 4px 8px;
      cursor: pointer;
      margin: 0 4px;
  }

   .inactive {
      background-color: white;
    }
    .active {
      background-color: red;
      color: white;

    }
  
}


`

export default MealName