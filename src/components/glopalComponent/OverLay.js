import { motion } from "framer-motion"
import styled from 'styled-components'
const OverLay = ({HandelHide,show}) => {
    
  return (
    <StyleOverLay onClick={HandelHide}  as={motion.div} animate={{ opacity: 0.4 }}></StyleOverLay>
  )
}
const StyleOverLay = styled.div`


    content: "";
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
overflow: hidden;
width: 100%;
height: 100%;
background-color: black;
z-index: 999;
transition :0.3s;
opacity: 0;













`
export default OverLay