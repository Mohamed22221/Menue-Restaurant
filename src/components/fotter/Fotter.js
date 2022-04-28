import React from 'react'
import styled from 'styled-components'
import { Container } from '@mui/material';
import Logo from "../../img/menue/logoo.png"
import Googleplay from "../../img/glopal/googleplay.png"
import AppStore from "../../img/glopal/googleplay.png"


const Fotter = () => {
  return (
    <StyledBackground>
    <Container maxWidth="lg">
    <StyledFotter>
     <StyledTopFotter>
        <div className='logo-fotter'>
            <img src={Logo} />
        </div>
        <div className='download'>
            <img src={Googleplay} alt="Googleplay" />
            <img src={AppStore} alt="AppStore"/>
        </div>
     </StyledTopFotter>
    </StyledFotter>
    </Container>
    </StyledBackground>
  )
}
const StyledBackground = styled.div`
background-color: var(--nav-color);

`
const StyledFotter = styled.div`
padding: 40px 0;
`
const StyledTopFotter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.download{
    img{
        width: 150px;
        margin: 4px;
    }
}
`
export default Fotter