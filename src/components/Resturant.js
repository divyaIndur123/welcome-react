import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Resturant = () => {
  const { id } = useParams();
  const [resturant, setResturant] = useState([]);

  const getRestaurantsById = async (resId) => {
    const resDetails = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.898773&lng=77.5764094&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    )
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.log("error", error);
      });
    console.log(
      "resDetails.data.cards[0].card.card.info",
      resDetails.data.cards[0].card.card.info
    );
    setResturant(resDetails.data.cards[0].card.card.info);
  };

  useEffect(() => {
    getRestaurantsById(id);
  }, [id]);

  return (
    <div>
      <h1>{resturant.name}</h1>
      <p>{resturant.areaName}</p>
      <ul>
        {resturant.cuisines?.map((cuisine) => (
          <li>{cuisine}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resturant;
