import { RES_IMG_URL } from "../utils/contants";
const ResturantCard = ({ restaurantData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurantData?.info;
  return (
    <div className="res-card">
      <img className="res-img" src={`${RES_IMG_URL}${cloudinaryImageId}`}></img>
      <h3>{name}</h3>
      <h3>{cuisines}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default ResturantCard;
