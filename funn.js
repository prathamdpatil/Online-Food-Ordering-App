import React from "react";
import ReactDOM from "react-dom/client";


const Header = ()=>( 
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://cdn.logojoy.com/wp-content/uploads/20200506163720/34-600x314.png" alt="company name" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
</div>
)
const resList = [
    
]

const RestaurantCard=(props)=>{
    return(
        <div className="res-card">
            <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_Rqw9bSjJhxJr_iZO2963VEgOZ7H0vA4_w&s" alt="burger" />
               <div className="card-property">
               <h3 className="prop1">{props.resname}</h3>
               <h4 className="prop1">{props.proname}</h4>
               <h4 className="prop1">{props.rate}</h4>
               <h4 className="prop1">{props.time}</h4>
               </div>
        </div>
    )
}
const Body =()=>{
   return( 
     <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
       <RestaurantCard resname="Meghana Foods" proname="‘Actual Veggies’ Burger" rate="4.4 Stars" time="38 minutes"/>
       <RestaurantCard resname="KFC" proname="King Burger" rate="4.5 Stars" time="30 minutes"/>
       
    </div>
    </div>
   )
}

const AppLayOut = () => (
    <div className="app">
         <Header/>
         <Body/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayOut/>)