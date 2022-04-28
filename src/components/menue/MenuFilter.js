import React   from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { motion } from "framer-motion"
import { FaShopify } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { AddToCart} from '../../store/SliceCart';
import {  useToasts } from 'react-toast-notifications';
const MenuFilter = ({menueData}) => {
    // sliceCart dispatch 
    const Despatch = useDispatch()
    const { addToast } = useToasts();
    const HandelOrder = (item) =>{
        Despatch(AddToCart(item))
        addToast(`${item.name} Added To Cart`, { appearance: 'success' });
    }
  return (
    <StyleFilterMenue>
        <Container maxWidth="lg">
        <MainMenue>
            {menueData.map((item)=>{
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
                      <StarIcon/><StarIcon/>
                      <StarIcon/><StarIcon/>                           
                  </div>
                  <div className='button-order'>
                      <button  onClick={ ()=> HandelOrder(item) }>order<span><FaShopify className='shop'/></span></button>
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
width: 300px;
padding: 40px 0;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
transition: 0.4s;
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
    button{
    all: unset;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    border:0px solid white;
    border-radius:5px ;
    color: white;
    font-size:20px;
    padding: 10px 30px;
    background-color:var(--red-color) ;
    transition: 0.4s;
    
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
    
}
`
export default MenuFilter