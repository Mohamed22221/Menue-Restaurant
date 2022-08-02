import React from 'react'
import styled from 'styled-components'
import gif from"../../img/glopal/gif.mp4"
import bgLoading from"../../img/glopal/bgloading.jpeg"
import LogoLight from"../../img/menue/logoo.png"

const Loading = () => {

  return (
    <>
      <Circles bgLoading={bgLoading}>
      
       <img src={LogoLight} />
       <video  src={gif} muted type="video/mp4" autoPlay={true} preload="auto" loop></video>
        <div className="loader"></div>
      </Circles>
      </>

  )
}
const Circles = styled.div`
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
height: 100%;
width: 100%;
z-index: 250;
width: 100%;
background: url(${bgLoading});
background-repeat: no-repeat;
background-size: cover;


img{
  position: absolute;
  top: 8%;
  left: 52%;
  transform: translate(-50% ,-50%);
}

video{
   width: 440px;
    z-index: 280;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    filter: drop-shadow(50%);
    @media (max-width:480px) {
      width: 100%;
      height: 100%;
      
    }
    
}



  
`

export default Loading