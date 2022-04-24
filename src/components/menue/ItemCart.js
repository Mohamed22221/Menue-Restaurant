import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import DataMenue from './DataMenue';
const ItemCart = () => {
  return (
    <StyleItemCart>
        {DataMenue.map((item)=>{
            return (
                <ItemOneCart>
                <div className='img'>
                <img src={item.img}/>
                <h1>{item.name}</h1>
                </div>
                <div className='price'>
                {item.price}
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