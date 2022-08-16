import React from 'react'
import DataMenue from '../../DataMenue'

const Description = ({ParamsId}) => {
  return (
    <>
     {DataMenue.filter(((item, index) => item.id === ParamsId)).map((item,index) =>{
      return (
       <div className='main-description' key={index}>
        <h2>Description</h2>
        <p>{item.allDisciption}</p>
       </div>
      )
     })}
    </>
  )
}

export default Description