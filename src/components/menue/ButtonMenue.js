import React  from 'react'
import styled from 'styled-components'


const ButtonMenue = ({ stateActive }) => { 

  return (
    <MainButton >
      {stateActive.filterMeal.map((item,index) =>{
        return (
          <button key={index} className="button active"  onClick={item.filterShow }  ><img src={item.image}/>{item.name}</button>
        )
      })}
    </MainButton>
  )

  
}
const MainButton = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
background-color: var(--red-color);

 .button{

    all: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    color: #ffffff7b;
    cursor: pointer;

    img{
    width: 80px;
    border: 6px solid #ffffff7b;
    border-radius: 50%;
    opacity: 0.7;
      :link {
        border: 6px solid white;
      }
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