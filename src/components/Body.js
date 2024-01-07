import ResturantCard from "./ResturantCard";
import { restaurants } from "./../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState(restaurants);
  const [searchInput, setSearchInput] = useState();
  return (
    <div className="body">
      <div className="search-container">
        <input onChange={(e) => setSearchInput(e.target.value)}></input>
        <button
          onClick={() => {
            const topRestuarant = listOfRestuarants.filter((restaurant) => {
              if (
                restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(searchInput?.toLowerCase())
              ) {
                return restaurant;
              }
            });
            setListOfRestuarants(topRestuarant);
          }}
        >
          Search
        </button>
      </div>
      <p>{searchInput}</p>
      <div className="card-container">
        {listOfRestuarants?.map((restaurantData, index) => {
          return (
            <ResturantCard
              key={restaurantData.info.id}
              restaurantData={restaurantData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
