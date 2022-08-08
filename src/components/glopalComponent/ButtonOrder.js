import React from 'react'
import { FaShopify } from 'react-icons/fa';
import {  Link } from "react-router-dom";

const ButtonOrder = ({item , title}) => {
  return (
   <Link to={item} className="order" >
    <button >
      {title}
      <span> <FaShopify className='shop'/></span>
    </button>
    </Link>
  )
}

export default ButtonOrder