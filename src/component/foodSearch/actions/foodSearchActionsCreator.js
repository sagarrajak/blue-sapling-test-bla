import { SET_CURRENT_STATE, SET_CURRENT_CITY } from "./foodSearchActions";

export const setCurrentStateAction = (payload) => {
  return {
    type: SET_CURRENT_STATE,
    payload,
  };
};

export const setCurrentCityAction = (payload) => {
  return {
    type: SET_CURRENT_CITY,
    payload,
  };
};
