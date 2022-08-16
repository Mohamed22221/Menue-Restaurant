import { Container } from '@mui/material'
import React, { useState } from 'react'
import Description from './Description'
import "./RevAndDes.scss"
import Review from './Review'

const RevAndDes = ({ParamsId}) => {
  const [toggleData , setToggleData]  = useState(true)
  const [active ]  = useState("active")

  const HandelDes = () =>{
    setToggleData(true)
    
  }
  const HandelRev = () =>{
    setToggleData(false)
    
  }
  return (
    <Container maxWidth="lg" >
    <div className='main-des-rev' >
      <button onClick={HandelDes} className={toggleData === true ? active : "un-active"}>Description</button>
      <button onClick={HandelRev} className={toggleData === false ? active : "un-active"}>Reviews</button>
      {toggleData === true ? <Description ParamsId={ParamsId} /> : <Review />}
    </div>
    </Container>
  )
}

export default RevAndDes