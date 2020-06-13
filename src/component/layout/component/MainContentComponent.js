import React, { useEffect, useState } from "react";
import { FoodCardComponent } from "../../foodCard";
import { useSelector } from "react-redux";
import { apiRestaurantFetch } from "../../navbar/actions/restorentSearchAction";
import { Progress } from "reactstrap";

export function MainContentComponent() {
  const apiRestaurantFetchState = useSelector(
    (state) => state[apiRestaurantFetch.uniqueKey]
  );
  const [localCopyRestaurants, setLocalCopyRestaurants] = useState(null);

  useEffect(() => {
    setLocalCopyRestaurants(apiRestaurantFetchState);
  }, [apiRestaurantFetchState]);

  if (!localCopyRestaurants) return <h4>Search restaurants</h4>;

  if (localCopyRestaurants && localCopyRestaurants.loading) {
    return <Progress animated now={100} />;
  } else if (localCopyRestaurants && localCopyRestaurants.error) {
    return <h4>Something went wrong, please try again</h4>;
  } else if (localCopyRestaurants && localCopyRestaurants.success) {
    return localCopyRestaurants.success.restaurants.map((restaurant) => (
      <FoodCardComponent {...restaurant} />
    ));
  } else {
    return <h4>Search restaurants</h4>;
  }
}
