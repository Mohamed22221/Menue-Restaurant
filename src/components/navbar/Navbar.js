import React, { useState, useRef  } from "react";
import "./Navbar.css";
import { Container } from '@mui/material';
import LogoLight from"../../img/glopal/logo.png"
import { FaShopify } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import {  Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { ShowCart ,ShowSearch } from "../../store/StateSlice";


const Navbar = ({HandelShow}) => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const Dispatch = useDispatch()
  const SelectorTotalAmount = useSelector((state) =>state.SliceCart.cartQuantity)
  //handel toggle navbar
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const showSearch = () =>{
    Dispatch(ShowSearch())
  }
  const boxHandler = () => {
    setToggle(false);
  };
  //show Cart menue
  const HandelShowMenue = () =>{
    Dispatch(ShowCart())
  }


  return ( 
    <div className="main-nav">


    <Container maxWidth="lg">
      <nav>
          <div className="logo">
          <Link to="/Menue-Restaurant" onClick={boxHandler} href="#Home"  ><img src={LogoLight} /></Link>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
            
            <Link onClick={boxHandler} to="/Menue-Restaurant"  >
              Home
            </Link>
          </li>
          <li>
            <Link onClick={boxHandler} to='/menu' >
              Menu
            </Link>
          </li>
          <li>
            <a onClick={boxHandler} href="#Prx Features">
            Contact
            </a>
          </li>

        </ul>

        <div className="other-about">
          <div className="main-shop">
            <a onClick={boxHandler}  href="#Teletoken">
            <FaShopify className="shop" onClick={HandelShowMenue}/>
           
            
            </a>
            <span>{SelectorTotalAmount}</span>
            </div>
            <a onClick={showSearch} href="#Contact">
            <IoIosSearch className="shop search"/>
            </a>
            <div onClick={handleToggle} className="toggle-button">
              <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>


          
       
      </nav>
      </Container>
      </div>
  );
};

export default Navbar;