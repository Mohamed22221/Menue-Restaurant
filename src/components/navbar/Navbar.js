import React, { useState, useRef  } from "react";
import "./Navbar.css";
import { Container } from '@mui/material';
import LogoLight from"../../img/menue/logoo.png"
import { FaShopify } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import {  Link } from "react-router-dom";
import {  useSelector } from "react-redux";


const Navbar = ({HandelShow}) => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const SelectorTotalAmount = useSelector((state) =>state.SliceCart.cartQuantity)

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };


  return ( 
    <div className="main-nav">


    <Container maxWidth="lg">
      <nav>
          <div className="logo">
          <a onClick={boxHandler} href="#Home"  >
            <img src={LogoLight} />
            </a>
           
        </div>
        <ul ref={linksContainer} className={toggle ? "active" : ""}>
          <li>
            
            <a onClick={boxHandler} href="#Home"  >
              Home
            </a>
          </li>
          <li>
            <Link onClick={boxHandler} to='/Menue-Restaurant' >
              Menu
            </Link>
          </li>
          <li>
            <a onClick={boxHandler} href="#Prx Features">
            Contact
            </a>
          </li>
          <li>
            <a onClick={boxHandler}  href="#Teletoken">
            <FaShopify className="shop" onClick={HandelShow}/>
            <span>{SelectorTotalAmount}</span>
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Contact">
            <IoIosSearch className="shop"/>
            </a>
          </li>
        </ul>
        <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
          
       
      </nav>
      </Container>
      </div>
  );
};

export default Navbar;