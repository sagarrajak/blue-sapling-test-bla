import React, { useEffect, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { useSelector, useDispatch } from "react-redux";
import { states, stateCityArray } from "../../../utils/states";
import { setCurrentCityAction } from "../actions/foodSearchActionsCreator";

export function SearchCityComponent() {
  // const dispatch = useDispatch();
  const selectedState = useSelector((state) => state.stateSearch.currentState);
  const [selectedCity, setSelectedCity] = useState([]);
  // const [cities, setCities] = useState([]);
  const dispatch = useDispatch();

  const getCityList = () => {
    if (selectedState) {
      const index = states.findIndex((state) => state === selectedState);

      if (index >= 0) {
        return stateCityArray[index + 1].split(" | ");
      }
      return [];
    }
    return [];
  };

  useEffect(() => {
    setSelectedCity("");
  }, [selectedState]);

  return (
    <Typeahead
      id="typedhead-city"
      onChange={(selected) => {
        if (selected && selected.length > 0) {
          dispatch(setCurrentCityAction(selected[0]));
        }
      }}
      selected={selectedCity}
      options={[...getCityList()]}
      placeholder="Choose city..."
    />
  );
}
