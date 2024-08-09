import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";

const Body =()=>{
    return( 
      <div className="body">
  
     <button className="fil-search" onClick={()=>{
    resList = resList.filter(
        (res)=>res.info.avgRating<4
     );
    console.log(resList);
 }}>Top Rated Restaurant</button>
     <div className="res-container">
         {resList.map(restaurant=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
 } 
     </div>
     </div>
    )
 }
 export default Body;