import React, { useState, useRef } from "react";
import { Container } from '@mui/material';
import LogoLight from"../../img/menue/logoo.png"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import "./Navbar.css";

const Navbar = ({HandelShow}) => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
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
            <a onClick={boxHandler} href='#About' >
              Menu
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Prx Features">
            Contact
            </a>
          </li>
          <li>
            <a onClick={boxHandler}  href="#Teletoken">
            <ShoppingBagIcon onClick={HandelShow}/>
            </a>
          </li>
          <li>
            <a onClick={boxHandler} href="#Contact">
            <ContentPasteSearchIcon/>
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