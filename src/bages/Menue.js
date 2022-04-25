import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderMenue from '../components/menue/HeaderMenue';
import ButtonMenue from '../components/menue/ButtonMenue';
import MenuFilter from '../components/menue/MenuFilter';
import DataMenue from '../components/menue/DataMenue';

const Menue = () => {
  //filter Button
 const [menueData, setMenueData] = useState(DataMenue)

 const FilterButton = (button)=>{
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
      <ButtonMenue FilterButton={FilterButton}/>
      <MenuFilter menueData={menueData}/>
    </MenueStyle>
  )
}
const MenueStyle = styled.div`


`
export default Menue