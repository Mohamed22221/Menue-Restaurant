import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import styled from 'styled-components'
import { Hide } from "../../store/StateSlice"
const OverLay = ({HandelHide,show}) => {
  const overLays = useSelector((state) => state.ShowAndHide.value.overLay)
  const Dispatch = useDispatch()
  const handelOverLay = () =>[
    Dispatch(Hide())
  ]
    
  return (
    <StyleOverLay onClick={handelOverLay } overLays={overLays}   ></StyleOverLay>
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
transition :0.6s;
opacity: ${(props) => props.overLays === false ? "0": "0.4"};
visibility:${(props) => props.overLays === false ?"hidden" : "visible"} ;

`
export default OverLay