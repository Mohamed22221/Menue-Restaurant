import React , {useEffect} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import DataMenue from './DataMenue';
import {  useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../../store/SliceCart';
import {  Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

const ItemCart = ({HandelHide }) => {
  const MyItemSelector = useSelector((state) =>state.SliceCart.cartItem )
  const Despatch = useDispatch()
 

  return (
    <StyleItemCart>
        {MyItemSelector.length <= 0 ? 
        <div >
        <h3 className='empty-text'>cart item empty</h3>
        <div className='go-shoping'>
        <BsFillArrowLeftCircleFill />
        <Link to='/Menue-Restaurant' onClick={HandelHide}>Go to Shoping</Link> 
        
        </div>
        </div>
        
        :  MyItemSelector.map((item)=>{
          
            return (
                <ItemOneCart key={item.id} >
                <div className='img'>
                <img src={item.img}/>
                <h1>{item.name}</h1>
                <span>x{item.quantityUp}</span>
                </div>
                <div className='price'>
                <p>${item.price.toFixed(2) * item.quantityUp}</p>
                </div>
               <CloseIcon   onClick={ () => Despatch(deleteCart(item.id)) }  className='close-icon'/>
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
.img{
    display: flex;
    align-items: center;
    h1{
      padding-left: 5px;
     font-size:16px ;
     font-weight: bold;
     @media (max-width:350px ) {
     font-size:14px ;
    }
    }
   span{
     margin-left: 6px;
     font-size: 15px;
     color: var(--text-color);
   }
    img{
    width:80px;
    padding-right: 4px;
    @media (max-width:360px ) {
     width:70px
    }
}
    }




display: flex;
justify-content: space-between;
align-items: center;
.price{
 font-weight: 800;
 @media (max-width:350px ) {
     font-size:14px ;
    }
}
.close-icon{
color: #898787cc;
    cursor: pointer;
    font-size: 28px;
    }
`
export default ItemCart