import { getApiHelper } from "../../../store/actions/api";

export const apiLocationIdSearch = getApiHelper("searchLocation");
export const apiRestaurantFetch = getApiHelper("searchRestaurant");

export const SELECT_CARD_ACTION = "select_card_action";
export const DESELECT_CARD_ACTION = "deselect_card_action";
export const DELETE_SINGLE_CARD_ACTION = "delete_single_card_action";
export const DELETE_BULK_CARD_ACTION = "delete_bulk_card_action";
export const SET_INIT_DATA = "set_init_data";

export const selectCardAction = (payload) => ({
  type: SELECT_CARD_ACTION,
  payload: payload,
});

export const deselectCardAction = (payload) => ({
  type: DESELECT_CARD_ACTION,
  payload,
});

export const deleteSingleCardAction = (payload) => ({
  type: DELETE_SINGLE_CARD_ACTION,
  payload,
});

export const deleteBulkCardAction = () => ({
  type: DELETE_BULK_CARD_ACTION,
});

export const setInitDataAction = (payload) => ({
  type: SET_INIT_DATA,
  payload,
});
