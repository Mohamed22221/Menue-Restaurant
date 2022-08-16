import React from 'react'
import DataMenue from '../../DataMenue'
import { motion } from "framer-motion"

const Description = ({ParamsId}) => {
  return (
    <div >
     {DataMenue.filter(((item, index) => item.id === ParamsId)).map((item,index) =>{
      return (
       <motion.div className='main-description' key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <h2>Description</h2>
        <p>{item.allDisciption}</p>
       </motion.div>
      )
     })}
    </div>
  )
}

export default Description