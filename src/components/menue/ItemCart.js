import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import DataMenue from './DataMenue';
import {  useSelector } from 'react-redux'

const ItemCart = () => {
  const MyItemSelector = useSelector((state) =>state.SliceCart.cartItem )
  return (
    <StyleItemCart>
        {MyItemSelector.length <= 0 ? <h3 className='empty-text'>cart item empty</h3> 
        :  MyItemSelector.map((item)=>{
            return (
                <ItemOneCart key={item.id}>
                <div className='img'>
                <img src={item.img}/>
                <h1>{item.name}</h1>
                <span>x{item.quantityUp}</span>
                </div>
                <div className='price'>
                <p>{item.price}</p>
                
                </div>
                <CloseIcon className='close-icon'/>
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
    }
   span{
     margin-left: 6px;
     font-size: 15px;
     color: var(--text-color);
   }
    img{
    width:80px;
    padding-right: 4px;
    }


}
display: flex;
justify-content: space-between;
align-items: center;
.price{
 font-weight: 800;
}
.close-icon{
color: #898787cc;
    cursor: pointer;
    font-size: 28px;
    }
`
export default ItemCart