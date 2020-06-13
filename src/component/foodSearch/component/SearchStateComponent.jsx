import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import { states } from "../../../utils/index";
import { setCurrentStateAction } from "../actions/foodSearchActionsCreator";

export function SearchStateComponent() {
  const dispatch = useDispatch();

  return (
    <Typeahead
      id="typeahead-state"
      onChange={(selected) => {
        if (selected && selected.length > 0) {
          dispatch(setCurrentStateAction(selected[0]));
        }
      }}
      options={[...states]}
      placeholder="Choose state..."
    />
  );
}
