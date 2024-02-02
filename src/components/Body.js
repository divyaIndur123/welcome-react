import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState();
  const [filteredRestuarants, setFilteredRestuarants] = useState();
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.898773&lng=77.5764094&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log("err", err);
      });

    //OR

    // const data = await fetch(
    //   `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.898773&lng=77.5764094&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    // );
    // const dataNew = await data.json();

    setFilteredRestuarants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestuarants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
            setFilteredRestuarants(topRestuarant);
          }}
        >
          Search
        </button>
      </div>
      <p>{searchInput}</p>
      <div className="card-container">
        {filteredRestuarants?.map((restaurantData, index) => {
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
