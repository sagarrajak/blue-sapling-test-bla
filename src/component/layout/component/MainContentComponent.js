import React, { useEffect, useState } from "react";
import { FoodCardComponent } from "../../foodCard";
import { useSelector, useDispatch } from "react-redux";
import {
  apiRestaurantFetch,
  setInitDataAction,
} from "../../navbar/actions/restorentSearchAction";
import { Progress } from "reactstrap";

export function MainContentComponent() {
  const apiRestaurantFetchState = useSelector(
    (state) => state[apiRestaurantFetch.uniqueKey]
  );
  const currentVisibleList = useSelector(
    (state) => state.navbarReducer.restaurantListVisible
  );
  const dispatch = useDispatch();
  // const [localCopyRestaurants, setLocalCopyRestaurants] = useState(null);

  useEffect(() => {
    if (!apiRestaurantFetchState.loading && apiRestaurantFetchState.success) {
      dispatch(setInitDataAction(apiRestaurantFetchState.success.restaurants));
    }
  }, [apiRestaurantFetchState]);

  // if (!localCopyRestaurants) return <h4>Search restaurants</h4>;

  if (apiRestaurantFetchState && apiRestaurantFetchState.loading) {
    return <Progress animated now={100} />;
  } else if (apiRestaurantFetchState && apiRestaurantFetchState.error) {
    return <h4>Something went wrong, please try again</h4>;
  } else if (apiRestaurantFetchState && apiRestaurantFetchState.success) {
    return currentVisibleList.map((restaurant) => (
      <FoodCardComponent {...restaurant} />
    ));
  } else {
    return <h4>Search restaurants</h4>;
  }
}
