import { CDN_URL } from "../Utils/constant";

const RestaurantCard=(props)=>{
    const { resData,cloudinaryImageId,name ,cuisines,avgRating,costForTwo} = props.resData.info;
    
    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="burger" />
               <div className="card-property">
               <h3 className="prop1">{name}</h3>
               <h4 className="prop1">{cuisines.join(",")}</h4>
               <h4 className="prop1">{avgRating} Stars</h4>
               <h4 className="prop1">{costForTwo}</h4>
               </div>
        </div>
    )
}

export default RestaurantCard;