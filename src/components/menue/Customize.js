import React from 'react'
import { useParams } from 'react-router-dom'
import PupUp from '../glopalComponent/PupUp'
import {  useDispatch, useSelector } from 'react-redux';
import {  useToasts } from 'react-toast-notifications';
import { AddToCart } from '../../store/SliceCart';
import styled from 'styled-components'
import { Hide } from '../../store/StateSlice';


const Customize = ({menueData}) => {
const MealOne = useSelector((state) => state.SliceCart.itemOne)
const { addToast } = useToasts();
const Dispatch = useDispatch()
console.log(MealOne)
const HandelOrder = () =>{
  Dispatch(AddToCart(MealOne))
  addToast(`${MealOne.name} Added To Cart`, { appearance: 'success' });
  Dispatch(Hide())
}
const HandelHideOrder =() =>{
  Dispatch(Hide())
}
  return (
   <PupUp>
    <MainCustomize>
      <div className='img'>
        <img src={MealOne.img} />
      </div>
      <div className='about-meal'>
        <div className='title'>
          <h3>{MealOne.name}</h3>
          <p>{MealOne.discription}</p>
        </div>
        <div className='price'>
          <h4>{MealOne.price}$</h4>
        </div>
        
      </div>
      <div className="addition-meal">
      <div className='size-meal meal'>
        <h4>Size : <span>{MealOne.size}</span></h4>

      </div>
      <div className='addition meal'>
        <h4>addition : <span>{MealOne.addition}</span></h4>
      </div>
      <div className='quantity meal'>
        <h4>quantity : <span>1</span></h4>
      </div>
      </div>
      <div className='buttons'>
        <button onClick={HandelHideOrder}>Close</button>
        <button onClick={HandelOrder}>Accept</button>
      </div>
    
    
    </MainCustomize>
    </PupUp>
  )
}
const MainCustomize = styled.div`
padding: 15px;

//img style
.img{
  display: flex;
  justify-content: center;
  img{
    width:190px;
  }
  
}
//about meal style
.about-meal{
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  padding: 10px 0;
  border-bottom: 1px solid #d0d0d0;
  .title{
    width: 70%;
    h3{
      font-weight: bold;
    }
    p{
      padding: 7px 0;
      color: var(--text-color);
      font-size: 15px;
      letter-spacing: 0;
    }
  }
}
//price meal style
.price{
  h4{
    color: var(--red-color);
    box-shadow: 1px 5px 77px 6px rgba(0,0,0,0.24);
      -webkit-box-shadow: 1px 5px 77px 6px rgba(0,0,0,0.24);
      -moz-box-shadow: 1px 5px 77px 6px rgba(0,0,0,0.24);
  }
}
//price meal style
.addition-meal{
  border-bottom: 1px solid #d0d0d0;
  padding: 10px 0;
  .meal{
  padding: 7px 0;
  
  h4{
    span{
      color: var(--red-color);
      box-shadow: 1px 5px 77px 6px rgba(0,0,0,0.24);
      -webkit-box-shadow: 1px 5px 77px 6px rgba(0,0,0,0.24);
      -moz-box-shadow: 1px 5px 77px 6px rgba(0,0,0,0.24);
      padding: 5px 8px;
      font-size: 13px;
      border-radius: 4px;
    }
  }
}

}
//price meal style
.buttons{
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  
  button{
    all: unset;
    width: 50%;
    margin: 8px;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    :first-child{
      background-color: var(--red-color);
      
    }
    :last-child{
      background-color: #32CD32;
    }
  }
}


`
export default Customize