import React from 'react'
import { FaShopify } from 'react-icons/fa';
import {  Link } from "react-router-dom";

const ButtonOrder = ({item}) => {
  return (
   
   <Link to={`/meal/${item.id}`} className="order" ><button >Order<span><FaShopify className='shop'/></span></button></Link>
   
  )
}

export default ButtonOrder