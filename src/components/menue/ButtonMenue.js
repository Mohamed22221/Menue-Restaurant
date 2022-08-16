import React  from 'react'
import { useEffect ,useState} from 'react'
import styled from 'styled-components'
import All from"../../img/menue/all.png"
import pizza from"../../img/menue/pizza.png" 
import salad from"../../img/menue/salad.png" 
import pasta from"../../img/menue/pasta.png" 
import dessert from"../../img/menue/dessert.png" 

const ButtonMenue = ({ stateActive ,FilterButton }) => { 
  //onClick={item.filterShow }
  const [stateData , setStateData] = useState({
    active:null,
    ButtonsFilter : [
     { id: 1, name: "all", title: "all" ,img:All },
     { id: 2, name: "pizza", title: "pizza" ,img:pizza },
     { id: 3, name: "pasta", title: "pasta",img:pasta },
     { id: 3, name: "salad", title: "salad",img:salad },
     { id: 3, name: "dessert", title: "dessert",img:dessert },

     
  ]
   })
 //index element put in => active
 const HandelIndex = (index) =>{
  setStateData({...stateData , active:stateData.ButtonsFilter[index]})
 }
 //HandellClassName
 const HandellClassName = (index) =>{
  if (stateData.ButtonsFilter[index] === stateData.active) {
   return "active"
  }else{
   return "unactive"
  }
 }
 //click filter && css active
 function HandelClickFilter(item , index) {
  FilterButton(item.name)
  HandelIndex(index)
 
 }
 //useEffict start select All work
 useEffect(() => { 
  setStateData({...stateData , active:stateData.ButtonsFilter[0]})
 }, [])
  return (
    <MainButton >
      {stateData.ButtonsFilter.map((item,index) =>{
        return (
          <button onClick={()=>HandelClickFilter(item ,index)} className={HandellClassName(index)} key={item.id} >
            <img src={item.img}/>{item.name}
          </button>
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
.unactive{
  color: #ffffff7b;
  img{
    opacity: 0.4;
    border: 6px solid #ffffff7b;
  }
}
.active{
  color: white;
  img{
    opacity: 1;
    border: 6px solid white;
  }


}
 button{

    all: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    cursor: pointer;
    img{
    width: 80px;
    border-radius: 50%;
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