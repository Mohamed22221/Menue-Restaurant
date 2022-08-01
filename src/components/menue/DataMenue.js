import pizza1 from"../../img/menue/pizza1.png"
import pizza2 from"../../img/menue/pizza2.png"
import pizza3 from"../../img/menue/pizza3.png"
import pizza4 from"../../img/menue/pizza4.png"
import salad1 from"../../img/menue/salad1.png"
import pasta1 from"../../img/menue/pasta1.png"
import dessert1 from"../../img/menue/disert1.png"
import dessert2 from"../../img/menue/disert2.png"  
import dessert3 from"../../img/menue/disert3.png"  
import dessert4 from"../../img/menue/disert4.png"  
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const DataMenue = [
// data pizza-------   
    {
        id:"1",
        type:"pizza",
        name:"Pepperoni Pizza",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        img:pizza1,
        price:13.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>]
    },
    {
        id:"2",
        type:"pizza",
        name:"Vegetarian",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        img:pizza2,
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        price:9.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>,<StarBorderIcon/>]
    },
    {
        id:"3",
        type:"pizza",
        name:"Four Cheese",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        img:pizza3,
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        price:10.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>]
    },
    {
        id:"4",
        type:"pizza",
        name:"Barbeque Chicken",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        img:pizza4,
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        price:12.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarBorderIcon/>]
    }, 
// data salad------- 
    {
        id:"5",
        type:"salad",
        name:"Ceaser Salad",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        img:salad1,
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        price:10.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>,<StarBorderIcon/>]
    },
// data pasta-------       
    {
        id:"6",
        type:"pasta",
        name:"Sea Food Noodles",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        img:pasta1,
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        price:12.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>]
    },    
// data dessert-------  
    {
        id:"7",
        type:"dessert",
        name:"Rum With Soda",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        img:dessert1,
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        price:5.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarBorderIcon/>,<StarBorderIcon/>]
    }, 
    {
        id:"8",
        type:"dessert",
        name:"Orange Juice",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        img:dessert2,
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        price:6.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarBorderIcon/>]
    },    
    {
        id:"9",
        type:"dessert",
        name:"Chocolate Cookies",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        img:dessert3,
        price:3.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarBorderIcon/>]
    }, 
    {
        id:"10",
        type:"dessert",
        name:"Russian Beer",
        discription:"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
        allDisciption:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica",
        img:dessert4,
        price:4.99,
        rating:[<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarIcon/>,<StarHalfIcon/>]
    },    
   
  
          
]
export default DataMenue