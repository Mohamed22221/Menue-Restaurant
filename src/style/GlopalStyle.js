import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
 :root{
    --background:#FFFFFF;
    --primary: #F39200;
    --gold-color:#ffa80a;
    --nav-color:#1d2228;
    --text-color:#848486;
    --red-color: #ed4e53;
    --border-color: #2e344e;
} 
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    
}
body{
    font-family: 'Oswald', sans-serif;

}
p{
    letter-spacing: 0.4px;
}
.order{
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
    border-radius:20px ;
    padding: 7px 30px;
    font-size:16px; 
    color: white;
    background-color:var(--red-color) ;
    border:0px solid white;
    margin: 4px;
    box-shadow: 4px 3px 24px rgb(237 78 83 / 50%);
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
    
body::-webkit-scrollbar{
    width: 9px;
    background-color: var(--secound-color);
}
body::-webkit-scrollbar-track{
   
    background-color:  var(--nav-color);
}
body::-webkit-scrollbar-thumb{
    background-color: var(--primary);
    border-radius: 10px;
}
`

export default GlopalStyle