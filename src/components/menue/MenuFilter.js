import React, { useState }   from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material';
import { motion } from "framer-motion"
import { FaShopify } from 'react-icons/fa';
import { GoPlusSmall } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, ShowItemid} from '../../store/SliceCart';
import {  useToasts } from 'react-toast-notifications';
import {  Link } from "react-router-dom";
import { ShowPopUp } from '../../store/StateSlice';

const MenuFilter = ({menueData}) => {
    // sliceCart dispatch 
    const Dispatch = useDispatch()
    const [item1 , setItem1] = useState([])

    const { addToast } = useToasts();
    const OpenCustomize = (item) =>{
        Dispatch(ShowPopUp())
        Dispatch(ShowItemid({...item}))  
        
    }
    
    /*
    const HandelOrder = (item) =>{
        Despatch(AddToCart(item))
        addToast(`${item.name} Added To Cart`, { appearance: 'success' });
    }
    */
  return (
    <StyleFilterMenue>
        <Container maxWidth="lg">
        <MainMenue>
            {menueData.map((item , index)=>{
                return (
                <ItemMenue  key={item.id} as={motion.div} initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}>
                  <div className='img-menue'>
                      <img src={item.img}/>
                  </div>
                  <div className='apout-menu'>
                      <h2>{item.name}</h2>
                      <h5>{item.price}$</h5>
                      <p>{item.discription}</p>
                  </div>
                  <div className='icon-menue'>
                    {item.rating}
                  </div>
                  <div className='button-order'>
                      <button className='first-button'  onClick={ () =>  OpenCustomize(item) }>Customize<span><GoPlusSmall className='shop'/></span></button>
                    <Link to={`/meal/${item.id}`} > <button >Order<span><FaShopify className='shop'/></span></button></Link>
                 </div>  

                </ItemMenue>
                )
             })}
            
        </MainMenue>
        </Container>
    </StyleFilterMenue>
  )
}
const StyleFilterMenue = styled.div`
margin-top: 50px;
`
const MainMenue = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;

@media (max-width:656px) {
justify-content: center;
align-items: center;
}
`
const ItemMenue = styled.div`
width: 330px;
padding: 40px 20px;
margin: 10px 0;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
transition: 0.4s;
box-shadow: 0 3px 24px 0 rgb(25 31 33 / 5%);

@media (max-width:656) {
    width: 100%;
}

.img-menue{
    width: 250px;
    img{
        transition: 0.6s;
        width: 100%;
    }
    &:hover{
    img{
        transform: translateY(-20px);
    }
}
}

.apout-menu{
    h2 , h5 ,p {
    padding: 9px 0;
    }
    h2{
    font-size: 22px;
    }
    h5{
    color: var(--red-color);
    }
    p{
    color: var(--text-color);
    }
}
.icon-menue{
    color: var(--gold-color);
}

.button-order{
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
    all: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: 0.4s;
    border-radius:5px ;
    padding: 7px 30px;
    font-size:16px; 
    color: white;
    background-color:var(--red-color) ;
    border:0px solid white;
    margin: 4px;
    span{
        transition: 0.4s;
        margin-left:10px;
    }
    &:hover{
        transition: 0.9s;
        span{
            transform: translateX(5px);
        }
        opacity: 0.6;
    }


    }
    .first-button{
        color: black;
        background-color: white;
        border: 1px solid var(--text-color);
        padding: 6px 18px;
        
    }



    
}
`
export default MenuFilter