import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import { useState } from "react";

const Body =()=>{
    const [rresList, setresList] = useState(resList);
    return( 
      <div className="body">
  
     <button className="fil-search" onClick={()=>{
    const filresList = resList.filter(
        (res)=>res.info.avgRating>4
     );
     setresList(filresList)
 }}>Top Rated Restaurant</button>

     <div className="res-container">
         {rresList.map(restaurant=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
 } 
     </div>
     </div>
    )
 }
 export default Body;