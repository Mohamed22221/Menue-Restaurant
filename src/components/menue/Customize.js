import React from 'react'
import { useParams } from 'react-router-dom'
import PupUp from '../glopalComponent/PupUp'
import {  useDispatch, useSelector } from 'react-redux';
import {  useToasts } from 'react-toast-notifications';
import { AddToCart } from '../../store/SliceCart';

const Customize = ({menueData}) => {
const MealOne = useSelector((state) => state.SliceCart.itemOne)
const { addToast } = useToasts();
const Dispatch = useDispatch()
console.log(MealOne)
const HandelOrder = () =>{
  Dispatch(AddToCart(MealOne))
  addToast(`${MealOne.name} Added To Cart`, { appearance: 'success' });
}
  return (
   <PupUp>
    <img src={MealOne.img} />
    <h2 onClick={HandelOrder}>{MealOne.id}</h2>  
    </PupUp>
  )
}

export default Customize