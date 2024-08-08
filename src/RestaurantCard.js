const RestaurantCard=(props)=>{
    const { resData,cloudinaryImageId,name ,cuisines,avgRating,costForTwo} = props.resData.info;
    
    return(
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="burger" />
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