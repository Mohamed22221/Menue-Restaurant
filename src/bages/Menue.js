import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import HeaderMenue from '../components/menue/HeaderMenue';
import ButtonMenue from '../components/menue/ButtonMenue';
import MenuFilter from '../components/menue/MenuFilter';
import DataMenue from '../components/menue/DataMenue';

import Customize from '../components/menue/Customize';
import HeaderSlider from '../components/menue/headslide/HeaderSlider';

const Menue = () => {
  //state data button
 const [menueData, setMenueData] = useState(DataMenue)
 const [Data, setData] = useState([])

 
  useEffect(() => {
    setData(DataMenue)
  }, [])
  

  //click filter Button
  const FilterButton = (button , index)=>{
  const DataFilterMenue = DataMenue.filter((item)=>item.type == button)
  if (button === "all") {
    setMenueData(DataMenue)
    return;
  }else{
   setMenueData(DataFilterMenue) 
    
  }

  }

  return (
    <>
      <HeaderSlider DataMenue={Data} />
      <ButtonMenue  FilterButton={FilterButton}  />
      <MenuFilter menueData={menueData}/>
      <Customize menueData={menueData} />
    </>
  )
}

export default Menue