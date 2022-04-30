import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
 :root{
    --background:#FFFFFF;
    --primary: #F39200;
    --gold-color:#ffa80a;
    --nav-color:#1d2228;
    --text-color:#898787cc;
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
    font-family: 'Tajawal', sans-serif;

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