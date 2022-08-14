import { useSelect } from '@mui/base'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Search.scss"
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';


import DataMenue from '../menue/DataMenue';
import { Link } from "react-router-dom";
import { Hide } from '../../store/StateSlice';
const Search = () => {
  const SearchMeal = useSelector((state) => state.ShowAndHide.value.search)
  const Dispatch = useDispatch()
  //filter search 
  const [filterData, setFilterData] = useState([])
  const [wordEnter , setWordEnter] = useState("")
  const HandelFilter = (e) =>{
    const targetValue = e.target.value
    setWordEnter(targetValue)
    const data = DataMenue.filter(item =>{
      return item.name.toUpperCase().includes(targetValue.toUpperCase())
    })
    targetValue === "" ? setFilterData([]) : setFilterData(data) ;
    
  }
   //go to meal
   const HandelGoMeal = () =>{
    Dispatch(Hide())
    setFilterData([])
    setWordEnter("")
   }
   //close search
   const HandelClose = (e) =>{
    e.preventDefault()
    setFilterData([])
    setWordEnter("")

   }

   
  return (
    <div className='form-search'>
      <form className={SearchMeal === false ? "hide-form" : "show-form"} >
        <input type="text" placeholder='Search...' value={wordEnter} onChange={HandelFilter} />
        <button >{filterData.length === 0 ?<BsSearch /> : <AiOutlineClose onClick={HandelClose} /> }</button>
        {filterData.length != 0 && (
          <div className='data-search'>
            {filterData.map((item) => {
              return (
                <Link to={`/meal/${item.id}`} onClick={HandelGoMeal} >
                  <div key={item.id} className="item-data-search" >
                    <div className='left-item'>
                      <h3>{item.type}</h3>
                      <h1>{item.name}</h1>
                      <p>{item.price}</p>
                    </div>
                    <div className='right-item'>
                      <img src={item.img} />
                    </div>
                  </div>
                </Link>
              )

            })}
          </div>
        )}

      </form>

    </div>
  )
}

export default Search