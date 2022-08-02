import React , {useEffect} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import {  useDispatch, useSelector } from 'react-redux'
import { deleteCart, increseItem , decreseItem} from '../../store/SliceCart';
import {  Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import {  useToasts } from 'react-toast-notifications';

const ItemCart = ({HandelHide }) => {
  const MyItemSelector = useSelector((state) =>state.SliceCart.cartItem )
  const Despatch = useDispatch()
  const { addToast } = useToasts();
  //action Delete  & Increse & Decrese 
  const HandelDelete = (item) =>{
    Despatch(deleteCart(item))
    addToast(`${item.name} removed To Cart` , { appearance: 'error' });

  }
  const HandelIncrese = (item) =>{
    Despatch(increseItem(item))
    
  }
  const HandelDecrese = (item) =>{
    Despatch(decreseItem(item))
    if(item.quantityUp <=1) {
      Despatch(deleteCart(item))
      addToast(`${item.name} removed To Cart` , { appearance: 'error' }); 
    }
  }
  return (
    <StyleItemCart>
        {MyItemSelector.length <= 0 ? 
        <div >
        <h3 className='empty-text'>cart item empty</h3>
        <div className='go-shoping'>
        <BsFillArrowLeftCircleFill />
        <Link to='/Menue-Restaurant' onClick={HandelHide}>Go To Menu</Link> 
        </div>
        </div>
        /*loop slicecart redux */
        :  MyItemSelector.map((item , index)=>{
            return (
              
                <ItemOneCart key={index} >
                  <Link to={`/meal/${item.id}`} onClick={HandelHide} >
                <div className='img'>
                <img src={item.img}/>

                </div>
                <div className='main-meal'>
                <div className='meal meal1'>
                <h1>{item.name}</h1>
                <span>x{item.quantityUp}</span>

                </div>
                <div className='meal meal2'>
                <h1>Size : </h1>
                <span>{item.size}</span>

                </div>
                <div className='meal meal2'>
                <h1>addition : </h1>
                <span>{item.addition}</span>

                </div>
                </div>
                
                </Link>
                <div className='quantity'>
                  <IoIosArrowUp className='icon-quantity' onClick={() => HandelIncrese(item)}  />
                  <IoIosArrowDown className='icon-quantity' onClick={() => HandelDecrese(item)}   />
                </div>
                <div className='price'>
                <p>${item.price.toFixed(2) * item.quantityUp}</p>
                </div>

               <CloseIcon onClick={ () => HandelDelete(item)}  className='close-icon'/>
              
                </ItemOneCart>
                
            )
        })}

    </StyleItemCart>
  )
}
const StyleItemCart = styled.div`
flex: 1;
padding: 20px;
overflow-y: auto;
a{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

&::-webkit-scrollbar{
  width:0px;
}
.empty-text{
  text-align: center;
  font-size: 17px;
  color: var(--red-color);
}
.go-shoping{
  display: flex;
  align-items: center;
  justify-content: center;
}
a{
 display: flex;
 justify-content: center;
 color: var(--text-color);
 padding: 10px;
 font-weight: bold;
 
}

`

const ItemOneCart = styled.div`
padding: 20px 0;
border-bottom:2px dotted var(--text-color) ;
.main-meal{


.meal{
  display: flex;
  align-items: center;
  
  h1{
    padding: 1px 0;
    font-size: 14px;
    font-weight: bold;
    color: black;
    transition: 0.5s;
    &:hover{
      color: var(--primary);
    }
    @media (max-width:390px ) {
     font-size:12px ;
    }
  }
  span{
     margin-left: 6px;
     font-size: 12px;
     color: var(--text-color);
     @media (max-width:390px ) {
     font-size:11px ;
    }
   }

}

}

.img{
    display: flex;
    align-items: center;
    h1{
      padding-left: 5px;
     font-size:15px ;
     


    }

    img{
    width:80px;
    padding-right: 2px;
    @media (max-width:390px ) {
     width:62px
    }
}
    }




display: flex;
justify-content: space-between;
align-items: center;
.price{
 font-weight: 800;
 @media (max-width:380px ) {
     font-size:13px ;
    }
}
.close-icon{
color: #898787cc;
    cursor: pointer;
    font-size: 28px;
    }
    .quantity{
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon-quantity{
        cursor: pointer;
        font-size: 18px;
      }
    }
`
export default ItemCart