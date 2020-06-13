import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import { states } from "../../../utils/index";
import { setCurrentCityAction } from '../actions/foodSearchActionsCreator';

export function SearchStateComponent() {
  // const dispatch = useDispatch();

  return (
    <Typeahead
      id="basic-typeahead-example"
      onChange={(selected) => {
        // dispatch(setCurrentCityAction(selected[0]));
      }}
      options={[...states]}
      placeholder="Choose state..."
    />
  );
}
