import { RES_IMG_URL } from "../utils/contants";
import { useNavigate } from "react-router-dom";
const ResturantCard = ({ restaurantData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, id } =
    restaurantData?.info;

  const navigate = useNavigate();

  const resDetailsPage = (id) => {
    navigate(`/resturants/${id}`);
  };

  return (
    <div className="res-card" onClick={() => resDetailsPage(id)}>
      <img className="res-img" src={`${RES_IMG_URL}${cloudinaryImageId}`}></img>
      <h3>{name}</h3>
      <h3>{cuisines}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default ResturantCard;
