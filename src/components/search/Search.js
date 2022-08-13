import { useSelect } from '@mui/base'
import React from 'react'
import { useSelector } from 'react-redux'
import "./Search.scss"
import { BsSearch } from 'react-icons/bs';

const Search = () => {
 const SearchMeal = useSelector((state) => state.ShowAndHide.value.search)

  return (
   <div className='form-search'>
    <form className={SearchMeal === false ? "hide-form" : "show-form"} >
     <input type="search" placeholder='Search...' />
     <button ><BsSearch/></button>
    </form>
    </div>
  )
}

export default Search