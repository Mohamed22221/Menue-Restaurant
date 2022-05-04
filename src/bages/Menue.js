import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderMenue from '../components/menue/HeaderMenue';
import ButtonMenue from '../components/menue/ButtonMenue';
import MenuFilter from '../components/menue/MenuFilter';
import DataMenue from '../components/menue/DataMenue';
import All from"../img/menue/all.png"
import pizza from"../img/menue/pizza.png" 
import salad from"../img/menue/salad.png" 
import pasta from"../img/menue/pasta.png" 
import dessert from"../img/menue/dessert.png" 

const Menue = () => {
  //state data button
 const [menueData, setMenueData] = useState(DataMenue)
  const [stateActive , setStateActive] = useState({
    filterMeal : [
      {
        id:1,
        name:"all",
        filterShow:()=>FilterButton("All"),
        image:All
      },
      {
        id:2,
        name:"pizza",
        filterShow:()=>FilterButton("pizza"),
        image:pizza
      },
      {
        id:3,
        name:"salad",
        filterShow:()=>FilterButton("salad" ),
        image:salad
      },
      {
        id:4,
        name:"pasta",
        filterShow:()=>FilterButton("pasta"),
        image:pasta
      },
      {
        id:5,
        name:"dessert",
        filterShow:()=>FilterButton("dessert"),
        image:dessert
      },

    ]
  })

  //click filter Button
  const FilterButton = (button , index)=>{
  const DataFilterMenue = DataMenue.filter((item)=>item.type == button)
  if (button === "All") {
    setMenueData(DataMenue)
    return;
  }else{
   setMenueData(DataFilterMenue) 
    
  }

  }

  return (
    <MenueStyle>
      <HeaderMenue />
      <ButtonMenue stateActive={stateActive} />
      <MenuFilter menueData={menueData}/>
    </MenueStyle>
  )
}
const MenueStyle = styled.div`


`
export default Menue