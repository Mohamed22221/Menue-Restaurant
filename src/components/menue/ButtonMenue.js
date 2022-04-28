import React from 'react'
import styled from 'styled-components'
import All from"../../img/menue/all.png"
import pizza from"../../img/menue/pizza.png" 
import salad from"../../img/menue/salad.png" 
import pasta from"../../img/menue/pasta.png" 
import dessert from"../../img/menue/dessert.png" 


const ButtonMenue = ({FilterButton , clicked}) => {  
  return (
    <MainButton clicked={clicked} >
        <button clicked={clicked}   onClick={()=>FilterButton("All")} ><img src={All}/>All</button>
        <button type='button'  onClick={()=>FilterButton("pizza")} ><img src={pizza}/>pizza</button>
        <button type='button'   onClick={()=>FilterButton("salad")}><img src={salad}/>salad</button>
        <button type='button'  onClick={()=>FilterButton("pasta")}><img src={pasta}/>pasta</button>
        <button type='button'    onClick={()=>FilterButton("dessert")}><img src={dessert}/>dessert</button>
    </MainButton>
  )

  
}
const MainButton = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
background-color: var(--red-color);

 button{

    all: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    color: #ffffff7b;
    cursor: pointer;
    &:nth-child(1){
      color:white;
      img{
        border: 6px solid white;
        opacity: 1;
      }
    }
    img{
    width: 80px;
    border: 6px solid #ffffff7b;
    border-radius: 50%;
    opacity: 0.7;

    }
    @media (max-width:833px) {
    padding: 15px;
    img{
    width: 40px;
    }    
    }
}
`
export default ButtonMenue